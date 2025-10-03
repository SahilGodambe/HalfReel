import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function MansWorld() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // IDs of 6 vertical videos
  const verticalVideos = [
    "ZA0ZCOFSI_c?si=0r2qHCKg53pU700b",
    "T6iZthU382s?si=s3j-yIDae0BSgbyI",
    "T-8FAqrreWQ?si=OKL-bIfH0WtXyRjn",
    "YAKkJDBXggA?si=xumj0fqwajM0xn7P",
    "M6lu8iDzpq8?si=ZF5fV7Pb0kXP8kcE",
    "Fxd0neBQ5ww?si=yTo-ontEZ415BwBF",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 md:px-8">

      {/* Main Video & Details */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center">
        {/* Left: Main Video */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-4 relative pt-7">
          <div className="w-full max-w-[500px] aspect-[9/12] rounded-xl overflow-hidden shadow-md relative group">
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.iframe
                  key="video"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dgny0TDl77s?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1"
                  title="Man's World Video"
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
                    src="https://img.youtube.com/vi/dgny0TDl77s/maxresdefault.jpg"
                    alt="Man's World thumbnail"
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
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-neon-yellow"
            initial={{ opacity: 0, x: 100 }}       // start 100px right
            animate={{ opacity: 1, x: 0 }}         // slide to original position
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Man’s World – Fashion Films Post Production
          </motion.h1>

          <motion.p
            className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Halfreel Films produced 4 high-quality fashion films for Man’s World.<br />
            Post-production covered offline/online editing, grading, sound mixing, VO, and motion graphics.<br />
            The films highlighted contemporary style and premium menswear.<br />
            Slow, cinematic pacing conveyed sophistication.<br />
            Colour grading enhanced texture and design details.<br />
            Sound design added depth to visual storytelling.<br />
            Visual language matched the magazine’s editorial tone.<br />
            We delivered consistent quality across all films.<br />
            Assets were optimised for digital viewing.<br />
            This project showcases our skill in high-fashion visual narratives.<br />
          </motion.p>
        </div></div>

      {/* 6 Vertical Videos */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10  pb-24 md:pb-0">
        {verticalVideos.map((id, index) => (
          <div key={index} className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md relative group">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}?controls=1&modestbranding=1`}
              title={`Vertical Video ${index + 1}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      {/* Floating Back Button */}
      <Link
        to="/work"
        className="fixed bottom-8 left-8 flex items-center group z-50"
      >
        <div className="p-3 rounded-full bg-neon-yellow text-black transition hover:bg-black hover:text-neon-yellow flex items-center justify-center cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
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
