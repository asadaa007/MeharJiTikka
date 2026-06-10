import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Beef,
  ChefHat,
  CupSoda,
  Drumstick,
  Flame,
  IceCream,
  Soup,
  UtensilsCrossed,
  Wheat,
  X,
} from "lucide-react";
import { menu } from "../data/menu";
import { whatsappLink } from "../data/site";
import SectionHeading from "./ui/SectionHeading";

const iconMap = {
  Flame,
  Soup,
  Drumstick,
  Beef,
  Wheat,
  ChefHat,
  IceCream,
  CupSoda,
};

export default function MenuPreview() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <section id="menu" className="section-pad section-divider surface-2 overflow-hidden">
      <span className="glow-orb right-[-10%] top-[12%] h-80 w-80 bg-fire/10" />
      <span className="glow-orb left-[-12%] bottom-[8%] h-72 w-72 bg-maroon/20" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Our Menu"
          title="Explore What's Cooking"
          subtitle="A taste of our wide range of BBQ, karahi, traditional dishes, and desserts — all freshly prepared."
        />

        {/* Category preview grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((cat, i) => {
            const Icon = iconMap[cat.icon] ?? UtensilsCrossed;
            return (
              <motion.button
                type="button"
                key={cat.category}
                onClick={() => setOpen(true)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group card-surface flex flex-col items-start gap-3 rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-fire/40 hover:shadow-fire"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-fire-gradient text-black">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-lg font-bold text-white">{cat.category}</h3>
                <p className="text-sm text-white/55">
                  {cat.items.length} items · Tap to view
                </p>
              </motion.button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <button type="button" onClick={() => setOpen(true)} className="btn-fire">
            <UtensilsCrossed className="h-4 w-4" />
            View Full Menu
          </button>
        </div>
      </div>

      {/* Menu modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div
              className="absolute inset-0 bg-night/85 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-charcoal"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-fire-gradient text-black">
                    <Flame className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">Full Menu</h3>
                    <p className="text-xs text-white/55">Mehar Ji Tikka Shop</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-fire hover:text-fire"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="grid gap-8 overflow-y-auto p-6 sm:grid-cols-2">
                {menu.map((cat) => {
                  const Icon = iconMap[cat.icon] ?? UtensilsCrossed;
                  return (
                    <div key={cat.category}>
                      <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-2">
                        <Icon className="h-4 w-4 text-fire" />
                        <h4 className="font-display text-base font-bold uppercase tracking-wide text-gold">
                          {cat.category}
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {cat.items.map((item) => (
                          <li key={item.name} className="flex flex-col">
                            <span className="text-sm font-semibold text-white">{item.name}</span>
                            <span className="text-xs text-white/50">{item.desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-white/10 p-5 text-center">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-gold">
                  Order On WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
