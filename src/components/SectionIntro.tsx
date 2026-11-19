export function SectionIntro({ eyebrow, title, text, align = "left" }: { eyebrow: string; title: string; text?: string; align?: "left" | "right" }) {
  return (
    <div className={align === "right" ? "ml-auto max-w-xl text-right" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <div className={`gold-rule mt-4 ${align === "right" ? "ml-auto" : ""}`} />
      <h2 className="display mt-5 text-balance text-4xl font-semibold leading-[0.98] text-white sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-xl text-base leading-7 text-white/60">{text}</p> : null}
    </div>
  );
}
