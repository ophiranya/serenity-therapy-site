export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Serenity Mind Wellness gave me the tools to manage my anxiety in ways I never thought possible. I feel like myself again.",
    name: "Sarah M.",
    context: "Individual Therapy Client",
  },
  {
    id: 2,
    quote:
      "My partner and I were on the verge of separation. Couples therapy here saved our relationship and taught us how to truly communicate.",
    name: "James & Lisa K.",
    context: "Couples Therapy Clients",
  },
  {
    id: 3,
    quote:
      "After years of carrying trauma, I finally found a therapist who helped me process it safely. The compassion and expertise here are unmatched.",
    name: "Michael R.",
    context: "Trauma Therapy Client",
  },
  {
    id: 4,
    quote:
      "Group therapy was something I was terrified of, but it turned out to be the most healing experience. Knowing others understood made all the difference.",
    name: "Emily T.",
    context: "Group Therapy Client",
  },
  {
    id: 5,
    quote:
      "The family therapy sessions transformed how we relate to each other. Our home feels peaceful again, and my kids are thriving.",
    name: "David & Rachel P.",
    context: "Family Therapy Clients",
  },
  {
    id: 6,
    quote:
      "I was skeptical about therapy, but my therapist met me where I was without judgment. It's been life-changing for my depression.",
    name: "Alex W.",
    context: "Individual Therapy Client",
  },
  {
    id: 7,
    quote:
      "The flexible scheduling and warm environment made it easy to commit to my mental health journey. I recommend Serenity Mind to everyone.",
    name: "Nina J.",
    context: "Anxiety Treatment Client",
  },
  {
    id: 8,
    quote:
      "Finding a practice that truly listens and adapts to your needs is rare. I'm grateful every day for the progress I've made here.",
    name: "Chris L.",
    context: "Individual Therapy Client",
  },
];
