import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flame, Menu, Phone, X } from "lucide-react";
import { callLink, navLinks, site } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-night/85 py-3 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-custom flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-fire-gradient shadow-fire">
              <Flame className="h-5 w-5 text-black" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-base font-bold tracking-wide text-white sm:text-lg">
                Mehar Ji
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
                Tikka Shop
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-white/75 transition-colors hover:text-fire after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-fire after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={callLink} className="btn-fire hidden sm:inline-flex">
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-night/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="absolute right-0 top-0 flex h-full w-[80%] max-w-sm flex-col gap-8 border-l border-white/10 bg-charcoal p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-bold text-white">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="border-b border-white/5 py-4 text-lg font-medium text-white/80 transition-colors hover:text-fire"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <a href={callLink} className="btn-fire mt-auto w-full">
                <Phone className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
