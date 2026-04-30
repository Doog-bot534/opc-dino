"use client";

import { useState, type FormEvent } from "react";
import { Loader2, Mail } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

const emailSchema = z.string().email();

type Variant = "inline" | "stacked";

interface WaitlistFormProps {
  variant?: Variant;
  className?: string;
  /** 来源标签，写入 Resend contact 的 unsubscribed/notes（可选 metadata）。 */
  source?: string;
}

export function WaitlistForm({
  variant = "inline",
  className,
  source = "landing",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const dict = t.waitlistForm;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    const parsed = emailSchema.safeParse(email.trim());
    if (!parsed.success) {
      toast.error(dict.invalidEmail);
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data, source }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        duplicate?: boolean;
        error?: string;
      };

      if (res.ok && data.ok) {
        if (data.duplicate) {
          toast.info(dict.duplicateTitle, {
            description: dict.duplicateDescription,
          });
        } else {
          toast.success(dict.successTitle, {
            description: dict.successDescription,
          });
          setEmail("");
        }
      } else {
        toast.error(dict.serverError, {
          description: data.error,
        });
      }
    } catch {
      toast.error(dict.serverError);
    } finally {
      setSubmitting(false);
    }
  }

  const stacked = variant === "stacked";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "w-full",
        stacked
          ? "flex flex-col gap-3"
          : "flex flex-col gap-3 sm:flex-row sm:items-center",
        className,
      )}
    >
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={dict.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitting}
          className="h-11 pl-9"
          aria-label={dict.placeholder}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className={cn("h-11", stacked ? "w-full" : "sm:w-auto")}
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {dict.submitting}
          </>
        ) : (
          dict.submit
        )}
      </Button>
    </form>
  );
}
