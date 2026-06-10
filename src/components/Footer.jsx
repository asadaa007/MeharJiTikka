import { Clock, Flame, MapPin, Phone } from "lucide-react";
import { callLink, navLinks, site } from "../data/site";
import {
  FacebookIcon,
  InstagramIcon,
  TiktokIcon,
  YoutubeIcon,
} from "./ui/BrandIcons";

const socials = [
  { icon: FacebookIcon, href: site.socials.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: site.socials.instagram, label: "Instagram" },
  { icon: TiktokIcon, href: site.socials.tiktok, label: "TikTok" },
  { icon: YoutubeIcon, href: site.socials.youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-charcoal pt-16">
      <div className="container-custom grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-fire-gradient shadow-fire">
              <Flame className="h-5 w-5 text-black" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-white">Mehar Ji</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold">Tikka Shop</span>
            </span>
          </a>
          <p className="font-urdu text-xl text-gold" dir="rtl">
            {site.nameUrdu}
          </p>
          <p className="text-sm leading-relaxed text-white/55">
            Faisalabad's favorite evening BBQ destination — authentic charcoal-grilled
            flavors and open-air dining since day one.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-fire hover:bg-fire hover:text-black"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-white/55 transition-colors hover:text-fire"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Contact
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-white/55">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-fire" />
              <span>
                {site.address.line1}, {site.address.line2}, {site.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-fire" />
              <a href={callLink} className="transition-colors hover:text-fire">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="h-4 w-4 shrink-0 text-fire" />
              <span>{site.hoursShort}</span>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Services
          </h4>
          <div className="mt-5 flex flex-wrap gap-2">
            {site.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-gold/30 bg-gold/10 px-4 py-2">
            <span className="font-serif text-xl font-bold text-gold">{site.rating}★</span>
            <span className="text-xs text-white/60">{site.reviewCount}+ Reviews</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-white/45 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>
            Price Range: {site.priceRange} · {site.address.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
