import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what our clients have to say about their experience at Serenity Mind Wellness.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Testimonials
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Stories of Healing & Growth
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Every journey is unique. Here&apos;s what some of our clients have
              shared about their experience with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.id} hover>
                <svg
                  className="h-8 w-8 text-primary/30 mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                </svg>
                <p className="text-text-secondary italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-text-secondary">{t.context}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Start Your Own Story
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Your journey toward healing and growth is waiting.
          </p>
          <div className="mt-8">
            <Button
              href="/book"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
