interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {
  return (
    <div
      className={`bg-surface rounded-2xl border border-border p-6 ${hover ? "transition-shadow hover:shadow-lg" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
