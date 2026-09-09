"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function validate(next: FormState) {
    const nextErrors: Partial<FormState> = {};
    if (!next.name.trim()) nextErrors.name = "Tell us who to reply to.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      nextErrors.email = "Use a valid email address.";
    }
    if (next.message.trim().length < 12) {
      nextErrors.message = "Add a short note about the work you need.";
    }
    return nextErrors;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Check the highlighted fields and try again.");
      return;
    }

    setStatus("sending");
    const subject = encodeURIComponent(
      `Nextvia inquiry from ${values.name}${values.company ? ` (${values.company})` : ""}`
    );
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}${
        values.company ? `\n${values.company}` : ""
      }`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    toast.success("Your mail client should open with the message ready.");
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-primary/30 bg-primary/8 p-6">
        <h2 className="font-heading text-xl font-semibold">Message prepared</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          If your mail app did not open, write us directly at{" "}
          <a className="text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
        <button
          type="button"
          className={cn(buttonVariants({ variant: "outline" }), "mt-5 h-10 px-4")}
          onClick={() => {
            setStatus("idle");
            setValues(empty);
            setErrors({});
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name}
          value={values.name}
          onChange={(name) => setValues((v) => ({ ...v, name }))}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(email) => setValues((v) => ({ ...v, email }))}
        />
      </div>
      <Field
        id="company"
        label="Company (optional)"
        value={values.company}
        onChange={(company) => setValues((v) => ({ ...v, company }))}
      />
      <div className="space-y-1.5">
        <Label htmlFor="message">What do you need?</Label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="flex min-h-32 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
          aria-invalid={Boolean(errors.message)}
          value={values.message}
          onChange={(event) =>
            setValues((v) => ({ ...v, message: event.target.value }))
          }
          placeholder="Network, telecom, software, or an operational problem you want solved."
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message}</p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(buttonVariants({ size: "lg" }), "h-11 w-full px-4 sm:w-auto")}
      >
        {status === "sending" ? "Opening mail…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        aria-invalid={Boolean(error)}
        className="h-10 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive"
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
