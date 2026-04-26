"use client";

const ALL_SLOTS = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

interface TimeSlotsProps {
  selected: string | null;
  onSelect: (time: string) => void;
  date: Date;
}

export default function TimeSlots({ selected, onSelect, date }: TimeSlotsProps) {
  const seed = date.getDate() + date.getMonth();
  const available = ALL_SLOTS.filter((_, i) => (seed + i) % 3 !== 0);

  return (
    <div>
      <h3 className="font-semibold text-foreground mb-3">
        Available Times for{" "}
        {date.toLocaleDateString("default", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {available.map((time) => (
          <button
            key={time}
            type="button"
            onClick={() => onSelect(time)}
            className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
              selected === time
                ? "border-primary bg-primary text-white"
                : "border-border text-foreground hover:border-primary hover:bg-primary/5"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
      {available.length === 0 && (
        <p className="text-text-secondary">
          No available times for this date. Please try another day.
        </p>
      )}
    </div>
  );
}
