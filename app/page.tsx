import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import IndustryCases from "../components/sections/industry-cases/default";
import Items from "../components/sections/items/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Problem from "../components/sections/problem/default";
import Solution from "../components/sections/solution/default";
import SocialProof from "../components/sections/social-proof/default";
import { LayoutLines } from "../components/ui/layout-lines";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="social-proof">
        <SocialProof />
      </div>
      <div id="problem">
        <Problem />
      </div>
      <div id="solution">
        <Solution />
      </div>
      <div id="industry-cases">
        <IndustryCases />
      </div>
      <div id="services">
        <Items />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="cta">
        <CTA />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
