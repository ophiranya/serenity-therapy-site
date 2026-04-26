interface BookingConfirmationProps {
  service: string;
  date: Date;
  time: string;
  name: string;
}

export default function BookingConfirmation({
  service,
  date,
  time,
  name,
}: BookingConfirmationProps) {
  return (
    <div className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center">
      <svg
        className="mx-auto h-16 w-16 text-success"
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
      <h2 className="mt-4 font-serif text-2xl font-bold text-foreground">
        Appointment Confirmed!
      </h2>
      <p className="mt-2 text-text-secondary">
        Thank you, {name}. Your appointment has been scheduled.
      </p>

      <div className="mt-6 mx-auto max-w-sm rounded-xl bg-surface border border-border p-6 text-left space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-text-secondary">Service</span>
          <span className="text-sm font-medium text-foreground">{service}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-text-secondary">Date</span>
          <span className="text-sm font-medium text-foreground">
            {date.toLocaleDateString("default", {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-text-secondary">Time</span>
          <span className="text-sm font-medium text-foreground">{time}</span>
        </div>
      </div>

      <p className="mt-6 text-sm text-text-secondary">
        A confirmation email will be sent to you shortly. If you need to
        reschedule, please contact us at least 24 hours in advance.
      </p>
    </div>
  );
}
