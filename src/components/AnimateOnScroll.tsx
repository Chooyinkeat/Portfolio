"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AnimateOnScrollProps = {
  children: ReactNode;
  animation?: string;
  delay?: string;
  className?: string;
  as?: "div" | "section" | "article";
};

export default function AnimateOnScroll({
  children,
  animation = "fadeInUp",
  delay = "",
  className = "",
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const animationClass = visible
    ? `animate__animated animate__${animation} ${delay}`.trim()
    : "opacity-0";

  return (
    <Tag ref={ref as never} className={`${animationClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
