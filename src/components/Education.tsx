import { Award, GraduationCap } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { certifications, education } from "@/data/portfolio";
import { SectionHeading } from "./About";

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll animation="fadeInLeft">
          <SectionHeading
            label="Background"
            title="Education & Certifications"
          />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay="animate__delay-1s">
          <h3 className="mb-4 font-mono text-xs tracking-widest text-slate-500 uppercase">
            Education
          </h3>
        </AnimateOnScroll>

        <div className="mb-12 grid gap-6 sm:grid-cols-2">
          {education.map((item, index) => (
            <AnimateOnScroll
              key={item.degree}
              animation="fadeInUp"
              delay={`animate__delay-${Math.min(index + 1, 5)}s`}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/20">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                  <GraduationCap size={20} className="text-cyan-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="text-sm text-slate-400">{item.institution}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fadeInUp" delay="animate__delay-1s">
          <h3 className="mb-4 font-mono text-xs tracking-widest text-slate-500 uppercase">
            Certifications
          </h3>
        </AnimateOnScroll>

        <div className="grid gap-6">
          {certifications.map((cert, index) => (
            <AnimateOnScroll
              key={cert.name}
              animation="fadeInRight"
              delay={`animate__delay-${Math.min(index + 2, 5)}s`}
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/20 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500/10"></div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <Award size={16} className="text-cyan-400" />
                      <span className="text-xs font-medium tracking-wider text-cyan-400 uppercase">
                        {cert.issuer}
                      </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-400">{cert.description}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
