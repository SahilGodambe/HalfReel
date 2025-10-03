import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Navigation from "../components/Navigation";

interface ContactProps { showNavbar?: boolean; }

export default function Contact({ showNavbar = true }: ContactProps) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Fixed Navbar */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Navigation />
        </div>
      )}

      {/* Main Content Container with proper spacing */}
      <div className="pt-20 sm:pt-24 md:pt-28 min-h-screen flex flex-col lg:flex-row items-stretch justify-between px-4 sm:px-6 py-8 gap-6 md:gap-8">

        {/* Left Image Section */}
        <section className="w-full lg:w-2/5 flex justify-center items-end">
          <div className="w-full max-w-md lg:max-w-full aspect-square lg:aspect-auto lg:h-[60vh] xl:h-[70vh]">
            <motion.img
              src="/call (2).png"
              alt="Contact"
              className="w-full h-full object-cover"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </section>

        {/* Center Contact Info Section */}
        <section className="w-full lg:w-2/5 flex flex-col justify-center items-start space-y-6">
          <div className="w-full space-y-4">
            <ScrollReveal delay={100}>
              <h1 className="text-[60px] sm:text-[32px] md:text-[70px] font-extrabold text-neon-yellow">
                Contact <span className="text-neon-yellow">Us</span>
              </h1>
            </ScrollReveal>

            <div className="text-[20px] sm:text-[16px] md:text-[35px] text-gray-800 space-y-3 leading-snug">
              <ScrollReveal delay={300}>
                <div>
                  <p className="font-semibold">Omkar Labhade</p>
                  <p>Co-Founder and Post Producer</p>
                  <p className="text-neon-yellow font-medium">+91 99227 72424</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div>
                  <p className="font-semibold">Shraddha Chawan</p>
                  <p>Co-Founder and Production Head</p>
                  <p className="text-neon-yellow font-medium">+91 88798 86067</p>
                </div>
              </ScrollReveal>
            </div>

            <div className="flex gap-3 text-3xl sm:text-4xl mt-2">
  <ScrollReveal delay={700}>
    <a
      href="mailto:halfreelfilms@gmail.com"
      className="text-gray-800 hover:text-neon-yellow transition-colors duration-300"
    >
      <SiGmail />
    </a>
  </ScrollReveal>
  <ScrollReveal delay={800}>
    <a
      href="https://www.linkedin.com/company/films-halfreel/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-neon-yellow transition-colors duration-300"
    >
      <FaLinkedin />
    </a>
  </ScrollReveal>
  <ScrollReveal delay={900}>
    <a
      href="https://www.instagram.com/halfreel_films?igsh=cWE2aTk3emJpdnZl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-neon-yellow transition-colors duration-300"
    >
      <FaInstagram />
    </a>
  </ScrollReveal>
  <ScrollReveal delay={1000}>
    <a
      href="https://youtube.com/@halfreelfilms6360?si=ugM_BpWd0YInxn3H"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-800 hover:text-neon-yellow transition-colors duration-300"
    >
      <FaYoutube />
    </a>
  </ScrollReveal>
</div>

          </div>
        </section>

        {/* Right Map Section */}
        <section className="w-full lg:w-1/3 flex justify-center items-center lg:px-10">
          <div className="w-full h-64 sm:h-80 lg:h-[60vh] xl:h-[70vh]">
            <motion.div
              className="w-full h-full rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.4480750782627!2d73.0917426!3d19.219294299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7950aeaab4501%3A0xb7d5a21d123ba88b!2sHalfreel%20Films!5e0!3m2!1sen!2sin!4v1758971066868!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Halfreel Films Location"
              ></iframe>
            </motion.div>
          </div>
        </section>


      </div>
    </div>
  );
}

function ScrollReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{ minHeight: "1px" }}
      className={`transition duration-700 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
    >
      {children}
    </div>
  );
}
