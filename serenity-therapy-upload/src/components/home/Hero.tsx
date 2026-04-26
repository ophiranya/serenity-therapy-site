import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Welcome to Serenity Mind Wellness
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your Journey to{" "}
            <span className="text-primary">Inner Peace</span> Starts Here
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">
            Compassionate, evidence-based therapy services to help you navigate
            life&apos;s challenges, heal from the past, and build a more
            fulfilling future.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/book" size="lg">
              Book an Appointment
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
    </section>
  );
}
