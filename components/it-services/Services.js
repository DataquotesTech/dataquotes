"use client";
import { motion } from "motion/react";
import { hostGrotesk } from "@/app/fonts";
import { LuArrowDown } from "react-icons/lu";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Enterprise Applications",
      description: "We design enterprise applications that bring structure and clarity to complex business operations. Our focus is on building systems that teams actually enjoy using—secure, salable, and reliable across the organization.",
      benefits: [
        "Simplifies operations across departments",
        "Improves collaboration and efficiency",
        "Secure and reliable data management",
        "Grows smoothly as your business expands"
      ]
    },
    {
      number: "02",
      title: "AI Enabled Service",
      description: "We use AI where it truly adds value—not just for show. By integrating AI into your existing systems, we help automate routine work and support faster, more informed decisions.",
      benefits: [
        "Reduces manual effort and delays",
        "Improves accuracy in daily operations",
        "Saves time and operational costs",
        "Supports smarter decision-making"
      ]
    },
    {
      number: "03",
      title: "Custom Software Development",
      description: "We build software around your business, not the other way around. Every solution is designed to fit your workflows, solve real problems, and adapt as your needs evolve.",
      benefits: [
        "Tailored exactly to your business processes",
        "Flexible and future-ready architecture",
        "Better performance and control",
        "Long-term efficiency and cost advantage"
      ]
    },
    {
      number: "04",
      title: "IT Management",
      description: "We manage your IT systems so they work quietly and reliably in the background. From maintenance to security, we ensure your technology supports your business without becoming a burden.",
      benefits: [
        "Fewer disruptions and downtime",
        "Stronger system security",
        "Proactive monitoring and support",
        "Peace of mind for business owners"
      ]
    },
    {
      number: "05",
      title: "Business Analytics",
      description: "We help you see what your data is actually telling you. With clear dashboards and insights, decision-makers can understand performance, spot trends, and plan the next move with confidence.",
      benefits: [
        "Clear visibility into business performance",
        "Faster and better strategic decisions",
        "Easy-to-understand reports",
        "Identifies risks and growth opportunities"
      ]
    },
    {
     number: "06",
     title: "AI-Powered Business Solutions",
     description: "We create AI-powered solutions that help businesses move from reactive to proactive. By using intelligent models and automation, we enable smarter strategies and more efficient operations.",
     benefits: [
        "Predicts trends and outcomes",
        "Optimizes processes and resources",
        "Enhances customer experiences",
        "Builds a lasting competitive edge"
      ]
    },
      ];

  return (
    <section id="services" className={`${hostGrotesk.className} px-6 pb-20 bg-white`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end border-b border-black pb-4 mb-20">
          <h2 className="text-[10vw] md:text-[6vw] font-black tracking-tighter uppercase leading-none">Services</h2>
          <LuArrowDown className="text-[6vw] md:text-[4vw]" />
        </div>

        <div className="md:space-y-32 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="relative border-b border-black pb-20">
              <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                <div className="flex-1 w-full relative z-10 pr-12 md:pr-0">
                  <h3 className="text-2xl sm:text-4xl md:text-6xl xl:text-8xl font-black tracking-tighter mb-4 md:mb-8 uppercase block w-full break-words hyphens-auto leading-tight">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-neutral-500 font-medium leading-relaxed mb-12 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                <div className="text-4xl sm:text-6xl md:text-[12vw] font-black tracking-tighter flex items-start leading-none opacity-100 md:opacity-100 absolute md:static top-0 right-0 pointer-events-none md:pointer-events-auto">
                  <span className="text-red-500 text-5xl md:text-[6vw] relative top-0 md:top-0  md:block">*</span>
                  {service.number}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 border border-black divide-y md:divide-y-0 md:divide-x divide-black bg-neutral-100 uppercase text-[10px] md:text-[13px] font-black">
                {service.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="p-4 md:p-6 flex items-center min-h-[50px]">
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
