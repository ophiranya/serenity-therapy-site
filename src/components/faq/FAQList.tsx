"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";

export default function FAQList() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqItems.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-border bg-surface overflow-hidden"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-background"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            aria-expanded={openId === item.id}
          >
            <span className="font-medium text-foreground pr-4">
              {item.question}
            </span>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-text-secondary transition-transform duration-200 ${
                openId === item.id ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          {openId === item.id && (
            <div className="px-6 pb-5">
              <p className="text-text-secondary leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
