import AnimateOnScroll from "@/components/AnimateOnScroll";
import { skillCategories } from "@/data/portfolio";
import { getSkillIcon } from "@/lib/skillIcons";
import { SectionHeading } from "./About";

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll animation="fadeInLeft">
          <SectionHeading label="Expertise" title="Technical Skills" />
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <AnimateOnScroll
              key={category.title}
              animation="fadeInUp"
              delay={`animate__delay-${Math.min(index + 1, 5)}s`}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/20">
                <h3 className="mb-4 text-lg font-semibold text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = getSkillIcon(skill);
                    return (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
