import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const bodySchema = z.object({
  email: z.string().email(),
  source: z.string().max(64).optional(),
});

const RESEND_API = "https://api.resend.com/audiences";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid email" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Phase 0：未配置 Resend 时直接返回成功（dev 模式 / 演示）。
  if (!apiKey || !audienceId) {
    if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        { ok: false, error: "Waitlist service not configured" },
        { status: 503 },
      );
    }
    console.warn(
      "[waitlist] RESEND_API_KEY / RESEND_AUDIENCE_ID 未配置，进入 dev 模拟模式",
    );
    return NextResponse.json({ ok: true, duplicate: false, dev: true });
  }

  try {
    const res = await fetch(`${RESEND_API}/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: parsed.data.email,
        unsubscribed: false,
      }),
    });

    if (res.ok) {
      return NextResponse.json({ ok: true, duplicate: false });
    }

    // Resend 的重复 contact 通常返回 4xx；用 message 关键字识别。
    const data = (await res.json().catch(() => ({}))) as {
      message?: string;
      name?: string;
    };

    const message = (data.message ?? "").toLowerCase();
    const isDuplicate =
      res.status === 409 ||
      message.includes("already exists") ||
      message.includes("contact already") ||
      data.name === "validation_error";

    if (isDuplicate) {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    console.error("[waitlist] Resend error", res.status, data);
    return NextResponse.json(
      { ok: false, error: data.message ?? "Resend error" },
      { status: 502 },
    );
  } catch (err) {
    console.error("[waitlist] fetch failed", err);
    return NextResponse.json(
      { ok: false, error: "Network error" },
      { status: 500 },
    );
  }
}
