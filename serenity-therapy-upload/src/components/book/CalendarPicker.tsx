"use client";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface CalendarPickerProps {
  selected: Date | null;
  onSelect: (date: Date) => void;
  month: Date;
  onMonthChange: (date: Date) => void;
}

export default function CalendarPicker({
  selected,
  onSelect,
  month,
  onMonthChange,
}: CalendarPickerProps) {
  const year = month.getFullYear();
  const mo = month.getMonth();
  const firstDay = new Date(year, mo, 1).getDay();
  const daysInMonth = new Date(year, mo + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  function prevMonth() {
    onMonthChange(new Date(year, mo - 1, 1));
  }

  function nextMonth() {
    onMonthChange(new Date(year, mo + 1, 1));
  }

  function isSame(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="rounded-lg p-2 text-text-secondary hover:bg-background transition-colors"
          aria-label="Previous month"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <h3 className="font-semibold text-foreground">
          {month.toLocaleString("default", { month: "long", year: "numeric" })}
        </h3>
        <button
          type="button"
          onClick={nextMonth}
          className="rounded-lg p-2 text-text-secondary hover:bg-background transition-colors"
          aria-label="Next month"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {DAYS.map((d) => (
          <div key={d} className="py-2 font-medium text-text-secondary text-xs">
            {d}
          </div>
        ))}
        {cells.map((day, i) => {
          if (day === null) {
            return <div key={`empty-${i}`} />;
          }
          const date = new Date(year, mo, day);
          const isPast = date < today;
          const isWeekend = date.getDay() === 0;
          const disabled = isPast || isWeekend;
          const isSelected = selected && isSame(date, selected);
          const isToday = isSame(date, today);

          return (
            <button
              key={day}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(date)}
              className={`rounded-lg py-2 text-sm transition-colors ${
                isSelected
                  ? "bg-primary text-white font-semibold"
                  : isToday
                    ? "bg-primary/10 text-primary font-medium"
                    : disabled
                      ? "text-text-secondary/30 cursor-not-allowed"
                      : "text-foreground hover:bg-primary/10"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
