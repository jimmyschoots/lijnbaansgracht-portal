import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import CheckIn from "@/components/CheckIn";
import Tour from "@/components/Tour";
import Rules from "@/components/Rules";
import Guide from "@/components/Guide";
import Checkout from "@/components/Checkout";
import Neighborhood from "@/components/Neighborhood";
import Footer from "@/components/Footer";

export default function GuestPortal() {
  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <Hero />
      <Navigation />
      <main className="relative">
        <CheckIn />
        <Tour />
        <Rules />
        <Guide />
        <Checkout />
        <Neighborhood />
      </main>
      <Footer />
    </div>
  );
}
