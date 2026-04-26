"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(form: FormData) {
    const errs: Record<string, string> = {};
    if (!form.get("name")) errs.name = "Name is required";
    const email = form.get("email") as string;
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    if (!form.get("message")) errs.message = "Message is required";
    return errs;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-success"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-text-secondary">
          Thank you for reaching out. We&apos;ll get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full rounded-lg border ${errors.name ? "border-error" : "border-border"} bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`w-full rounded-lg border ${errors.email ? "border-error" : "border-border"} bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Phone <span className="text-text-secondary">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full rounded-lg border ${errors.message ? "border-error" : "border-border"} bg-surface px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
