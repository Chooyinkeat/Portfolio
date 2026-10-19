import { Link2, Mail, MapPin, Phone } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "./About";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/-/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: personalInfo.linkedin.label,
    href: personalInfo.linkedin.url,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <AnimateOnScroll animation="fadeInLeft">
          <SectionHeading label="Connect" title="Get In Touch" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeIn" delay="animate__delay-1s">
          <p className="mb-10 text-lg text-slate-400">
            Interested in working together or have a question? Feel free to reach
            out — I&apos;d love to hear from you.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-cyan-400/30 hover:bg-white/[0.05]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/10">
                  <Icon size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium tracking-wider text-slate-500 uppercase">
                    {item.label}
                  </p>
                  <p className="text-white">{item.value}</p>
                </div>
              </div>
            );

            const wrapper = item.href ? (
              <a
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  item.label === "LinkedIn" ? "noopener noreferrer" : undefined
                }
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              content
            );

            return (
              <AnimateOnScroll
                key={item.label}
                animation="fadeInUp"
                delay={`animate__delay-${Math.min(index + 1, 5)}s`}
                className="h-full"
              >
                {wrapper}
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
