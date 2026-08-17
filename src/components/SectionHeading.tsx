export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <div className="mb-14 sm:mb-20">
      <p
        className={`text-[0.68rem] uppercase tracking-[0.3em] ${
          isDark ? "text-brass-300" : "text-brass-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-display text-[2.5rem] font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
          isDark ? "text-bone-50" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-6 h-px w-14 ${isDark ? "bg-brass-400/60" : "bg-brass-400"}`}
      />
      {subtitle && (
        <p
          className={`mt-6 max-w-xl text-[0.95rem] leading-relaxed sm:text-base ${
            isDark ? "text-ink-300" : "text-ink-700/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
