import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Flame } from "lucide-react";
import Reveal from "./ui/Reveal";

const features = [
  { title: "Live Charcoal BBQ", text: "Grilled fresh in front of you over real charcoal." },
  { title: "Fresh Daily Ingredients", text: "Sourced and prepped fresh every single day." },
  { title: "Authentic Marinades", text: "Secret family recipes passed down for years." },
  { title: "Traditional Cooking Methods", text: "Time-honored techniques, real smoky flavor." },
];

const sparks = Array.from({ length: 20 });

export default function LiveBBQ() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-125">
        <img
          src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1920&q=80"
          alt="Flames on the grill"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-night/85" />
      <div className="smoke-layer absolute inset-0 -z-10 animate-flicker" />

      {/* Sparks */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/3">
        {sparks.map((_, i) => (
          <span
            key={i}
            className="absolute bottom-0 h-1.5 w-1.5 rounded-full bg-fire shadow-fire"
            style={{
              left: `${(i * 5 + 2) % 100}%`,
              animation: `spark ${2 + (i % 5) * 0.5}s linear ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative text-center">
        <Reveal>
          <span className="eyebrow justify-center">
            <Flame className="h-4 w-4 animate-flicker" />
            Live BBQ Experience
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="heading-lg mx-auto mt-4 max-w-2xl">
            Fresh From The <span className="text-gradient-fire">Grill</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-5 max-w-xl text-white/65">
            Every plate begins with glowing charcoal, fresh marinades, and the unmistakable
            sizzle of real Pakistani BBQ.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.15 + i * 0.1}>
              <div className="glass group h-full rounded-2xl p-6 text-left transition-all duration-300 hover:border-fire/40 hover:shadow-fire">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-fire-gradient shadow-fire">
                  <Flame className="h-6 w-6 text-black transition-transform duration-300 group-hover:scale-110" />
                </span>
                <h3 className="font-serif text-lg font-bold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
