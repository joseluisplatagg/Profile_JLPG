const STATUS = {
  "en-curso": { label: "En curso", dot: "bg-cyan-300" },
  pausado: { label: "En pausa", dot: "bg-amber-300" },
  terminado: { label: "Terminado", dot: "bg-emerald-300" },
};

/**
 * Tarjeta genérica para presentar un proyecto.
 * Props: title, description, status, progress (0-100), tags[], image, imageAlt,
 *        demoUrl, repoUrl
 */
export default function ProjectCard({
  title,
  description,
  status = "en-curso",
  progress,
  tags = [],
  image,
  imageAlt = "",
  demoUrl,
  repoUrl,
}) {
  const state = STATUS[status] ?? STATUS["en-curso"];
  const hasProgress = typeof progress === "number";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-linear-to-br from-emerald-950 via-emerald-800 to-cyan-700 text-white shadow-xl shadow-emerald-950/30 ring-1 ring-white/10">
      {image && (
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-transparent to-transparent" />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/20">
          <span className={`h-2 w-2 rounded-full animate-pulse ${state.dot}`} aria-hidden="true" />
          {state.label}
        </span>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="max-w-prose leading-relaxed text-emerald-50/80">{description}</p>
        </div>

        {hasProgress && (
          <div>
            <div className="mb-1 flex justify-between text-sm text-emerald-50/70">
              <span>Avance</span>
              <span>{progress}%</span>
            </div>
            <div
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Avance de ${title}`}
              className="h-1.5 overflow-hidden rounded-full bg-white/15"
            >
              <div className="h-full rounded-full bg-cyan-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="rounded-md bg-emerald-950/50 px-2.5 py-1 text-sm text-emerald-100">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {(demoUrl || repoUrl) && (
          <div className="mt-auto flex items-center gap-5 pt-2">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-emerald-950 transition-colors hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
              >
                Ver proyecto
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4 decoration-white/40 hover:decoration-white  focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
              >
                Ver código
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

/* Uso:
import ProjectCard from "./ProjectCard";

const proyectos = [
  {
    title: "Panel de inventario",
    description: "Control de existencias en tiempo real para una tienda local.",
    status: "en-curso",
    progress: 65,
    tags: ["React 19", "Tailwind", "Node"],
    image: "/img/inventario.jpg",
    imageAlt: "Captura del panel de inventario",
    demoUrl: "https://ejemplo.com",
    repoUrl: "https://github.com/usuario/inventario",
  },
];

export function Proyectos() {
  return (
    <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
      {proyectos.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </section>
  );
}
*/
