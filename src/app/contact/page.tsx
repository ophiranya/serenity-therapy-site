import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Serenity Mind Wellness. Reach out by phone, email, or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Contact Us
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              We&apos;re here to answer your questions and help you take the
              first step.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-text-secondary mb-6">
                Fill out the form and we&apos;ll respond within 24 hours.
              </p>
              <ContactForm />
            </div>

            <div className="space-y-6">
              <Card>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Location</h3>
                    <p className="mt-1 text-text-secondary">
                      123 Wellness Avenue, Suite 200
                      <br />
                      Portland, OR 97201
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="mt-1">
                      <a href="tel:+15035551234" className="text-text-secondary hover:text-primary transition-colors">
                        (503) 555-1234
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="mt-1">
                      <a href="mailto:hello@serenitymind.com" className="text-text-secondary hover:text-primary transition-colors">
                        hello@serenitymind.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Hours</h3>
                    <div className="mt-1 text-text-secondary text-sm space-y-1">
                      <p>Monday &ndash; Friday: 8:00 AM &ndash; 7:00 PM</p>
                      <p>Saturday: 9:00 AM &ndash; 3:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="h-10 w-10 text-primary/40 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-text-secondary">Map placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
