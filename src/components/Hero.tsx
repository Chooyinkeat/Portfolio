import Image from "next/image";
import { ArrowDown, Award, Mail, MapPin } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { personalInfo, certifications } from "@/data/portfolio";
export default function Hero() {
  const featuredCert = certifications[0];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-16">
        {/* Profile picture */}
        <AnimateOnScroll animation="zoomIn" className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-75 blur-sm" />
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-slate-900 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
              <Image
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
        </AnimateOnScroll>

        <div className="text-center lg:text-left">
          <AnimateOnScroll animation="fadeInDown" delay="animate__delay-1s">
            <p className="mb-4 font-mono text-sm tracking-widest text-cyan-400 uppercase">
              Portfolio
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay="animate__delay-1s">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {personalInfo.name}
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay="animate__delay-2s">
            <p className="mb-4 text-xl text-slate-400 sm:text-2xl">
              {personalInfo.title}
            </p>
          </AnimateOnScroll>

          {/* Certificate badge */}
          {featuredCert && (
            <AnimateOnScroll animation="fadeIn" delay="animate__delay-2s">
              <a
                href="#certifications"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300 transition-colors hover:bg-cyan-500/20"
              >
                <Award size={14} />
                {featuredCert.name}
              </a>
            </AnimateOnScroll>
          )}

          <AnimateOnScroll animation="fadeIn" delay="animate__delay-2s">
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 lg:justify-start">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-400" />
                {personalInfo.location}
              </span>
              <span className="hidden h-4 w-px bg-slate-700 sm:block" />
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                {personalInfo.email}
              </span>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay="animate__delay-3s">
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#experience"
                className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/50 hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition-colors hover:text-cyan-400"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
