import { Moon, Trees, Users } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const points = [
  {
    icon: Moon,
    title: "Evening Tradition",
    text: "From sunset to midnight, friends and families gather for the perfect night out.",
  },
  {
    icon: Trees,
    title: "Open-Air Dining",
    text: "Relax under the open sky in a warm, welcoming outdoor setting.",
  },
  {
    icon: Users,
    title: "Made For Gatherings",
    text: "Big tables, generous portions, and an atmosphere built for good company.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-pad surface-1 overflow-hidden">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        {/* Image collage */}
        <Reveal direction="right" className="relative">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80"
                alt="Live BBQ preparation"
                className="h-56 w-full rounded-2xl object-cover sm:h-64"
              />
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=700&q=80"
                alt="Evening outdoor seating"
                className="h-40 w-full rounded-2xl object-cover sm:h-44"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80"
                alt="Restaurant ambiance"
                className="h-40 w-full rounded-2xl object-cover sm:h-44"
              />
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=700&q=80"
                alt="Charcoal grilling"
                className="h-56 w-full rounded-2xl object-cover sm:h-64"
              />
            </div>
          </div>
          {/* Floating stat card */}
          <div className="glass absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-4 text-center shadow-fire">
            <p className="font-serif text-3xl font-bold text-gradient-fire">10+ Years</p>
            <p className="text-xs uppercase tracking-widest text-white/60">Serving Faisalabad</p>
          </div>
        </Reveal>

        {/* Story */}
        <div className="flex flex-col gap-7">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="More Than A Meal. It's An Evening Tradition."
          />
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              When the sun sets over Faisalabad, Mehar Ji Tikka Shop comes alive. The glow
              of fresh charcoal, the aroma of marinated tikka hitting the grill, and warm
              naan straight from the tandoor — this is where the city gathers.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed text-white/65 md:text-lg">
              For years, families and friends have made us their evening destination.
              Traditional recipes, freshly prepared food, and open-air dining come together
              to create more than a meal — they create memories worth coming back for.
            </p>
          </Reveal>

          <div className="mt-2 grid gap-5 sm:grid-cols-3">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div className="flex flex-col gap-2">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-maroon/30 text-fire">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold text-white">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
