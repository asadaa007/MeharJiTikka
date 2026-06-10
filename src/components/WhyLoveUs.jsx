import { motion } from "framer-motion";
import {
  CarFront,
  CookingPot,
  Flame,
  HandPlatter,
  Moon,
  Trees,
  Users,
  Wallet,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const reasons = [
  { icon: Flame, title: "Authentic BBQ Taste", text: "Real charcoal-grilled flavor in every bite." },
  { icon: Moon, title: "Perfect Evening Destination", text: "The go-to spot for memorable nights out." },
  { icon: HandPlatter, title: "Freshly Cooked Food", text: "Prepared fresh, served hot, every time." },
  { icon: Trees, title: "Open-Air Seating", text: "Relaxed dining under the open sky." },
  { icon: Users, title: "Great For Groups", text: "Spacious setup for families & friends." },
  { icon: CarFront, title: "Easy Pickup & Delivery", text: "Enjoy our food wherever you are." },
  { icon: Wallet, title: "Value For Money", text: "Generous portions at honest prices." },
  { icon: CookingPot, title: "Traditional Recipes", text: "Authentic Pakistani flavors you trust." },
];

export default function WhyLoveUs() {
  return (
    <section className="section-pad section-divider surface-2 overflow-hidden">
      <span className="glow-orb right-[-10%] top-[10%] h-80 w-80 bg-fire/10" />
      <span className="glow-orb left-[-12%] bottom-[10%] h-72 w-72 bg-maroon/20" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Why People Love Us"
          title="Reasons Faisalabad Keeps Coming Back"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group card-surface relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-fire/40 hover:shadow-fire"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-maroon/30 text-fire transition-colors duration-300 group-hover:bg-fire group-hover:text-black">
                <r.icon className="h-6 w-6" />
              </span>
              <h3 className="font-semibold text-white">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/55">{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
