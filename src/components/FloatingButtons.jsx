import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { callLink, site, whatsappLink } from "../data/site";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button (all screens) */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: show ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-20 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 md:bottom-7"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <MessageCircle className="relative h-7 w-7" />
      </motion.a>

      {/* Sticky mobile call bar (small screens only) */}
      <motion.a
        href={callLink}
        initial={{ y: 80 }}
        animate={{ y: show ? 0 : 80 }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-2 bg-fire-gradient py-3.5 text-sm font-semibold text-black shadow-fire-lg md:hidden"
      >
        <Phone className="h-4 w-4" />
        Call {site.phoneDisplay}
      </motion.a>
    </>
  );
}
