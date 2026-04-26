import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Schedule your therapy appointment at Serenity Mind Wellness. Choose your service, pick a date and time, and take the first step.",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
