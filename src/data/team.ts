export interface TeamMember {
  id: number;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  specialties: string[];
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Eleanor Vance",
    title: "Clinical Director",
    credentials: "PsyD, Licensed Clinical Psychologist",
    bio: "With over 15 years of experience, Dr. Vance specializes in trauma-informed care and evidence-based treatments for anxiety and depression. She founded Serenity Mind Wellness with a vision of making quality mental health care accessible to all.",
    specialties: ["Trauma & PTSD", "Anxiety", "Depression", "EMDR"],
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Licensed Marriage & Family Therapist",
    credentials: "LMFT, Certified Gottman Therapist",
    bio: "Marcus brings warmth and expertise to his work with couples and families. Trained in the Gottman Method, he helps partners rebuild connection and families strengthen their bonds through improved communication.",
    specialties: [
      "Couples Therapy",
      "Family Therapy",
      "Communication",
      "Relationship Issues",
    ],
  },
  {
    id: 3,
    name: "Dr. Amara Okafor",
    title: "Licensed Clinical Social Worker",
    credentials: "LCSW, PhD in Social Work",
    bio: "Dr. Okafor is passionate about group therapy and community healing. Her research background in social determinants of mental health informs her holistic approach to treatment, helping clients build resilience through connection.",
    specialties: [
      "Group Therapy",
      "Anxiety & Depression",
      "Cultural Identity",
      "Mindfulness",
    ],
  },
];
