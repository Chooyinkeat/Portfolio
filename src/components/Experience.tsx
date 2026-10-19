import { Briefcase } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "./About";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll animation="fadeInLeft">
          <SectionHeading label="Career" title="Work Experience" />
        </AnimateOnScroll>

        <div className="relative space-y-8">
          <div className="absolute top-0 bottom-0 left-[19px] hidden w-px bg-gradient-to-b from-cyan-500/50 via-slate-700 to-transparent sm:block" />

          {experiences.map((job, index) => (
            <AnimateOnScroll
              key={`${job.company}-${job.period}`}
              animation={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={`animate__delay-${Math.min(index + 1, 5)}s`}
              as="article"
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:ml-12 sm:p-8"
            >
              <div className="absolute -left-12 top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 sm:flex">
                <Briefcase size={18} className="text-cyan-400" />
              </div>

              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {job.role}
                  </h3>
                  <p className="text-cyan-400">{job.company}</p>
                </div>
                <time className="mt-1 shrink-0 font-mono text-sm text-slate-500">
                  {job.period}
                </time>
              </div>

              <ul className="mb-4 space-y-2">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>

              {job.projects && (
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
                  <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                    Projects:
                  </span>
                  {job.projects.map((project) => (
                    <span
                      key={project}
                      className="rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
