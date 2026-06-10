import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ZoomIn } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { galleryCategories, galleryImages } from "../data/gallery";
import SectionHeading from "./ui/SectionHeading";

const spanClasses = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === active),
    [active]
  );

  const slides = filtered.map((img) => ({ src: img.src, description: img.alt }));

  return (
    <section id="gallery" className="section-pad section-divider surface-1 overflow-hidden">
      <span className="glow-orb left-[-10%] top-[15%] h-80 w-80 bg-maroon/20" />
      <span className="glow-orb right-[-10%] bottom-[10%] h-72 w-72 bg-fire/10" />
      <div className="container-custom">
        <SectionHeading
          eyebrow="Food Gallery"
          title="A Feast For The Eyes"
          subtitle="From sizzling grills to warm naan and cozy evenings — take a look at what awaits you."
        />

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "border-fire bg-fire text-black shadow-fire"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-fire/40 hover:text-fire"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                type="button"
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  setLightboxIndex(i);
                  setOpen(true);
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                  spanClasses[img.span] ?? ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-night/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-fire text-black">
                    <ZoomIn className="h-5 w-5" />
                  </span>
                </div>
                <span className="absolute bottom-3 left-3 rounded-full bg-night/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80 opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  {img.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={lightboxIndex}
        slides={slides}
        styles={{ container: { backgroundColor: "rgba(15,15,15,0.96)" } }}
      />
    </section>
  );
}
