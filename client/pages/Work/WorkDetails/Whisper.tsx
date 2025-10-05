// WorkDetails/Whisper.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Whisper() {
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  
  // Two vertical videos
  const moreVideos = [
    "eNqkrE6jjB8", // first vertical video
    "cmcY8kZ9T8g", // second vertical video
  ];
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground p-8 overflow-x-hidden">

      {/* Title & Small Description */}
      <motion.div
        ref={(el) => (sectionRefs.current[0] = el)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 pt-2 md:pt-2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-neon-yellow mb-2">
          Whisper
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Post-production for Whisper’s UGC content reels – curating and shaping two engaging reels that bring out the brand’s voice with authenticity and relatability.<br/>
We made sure even UGC content feels polished, crisp, and scroll-stopping.
        </p>
      </motion.div>

      {/* Collage Grid of YouTube Videos */}
      {/* Collage Grid of YouTube Videos */}
<div className="flex justify-center gap-[20px] pb-16 md:pb-0">
  {moreVideos.map((id, index) => (
    <motion.div
      key={id}
      ref={(el) => (sectionRefs.current[index + 1] = el)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-xl overflow-hidden shadow-md aspect-[9/16] w-[300px]"
    >
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=0`}
        title={`Whisper Video ${index + 1}`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </motion.div>
  ))}
</div>


      {/* Floating Back to Work Button */}
      <Link
        to="/work"
        className="fixed bottom-8 left-8 flex items-center group z-50"
      >
        <div className="p-3 rounded-full bg-neon-yellow text-black transition hover:bg-black hover:text-neon-yellow flex items-center justify-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-7 h-7"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <span className="ml-2 text-sm font-semibold text-neon-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to Work
        </span>
      </Link>
    </div>
  );
}
