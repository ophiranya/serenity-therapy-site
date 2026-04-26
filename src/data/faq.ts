export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What should I expect during my first session?",
    answer:
      "Your first session is an opportunity for us to get to know you. We'll discuss your reasons for seeking therapy, your history, and your goals. It's a collaborative conversation — there's no pressure to share more than you're comfortable with. We'll also discuss how therapy works and answer any questions you have.",
  },
  {
    id: 2,
    question: "How long does each therapy session last?",
    answer:
      "Individual therapy sessions typically last 50 minutes. Couples and family sessions may run 60–90 minutes depending on the needs of the session. We'll discuss the ideal session length for your situation during your initial consultation.",
  },
  {
    id: 3,
    question: "Do you accept insurance?",
    answer:
      "We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. We also offer sliding-scale fees for those without insurance or who are underinsured. Please contact us to verify your specific coverage.",
  },
  {
    id: 4,
    question: "How often should I attend therapy?",
    answer:
      "Most clients begin with weekly sessions to build momentum and establish a strong therapeutic relationship. As you progress, we may adjust to biweekly or monthly sessions. The frequency is always tailored to your individual needs and goals.",
  },
  {
    id: 5,
    question: "Is therapy confidential?",
    answer:
      "Absolutely. Everything discussed in therapy is strictly confidential. We adhere to HIPAA regulations and ethical guidelines. The only exceptions are situations involving imminent danger to yourself or others, or as required by law. We'll discuss the limits of confidentiality in detail during your first session.",
  },
  {
    id: 6,
    question: "Do you offer virtual/telehealth sessions?",
    answer:
      "Yes! We offer secure, HIPAA-compliant video sessions for clients who prefer the convenience of meeting from home. Telehealth sessions are just as effective as in-person sessions and are available for individual, couples, and family therapy.",
  },
  {
    id: 7,
    question: "How do I know if therapy is right for me?",
    answer:
      "Therapy can benefit anyone looking to improve their mental health, navigate life transitions, or work through specific challenges. If you're feeling stuck, overwhelmed, anxious, or simply want to understand yourself better, therapy can help. We offer a free initial consultation to help you determine if our services are a good fit.",
  },
  {
    id: 8,
    question: "What types of therapy approaches do you use?",
    answer:
      "Our therapists are trained in multiple evidence-based approaches including Cognitive Behavioral Therapy (CBT), EMDR, Dialectical Behavior Therapy (DBT), psychodynamic therapy, and mindfulness-based techniques. We tailor our approach to what works best for each individual client.",
  },
  {
    id: 9,
    question: "What is your cancellation policy?",
    answer:
      "We require 24 hours notice for cancellations or rescheduling. Late cancellations or missed appointments may be subject to a fee. We understand that emergencies happen and will always work with you on a case-by-case basis.",
  },
  {
    id: 10,
    question: "How do I get started?",
    answer:
      "Getting started is easy! You can book an appointment through our online scheduling system, call us directly, or fill out our contact form. We'll match you with a therapist who specializes in your areas of concern and schedule your first session at a time that works for you.",
  },
];
