import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Specialties from "./components/Specialties";
import LiveBBQ from "./components/LiveBBQ";
import OpenAirDining from "./components/OpenAirDining";
import WhyLoveUs from "./components/WhyLoveUs";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import MenuPreview from "./components/MenuPreview";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="relative min-h-screen bg-night text-white">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Specialties />
        <LiveBBQ />
        <OpenAirDining />
        <WhyLoveUs />
        <Gallery />
        <MenuPreview />
        <Reviews />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
