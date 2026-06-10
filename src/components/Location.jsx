import { Clock, MapPin, Navigation, Phone, ShoppingBag } from "lucide-react";
import {
  callLink,
  directionsLink,
  mapEmbedLink,
  site,
  whatsappLink,
} from "../data/site";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function Location() {
  return (
    <section id="location" className="section-pad section-divider surface-2 overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Find Us"
          title="Visit Us Tonight"
          subtitle="We're right at Abbas Chowk on Satayana Road — easy to find, even easier to enjoy."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info card */}
          <Reveal direction="right" className="lg:col-span-2">
            <div className="glass flex h-full flex-col gap-6 rounded-3xl p-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon/30 text-fire">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon/30 text-fire">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a
                    href={callLink}
                    className="mt-1 block text-sm text-white/60 transition-colors hover:text-fire"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon/30 text-fire">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-white">Timing</h3>
                  <p className="mt-1 text-sm text-white/60">{site.hoursShort}</p>
                  <p className="text-xs text-gold">Peak: {site.hoursPeak}</p>
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-3 pt-2">
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-fire w-full"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href={callLink} className="btn-outline w-full">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline w-full"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Pickup
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="h-full min-h-[380px] overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Mehar Ji Tikka Shop location"
                src={mapEmbedLink}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380, filter: "grayscale(0.3) contrast(1.1)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
