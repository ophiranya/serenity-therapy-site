export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: "individual",
    title: "Individual Therapy",
    description:
      "One-on-one sessions tailored to your unique needs. Work through personal challenges, develop coping strategies, and build resilience in a safe, confidential space.",
    icon: "user",
  },
  {
    id: "couples",
    title: "Couples Therapy",
    description:
      "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection. Rebuild trust and intimacy together.",
    icon: "heart",
  },
  {
    id: "family",
    title: "Family Therapy",
    description:
      "Navigate family dynamics, improve communication patterns, and heal relationships. Create a healthier, more supportive family environment for everyone.",
    icon: "family",
  },
  {
    id: "group",
    title: "Group Therapy",
    description:
      "Connect with others who share similar experiences. Group sessions provide community support, shared learning, and the knowledge that you're not alone.",
    icon: "group",
  },
  {
    id: "anxiety",
    title: "Anxiety & Depression",
    description:
      "Evidence-based treatments for anxiety disorders and depression. Learn to manage symptoms, challenge negative thought patterns, and rediscover joy.",
    icon: "brain",
  },
  {
    id: "trauma",
    title: "Trauma & PTSD",
    description:
      "Specialized trauma-informed care to help you process difficult experiences. Reclaim your sense of safety and move forward with renewed strength.",
    icon: "shield",
  },
];
