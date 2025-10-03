import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Seekho() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  // IDs of 6 vertical videos
  const verticalVideos = [
    "XD5XBotvIsY?si=R_wMVtXyI0-zkWOt",
    "o8vVQFpV0IM?si=0mQ2UfWSse01Cahj",
    "jFktqapHPZg?si=MJhxgq9qaIInUN10",
    "9-AgrmPvf3U?si=fvashXLCs34vbiZ-",
  ];

  // Main video ID
  const mainVideoId = "3Ru0xtwtqCg";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 md:px-8">

      {/* Main Video & Details */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center">
        {/* Left: Main Video */}
        <div className="w-full md:w-1/2 flex items-center justify-center py-4 relative transition-all duration-1000 pt-7">
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
                  src={`https://www.youtube.com/embed/${mainVideoId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
                  title="Seekho Main Video"
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
                    src={`https://img.youtube.com/vi/${mainVideoId}/maxresdefault.jpg`}
                    alt="Seekho main thumbnail"
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
                      className="w-20 h-20 rounded-full border-2 border-white bg-black/50 flex items-center justify-center shadow-lg relative overflow-hidden transition hover:scale-110"
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
            initial={{ opacity: 0, x: 100 }}       // start off-screen right
            animate={{ opacity: 1, x: 0 }}         // slide into position
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Seekho App – Digital Ad Campaign
          </motion.h1>

          <motion.p
            className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Halfreel Films executed a complete ad campaign for Seekho App.<br />
            We produced 5 digital reels optimised for social platforms.<br />
            Services included production and post-production, covering filming, editing, grading, sound, VO, and animation.<br />
            Each reel was designed for concise, impactful storytelling.<br />
            We balanced informative content with engaging visuals.<br />
            Animations simplified key concepts for easy understanding.<br />
            Visual language was aligned with the app’s youthful, modern tone.<br />
            Audio was mixed for clarity and punch in mobile viewing.<br />
            Content was platform-optimised for reach and retention.<br />
            This campaign reflects our skill in creating engaging educational content.<br />
          </motion.p>
        </div>
      </div>

      {/* Vertical Videos */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 pb-24 md:pb-0">
        {verticalVideos.map((id, index) => (
          <div
            key={index}
            className="w-full aspect-[9/16] rounded-xl overflow-hidden shadow-md relative group"
          >
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
