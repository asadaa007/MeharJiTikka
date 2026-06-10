import { motion } from "framer-motion";
import { Flame, Plus } from "lucide-react";
import { specialties } from "../data/specialties";
import { whatsappLink } from "../data/site";
import SectionHeading from "./ui/SectionHeading";

export default function Specialties() {
  return (
    <section id="specialties" className="section-pad section-divider surface-2 overflow-hidden">
      <span className="glow-orb left-[-10%] top-[20%] h-72 w-72 bg-fire/10" />
      <span className="glow-orb right-[-12%] bottom-[5%] h-80 w-80 bg-maroon/25" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Signature Specialties"
          title="The Flavors That Made Us Famous"
          subtitle="Charcoal-grilled, freshly prepared, and bursting with authentic Pakistani taste — every dish is a reason people keep coming back."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group card-surface relative overflow-hidden rounded-3xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-transparent" />
                {dish.popular && (
                  <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-fire px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black shadow-fire">
                    <Flame className="h-3 w-3" />
                    Popular
                  </span>
                )}
              </div>

              <div className="relative -mt-10 flex flex-col gap-3 p-6">
                <h3 className="font-serif text-2xl font-bold text-white">{dish.name}</h3>
                <p className="text-sm leading-relaxed text-white/60">{dish.desc}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-fire/40 bg-fire/10 px-4 py-2 text-sm font-semibold text-fire transition-all duration-300 hover:bg-fire hover:text-black"
                >
                  <Plus className="h-4 w-4" />
                  Quick Order
                </a>
              </div>

              {/* glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-fire/0 transition-all duration-500 group-hover:ring-fire/40 group-hover:shadow-fire" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
