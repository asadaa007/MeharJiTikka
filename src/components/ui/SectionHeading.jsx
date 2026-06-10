import Reveal from "./Reveal";

// Consistent eyebrow + title + subtitle block for section headers.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="heading-lg text-white">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
