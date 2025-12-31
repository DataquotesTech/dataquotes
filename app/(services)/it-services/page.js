"use client";
import Header from "@/components/it-services/Header";
import Hero from "@/components/it-services/Hero";
import Work from "@/components/it-services/Work";
import Services from "@/components/it-services/Services";
import AboutUs from "@/components/it-services/AboutUs";
import FAQs from "@/components/it-services/FAQs";
import ContactUs from "@/components/it-services/ContactUs";
import Footer from "@/components/it-services/Footer";

export default function ITServicesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      <Hero />
      <Work />
      <Services />
      <AboutUs />
      <FAQs />
      <ContactUs />
      <Footer />
    </main>
  );
}
