import { Check } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const perks = [
  "Spacious outdoor seating",
  "Warm evening atmosphere",
  "Comfortable family setup",
  "Perfect for group gatherings",
];

export default function OpenAirDining() {
  return (
    <section className="section-pad surface-1 overflow-hidden">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-7 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Open-Air Dining"
            title="Dine Under The Open Sky"
            subtitle="One of the most loved features of Mehar Ji Tikka Shop — relaxed outdoor seating where the cool evening air meets the warmth of fresh BBQ."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {perks.map((perk, i) => (
              <Reveal key={perk} delay={0.1 + i * 0.08}>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fire-gradient text-black">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/80">{perk}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Panoramic image */}
        <Reveal direction="left" className="order-1 lg:order-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Open-air evening dining"
              className="h-[420px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="font-serif text-2xl font-bold text-white">A Perfect Faisalabad Evening</p>
              <p className="mt-1 text-sm text-white/70">Sunset → Midnight, every night.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
