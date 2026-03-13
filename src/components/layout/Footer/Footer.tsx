"use client";

export default function Footer() {
  const resources = [
    {
      name: "Harvard FAS Official",
      url: "https://careerservices.fas.harvard.edu/resources/create-a-strong-resume",
      description: "Direct guidelines from Harvard.",
    },
    {
      name: "Guía Sin Experiencia",
      url: "https://solucionlaboralperu.com/consejos-de-empleabilidad/aprende-como-armar-un-cv-sin-experiencia-profesional-formato-harvard",
      description: "Consejos de Solución Laboral Perú.",
    },
    {
      name: "Midudev Template",
      url: "https://www.linkedin.com/posts/midudev_esta-es-la-mejor-plantilla-de-cv-seg%C3%BAn-harvard-activity-7217148447622066177-avV0/",
      description: "Análisis técnico de Midudev.",
    },
  ];

  return (
    <footer className="mt-[4vw] border-t border-white/5 bg-black/20 py-[1.5vw] px-[4vw]">
      <div className="max-w-[95vw] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-[2vw] items-center">
          <div className="md:col-span-1">
            <h4 className="text-(--text-main) font-bold uppercase tracking-tighter text-[0.7vw]">
              Why Harvard ATS?
            </h4>
            <p className="text-(--text-muted) text-[0.6vw] leading-snug">
              Standard 2026: Optimized for 100% parsing accuracy in modern
              systems.
            </p>
          </div>

          <div className="md:col-span-3 flex justify-center gap-[1.5vw]">
            {resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start border-l border-white/10 pl-[0.8vw] hover:border-(--accent)/50 transition-all"
              >
                <span className="text-(--text-main) font-bold text-[0.65vw] group-hover:text-(--accent) whitespace-nowrap">
                  {resource.name} ↗
                </span>
                <span className="text-(--text-muted) text-[0.55vw] italic opacity-70">
                  {resource.description}
                </span>
              </a>
            ))}
          </div>

          <div className="md:col-span-1 flex flex-col items-end">
            <span className="text-(--text-muted) text-[0.55vw] uppercase tracking-widest font-bold">
              Product by
            </span>
            <a
              href="https://wasaka-be-official.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--accent) text-[0.7vw] font-bold hover:brightness-125 transition-all"
            >
              wasaka be
            </a>
          </div>
        </div>

        <div className="mt-[1.2vw] pt-[0.8vw] border-t border-white/5 flex justify-between items-center opacity-60">
          <p className="text-(--text-muted) text-[0.5vw] uppercase tracking-[0.4em]">
            © 2026 Resume Builder • High Fidelity Standard
          </p>
          <div className="flex gap-[1vw]">
            <span className="text-[0.5vw] text-(--text-muted) uppercase border border-white/10 px-[0.4vw] rounded">
              ATS Optimized
            </span>
            <span className="text-[0.5vw] text-(--text-muted) uppercase border border-white/10 px-[0.4vw] rounded">
              Harvard Format
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
