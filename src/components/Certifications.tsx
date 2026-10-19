import { Award, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimateOnScroll animation="fadeInUp">
          <h2 className="mb-12 text-3xl font-bold text-white">
            Certifications
          </h2>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <AnimateOnScroll key={cert.name} animation="fadeInUp">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-cyan-400/40">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {cert.issuer} - {cert.date}
                </p>
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    View certificate <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
