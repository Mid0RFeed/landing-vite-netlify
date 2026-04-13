"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
  badge,
  subtitle,
  primaryCta,
  secondaryCta,
  stats = [],
}: {
  title1?: string;
  title2?: string;
  badge?: string;
  subtitle?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  stats?: string[];
}) {
  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1] as const,
      },
    }),
  };

  return (
    <div className="relative flex min-h-[calc(100vh-65px)] w-full items-center justify-center overflow-hidden bg-[#030303] text-center [font-family:'General_Sans',Inter,sans-serif]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] top-[15%] md:left-[-5%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] top-[70%] md:right-[0%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="bottom-[5%] left-[5%] md:bottom-[10%] md:left-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] top-[10%] md:right-[20%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] top-[5%] md:left-[25%] md:top-[10%]"
        />
      </div>

      <div className="container relative z-10 mx-auto flex justify-center px-4 py-24 md:px-6">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {badge ? (
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mb-5 rounded-lg border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur"
            >
              {badge}
            </motion.div>
          ) : null}
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="mb-6 text-center text-4xl font-bold sm:text-6xl md:mb-8 md:text-7xl">
              <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
                {title1}
              </span>
              <br />
              <span className={cn("bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent")}>
                {title2}
              </span>
            </h1>
          </motion.div>
          {subtitle ? (
            <motion.p
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mx-auto max-w-3xl text-base leading-8 text-white/70 md:text-lg"
            >
              {subtitle}
            </motion.p>
          ) : null}
          {primaryCta || secondaryCta ? (
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {primaryCta ? (
                <a
                  href={primaryCta.href}
                  target={primaryCta.href.startsWith("http") ? "_blank" : undefined}
                  rel={primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-100"
                >
                  {primaryCta.label}
                </a>
              ) : null}
              {secondaryCta ? (
                <a
                  href={secondaryCta.href}
                  className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-200"
                >
                  {secondaryCta.label}
                </a>
              ) : null}
            </motion.div>
          ) : null}
          {stats.length > 0 ? (
            <motion.div
              custom={4}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap justify-center gap-2"
            >
              {stats.map((stat) => (
                <span
                  key={stat}
                  className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70"
                >
                  {stat}
                </span>
              ))}
            </motion.div>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80" />
    </div>
  );
}

export { HeroGeometric };
