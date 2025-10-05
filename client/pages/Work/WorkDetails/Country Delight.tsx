// WorkDetails/Country Delight.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Navigation from "../../../components/Navigation"; <-- import your Navigation

export default function CountryDelight() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const moreVideos = [
    "87s05-ROFzo?si=t-UyQSOArsgrN4TC",
    "ulou3BRUCBE?si=0dMO5rsTQtmDiJ-v",
    "jgaVBbqDZQg?si=anfNgb9xvxbjMNqy",
    "A1XNHfidk-w?si=4oqghPbRsCZOMprl",
    "KF-zseUm58A?si=Pe7l148YAxr3Avaq",
  ];
  const videoId = "-bDWCP1cX3E";
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground p-8 overflow-x-hidden">

      {/* Navigation at the top */}
      {/* <Navigation /> */}

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
          Country Delight – Product & Testimonial Films
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Halfreel Films delivered 6 films – 1 testimonial and 5 product ads.<br />
          Post-production balanced trust-building with product appeal.

        </p>
      </motion.div>

      {/* Main Video */}
      <div className="w-full flex items-center justify-center pb-4 relative">
        <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg relative group">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.iframe
                key="video"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1&vq=hd1080`}
                title="YouTube video player"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <motion.div
                key="thumbnail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full h-full relative group"
              >
                {/* Thumbnail */}
                <motion.img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="YouTube thumbnail"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    whileTap={{ scale: 0.9 }}
                    className={`w-20 h-20 rounded-full border-2 border-white bg-black/50 flex items-center justify-center shadow-lg relative overflow-hidden transition hover:scale-110 ${!isPlaying ? "animate-pulse-ring" : ""
                      }`}
                  >
                    {/* Ripple Effect */}
                    <motion.span
                      initial={false}
                      animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0.6, 0.3, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeOut",
                      }}
                      className="absolute w-full h-full rounded-full bg-white/20"
                    />

                    {/* Play Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      className="ml-[3px] relative z-10"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Big Description */}
      <motion.div
        ref={(el) => (sectionRefs.current[2] = el)}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-8"
      >
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Halfreel Films delivered 6 films – including 1 main testimonial film and 5 product ads.
          Post-production covered offline/online editing, colour grading, sound mixing, and animations.
          The testimonial film built trust through real customer stories.
          Product ads highlighted freshness and quality.<br />
          Animations added clarity to product features.
          Colour grading reinforced the brand’s natural, clean image.<br />
          Audio was optimised for digital ads.
          Pacing matched consumer attention spans online.<br />
          We ensured consistency across all assets.
          This project demonstrates our versatility in FMCG storytelling.<br />


        </p>
      </motion.div>

      {/* Grid of More YouTube Videos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-16 md:pb-0">
        {moreVideos.map((id, index) => (
          <motion.div
            key={id}
            ref={(el) => (sectionRefs.current[index + 3] = el)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="aspect-video rounded-xl overflow-hidden shadow-md"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=0`}
              title={`PlusPoint Video ${id}`}
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
