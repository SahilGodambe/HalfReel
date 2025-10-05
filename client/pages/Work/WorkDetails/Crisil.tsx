// WorkDetails/Crisil.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CRISIL() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  const images = [
    "/CRISIL WORK STATIC/01.png",
    "/CRISIL WORK STATIC/02.png",
    "/CRISIL WORK STATIC/03.png",
  ];
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground p-6 md:p-10 lg:p-16 overflow-x-hidden">
      {/* Title */}
      <motion.div
        ref={(el) => (sectionRefs.current[0] = el)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-4"
      >
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-extrabold text-[#F66A13] ">
          CRISIL
        </h1>
      </motion.div>

      {/* Big Description */}
      <motion.div
        ref={(el) => (sectionRefs.current[1] = el)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl lg:max-w-6xl mx-auto text-center mb-8"
      >
        <p className="text-sm md:text-lg lg:text-xl 2xl:text-2xl leading-relaxed text-muted-foreground">
          We partnered with CRISIL to produce and post-produce 22 films for their prestigious CEO Awards Ceremony.
          <br />
          The project included a two-day shoot, followed by four weeks of post-production, where our team handled
          editing, motion graphics, screen replacements, and sound design. From capturing dynamic visuals to delivering
          polished, high-quality films, we ensured seamless execution and impactful storytelling tailored for a grand
          corporate celebration.
        </p>
      </motion.div>

      {/* Collage Grid of Images */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {images.map((src, index) => (
          <motion.div
            key={src}
            ref={(el) => (sectionRefs.current[index + 2] = el)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`rounded-xl overflow-hidden shadow-lg ${
              index === 1 ? "h-[calc(100%+10px)]" : "aspect-[16/9]"
            }`}
          >
            <img
              src={src}
              alt={`CRISIL Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Back to Work Button */}
      <Link
        to="/work"
        className="fixed bottom-8 left-8 flex items-center group z-50"
      >
        <div className="p-3 rounded-full bg-[#F66A13] text-black transition hover:bg-black hover:text-[#F66A13] flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="ml-2 text-sm md:text-base font-semibold text-[#F66A13] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to Work
        </span>
      </Link>
    </div>
  );
}