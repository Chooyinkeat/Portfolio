import AnimateOnScroll from "@/components/AnimateOnScroll";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll animation="fadeInLeft">
          <SectionHeading label="About Me" title="Professional Overview" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeInUp" delay="animate__delay-1s">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-10">
            <p className="text-lg leading-relaxed text-slate-300">
              {personalInfo.overview}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm tracking-widest text-cyan-400 uppercase">
        {label}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
