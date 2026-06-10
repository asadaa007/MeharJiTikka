import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Phone, ShoppingBag } from "lucide-react";
import { callLink, whatsappLink } from "../data/site";
import Reveal from "./ui/Reveal";

export default function CTA() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-125">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1920&q=80"
          alt="BBQ fire"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night via-night/85 to-night/60" />
      <div className="smoke-layer absolute inset-0 -z-10 animate-flicker" />

      <div className="container-custom relative text-center">
        <Reveal>
          <h2 className="heading-xl mx-auto max-w-3xl">
            Tonight's BBQ Destination Is{" "}
            <span className="text-gradient-fire">Waiting</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
            Gather your friends and family for an unforgettable BBQ experience under the
            open sky.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={callLink} className="btn-fire w-full sm:w-auto">
              <CalendarCheck className="h-4 w-4" />
              Reserve Table
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full sm:w-auto"
            >
              <ShoppingBag className="h-4 w-4" />
              Order Food
            </a>
            <a href={callLink} className="btn-outline w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Call Restaurant
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
