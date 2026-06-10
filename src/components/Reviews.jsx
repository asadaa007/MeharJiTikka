import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { reviewHighlights, reviews } from "../data/reviews";
import { site } from "../data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const paginate = useCallback((d) => {
    setDir(d);
    setIndex((prev) => (prev + d + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 6000);
    return () => clearInterval(t);
  }, [paginate]);

  const review = reviews[index];

  return (
    <section id="reviews" className="section-pad section-divider surface-1 overflow-hidden">
      <div className="smoke-layer absolute inset-0 -z-10 opacity-40" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Loved By Thousands In Faisalabad"
        />

        {/* Rating summary */}
        <Reveal delay={0.1} className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-5xl font-bold text-gradient-gold">{site.rating}</span>
            <div className="flex flex-col">
              <span className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span className="text-sm text-white/60">{site.reviewCount}+ Reviews</span>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-white/15 sm:block" />
          <div className="flex flex-wrap justify-center gap-2">
            {reviewHighlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
              >
                {h}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                initial={{ opacity: 0, x: dir * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: dir * -60 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass rounded-3xl p-8 sm:p-10"
              >
                <Quote className="h-10 w-10 text-fire/40" />
                <p className="mt-4 text-lg leading-relaxed text-white/85">"{review.text}"</p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fire-gradient text-lg font-bold text-black">
                    {review.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <p className="text-xs text-white/55">{review.role}</p>
                  </div>
                  <span className="ml-auto flex text-gold">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => paginate(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-fire hover:text-fire"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-7 bg-fire" : "w-2 bg-white/25"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => paginate(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-fire hover:text-fire"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
