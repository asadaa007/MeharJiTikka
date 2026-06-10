import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Flame, Phone, Star, UtensilsCrossed } from "lucide-react";
import { callLink, site, whatsappLink } from "../data/site";
import ShaderBackground from "./ui/ShaderBackground";

const badges = [
  "1,196+ Reviews",
  "Authentic BBQ Experience",
  "Open-Air Dining",
  "Fresh Charcoal Grilling",
];

// A handful of rising spark particles for the charcoal effect.
const sparks = Array.from({ length: 14 });

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-night"
    >
      {/* Animated WebGL flame/ember shader background */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 scale-110">
        <ShaderBackground />
      </motion.div>

      {/* Dark + fire overlays for text legibility / blend into next section */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-night/70 via-night/30 to-night" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-night/70 via-transparent to-night/40" />
      <div className="smoke-layer absolute inset-0 z-[1] animate-flicker opacity-40" />

      {/* Rising sparks */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1/2">
        {sparks.map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1 w-1 rounded-full bg-fire shadow-fire"
            style={{
              left: `${(i * 7 + 5) % 100}%`,
              animation: `spark ${2 + (i % 4) * 0.6}s linear ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: yContent, opacity }}
        className="container-custom relative z-10 flex h-full flex-col items-center justify-center pt-20 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 font-urdu text-2xl text-gold sm:text-3xl"
          dir="rtl"
        >
          {site.nameUrdu}
        </motion.span>

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="eyebrow mb-5"
        >
          <Flame className="h-4 w-4" />
          Faisalabad's Real BBQ Since Day One
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-xl max-w-4xl text-white"
        >
          Where Faisalabad Comes For{" "}
          <span className="text-gradient-fire">Real BBQ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
        >
          Freshly grilled tikka, sizzling karahi, smoky barbecue, and unforgettable
          evenings under the open sky.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2.5"
        >
          {badges.map((b) => (
            <span
              key={b}
              className="glass flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-white/85"
            >
              <span className="text-fire">✓</span>
              {b}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#menu" className="btn-fire w-full sm:w-auto">
            <UtensilsCrossed className="h-4 w-4" />
            View Menu
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-gold w-full sm:w-auto"
          >
            Order Now
          </a>
          <a href={callLink} className="btn-outline w-full sm:w-auto">
            <Phone className="h-4 w-4" />
            Call Restaurant
          </a>
        </motion.div>
      </motion.div>

      {/* Floating review badge */}
      <motion.a
        href="#reviews"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="glass absolute bottom-24 right-5 z-10 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-fire sm:flex md:right-10 md:bottom-28 lg:animate-float"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-lg font-bold text-black">
          {site.rating}
        </span>
        <span className="flex flex-col">
          <span className="flex text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </span>
          <span className="text-xs text-white/70">{site.reviewCount}+ Reviews</span>
        </span>
      </motion.a>

      {/* Scroll indicator */}
      <motion.a
        href="#experience"
        style={{ opacity }}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
