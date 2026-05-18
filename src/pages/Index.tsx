import Navbar from "@/components/site/Navbar";
import WhatsAppFab from "@/components/site/WhatsAppFab";
import { About, Credentials, Footer, Hero, Insights, Locations, SecondOpinion, Services, Testimonials, TrustBar } from "@/components/site/Sections";
import Faq from "@/components/site/Faq";
import ContactForm from "@/components/site/ContactForm";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Dr. Jayesh Sharma | Cancer Surgeon & Surgical Oncologist, Raipur";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); return m;
    })();
    meta.setAttribute("content", "Dr. Jayesh Sharma is a Cancer Surgeon and Surgical Oncologist based in Raipur, Chhattisgarh. Personalised cancer care with clarity, compassion and clinical excellence. Remote second opinions available.");
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <SecondOpinion />
      <ContactForm />
      <Credentials />
      <Services />
      <Locations />
      <Insights />
      <Faq />
      <Testimonials />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
