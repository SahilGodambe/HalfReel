// WorkDetails/Jazz.tsx
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Jazz() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "hoe6VvEoBUs";
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 md:px-8">
      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-center h-auto md:h-screen">
        {/* Left: YouTube Video */}
        <div className="w-full md:w-3/5 flex items-center justify-center py-4 relative transition-all duration-1000">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md relative group">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.iframe
                  key="video"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
                  title="Jazz Project Video"
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
                    alt="Jazz project thumbnail"
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
                      className={`w-20 h-20 rounded-full border-2 border-white bg-black/50 flex items-center justify-center shadow-lg relative overflow-hidden transition hover:scale-110 ${
                        !isPlaying ? "animate-pulse-ring" : ""
                      }`}
                    >
                      {/* Ripple effect */}
                      <motion.span
                        initial={false}
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.6, 0.3, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
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

        {/* Right: Title & Details */}
        <div className="w-full md:w-2/5 flex flex-col justify-center h-auto md:h-full pb-20  md:pb-0 px-2 sm:px-4">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-neon-yellow"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Jazz – Rolling Stone | Music Content Post Production
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 text-muted-foreground"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Halfreel Films collaborated with Rolling Stone for the Jazz project.<br />
            We delivered 9 films – including 3 teasers, 3 main episodes, and 3 vertical reel adaptations.<br />
            Post-production included offline/online editing, colour grading, sound mixing, VO, 2D/3D animation, and infographics.<br />
            The teasers built anticipation ahead of the episode launches.<br />
            The main episodes captured performances and storytelling in cinematic quality.<br />
            Reels repurposed content for high-impact social reach.<br />
            Visuals were graded for a rich, immersive music experience.<br />
            Audio mixing preserved the depth and clarity of live performance.<br />
            We ensured each format felt unique yet connected.<br />
            This project reflects our adaptability in multi-format music content.<br />
          </motion.p>
        </div>
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
