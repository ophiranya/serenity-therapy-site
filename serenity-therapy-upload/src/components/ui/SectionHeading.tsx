interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-primary ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}
