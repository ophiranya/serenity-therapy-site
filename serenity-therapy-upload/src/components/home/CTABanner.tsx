import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Ready to Take the First Step?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          You don&apos;t have to face life&apos;s challenges alone. Our
          compassionate team is here to support you on your journey to wellness.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/book" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Book an Appointment
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
