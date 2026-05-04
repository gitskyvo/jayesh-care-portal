import Navbar from "@/components/site/Navbar";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { About, Credentials, Footer, Hero, Insights, Locations, SecondOpinion, Services, Testimonials, TrustBar } from "@/components/site/Sections";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Jayesh Sharma · Surgical Oncologist in Raipur, Chhattisgarh";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "Dr. Jayesh Sharma — Surgical Oncologist in Raipur. 20+ years of experience in cancer surgery with compassionate, personalised care across Chhattisgarh.");
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <SecondOpinion />
      <Credentials />
      <Services />
      <Locations />
      <Insights />
      <Testimonials />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
