import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the compassionate team at Serenity Mind Wellness. Learn about our mission, values, and approach to mental health care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              About Us
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Healing Begins with Connection
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary">
              At Serenity Mind Wellness, we believe that everyone deserves access
              to quality mental health care. Our practice was founded on the
              principle that healing happens in relationships — between therapist
              and client, within families, and in community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Our Mission
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
              <p className="mt-6 text-text-secondary leading-relaxed">
                We are dedicated to providing compassionate, culturally
                responsive, and evidence-based mental health services. Our goal
                is to empower individuals, couples, and families to overcome
                challenges, build resilience, and live more fulfilling lives.
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                We understand that seeking therapy takes courage. That&apos;s why
                we&apos;ve created a warm, welcoming space where you can feel
                safe to be vulnerable, explore your inner world, and grow at your
                own pace.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Our Values
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Compassion",
                    desc: "We lead with empathy and understanding in every interaction.",
                  },
                  {
                    title: "Integrity",
                    desc: "We uphold the highest ethical standards in our practice.",
                  },
                  {
                    title: "Inclusivity",
                    desc: "We honor and respect the diverse identities and experiences of all clients.",
                  },
                  {
                    title: "Growth",
                    desc: "We believe in the capacity for change and continuous personal development.",
                  },
                ].map((v) => (
                  <li key={v.title} className="flex gap-3">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-primary mt-0.5"
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
                    <div>
                      <p className="font-semibold text-foreground">{v.title}</p>
                      <p className="text-sm text-text-secondary">{v.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="Our licensed professionals bring years of experience and a genuine passion for helping you heal."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.id} hover>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-4">
                  <span className="text-2xl font-serif font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">{member.title}</p>
                  <p className="text-sm text-text-secondary">
                    {member.credentials}
                  </p>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {member.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Join Us on the Path to Wellness
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Take the first step toward a healthier, happier you.
          </p>
          <div className="mt-8">
            <Button
              href="/book"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Book Your First Session
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
