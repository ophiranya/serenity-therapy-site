"use client";

import { useState } from "react";
import { services } from "@/data/services";
import CalendarPicker from "@/components/book/CalendarPicker";
import TimeSlots from "@/components/book/TimeSlots";
import BookingConfirmation from "@/components/book/BookingConfirmation";
import Button from "@/components/ui/Button";

type Step = "service" | "datetime" | "details" | "confirmed";

export default function BookPage() {
  const [step, setStep] = useState<Step>("service");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [month, setMonth] = useState(new Date());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    { key: "service", label: "Service" },
    { key: "datetime", label: "Date & Time" },
    { key: "details", label: "Your Details" },
  ];

  const currentIndex = steps.findIndex((s) => s.key === step);

  function handleServiceSelect(id: string) {
    setSelectedService(id);
    setStep("datetime");
  }

  function handleDetailsSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStep("confirmed");
    }
  }

  if (step === "confirmed" && selectedDate && selectedTime) {
    const serviceName =
      services.find((s) => s.id === selectedService)?.title ?? selectedService;
    return (
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <BookingConfirmation
            service={serviceName}
            date={selectedDate}
            time={selectedTime}
            name={name}
          />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Book Appointment
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
              Schedule Your Session
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Choose your service, pick a convenient time, and take the first
              step toward wellness.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10 flex items-center justify-center gap-2">
            {steps.map((s, i) => (
              <div key={s.key} className="flex items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    i <= currentIndex
                      ? "bg-primary text-white"
                      : "bg-border text-text-secondary"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden text-sm font-medium sm:inline ${
                    i <= currentIndex ? "text-foreground" : "text-text-secondary"
                  }`}
                >
                  {s.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`h-px w-8 sm:w-16 ${
                      i < currentIndex ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {step === "service" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Select a Service
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => handleServiceSelect(service.id)}
                    className={`rounded-2xl border p-5 text-left transition-all hover:shadow-md ${
                      selectedService === service.id
                        ? "border-primary bg-primary/5"
                        : "border-border bg-surface hover:border-primary/50"
                    }`}
                  >
                    <h3 className="font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                      {service.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "datetime" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Pick a Date & Time
              </h2>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <CalendarPicker
                  selected={selectedDate}
                  onSelect={(d) => {
                    setSelectedDate(d);
                    setSelectedTime(null);
                  }}
                  month={month}
                  onMonthChange={setMonth}
                />
              </div>
              {selectedDate && (
                <div className="mt-6">
                  <TimeSlots
                    selected={selectedTime}
                    onSelect={setSelectedTime}
                    date={selectedDate}
                  />
                </div>
              )}
              <div className="mt-8 flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setStep("service")}
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep("details")}
                  disabled={!selectedDate || !selectedTime}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === "details" && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Your Details
              </h2>
              <form
                onSubmit={handleDetailsSubmit}
                className="rounded-2xl border border-border bg-surface p-6 space-y-5"
                noValidate
              >
                <div>
                  <label
                    htmlFor="book-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="book-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full rounded-lg border ${errors.name ? "border-error" : "border-border"} bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="book-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="book-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-lg border ${errors.email ? "border-error" : "border-border"} bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="book-phone"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Phone <span className="text-text-secondary">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="book-phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="flex justify-between pt-2">
                  <Button
                    variant="outline"
                    onClick={() => setStep("datetime")}
                  >
                    Back
                  </Button>
                  <Button type="submit">Confirm Booking</Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
