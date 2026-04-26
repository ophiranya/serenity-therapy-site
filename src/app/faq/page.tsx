import type { Metadata } from "next";
import FAQList from "@/components/faq/FAQList";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about therapy at Serenity Mind Wellness. Learn about sessions, insurance, confidentiality, and more.",
};

export default function FAQPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              We understand you may have questions before starting therapy.
              Here are answers to the most common ones.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FAQList />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We&apos;re happy to answer any additional questions you may have.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
