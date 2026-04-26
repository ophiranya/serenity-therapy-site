import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ServicesPreview from "@/components/home/ServicesPreview";
import CTABanner from "@/components/home/CTABanner";
import Card from "@/components/ui/Card";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  const featured = testimonials.slice(0, 2);

  return (
    <>
      <Hero />
      <Features />
      <ServicesPreview />

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary mx-auto" />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {featured.map((t) => (
              <Card key={t.id}>
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

      <CTABanner />
    </>
  );
}
