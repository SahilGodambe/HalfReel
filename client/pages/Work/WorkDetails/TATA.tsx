// WorkDetails/TATA.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import Navigation from "../../../components/Navigation"; <-- import your Navigation

export default function TATA() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const moreVideos = [
    "A9WgE-zjIOE?si=tfFgZ_BQzozEH1c0",
    "swWidGyCfsw?si=h5au4tJPPVa8Mdpn",
    "0eNxMNhl8pc?si=2L_BTU2Rgj3SYsrt",
    "0eNxMNhl8pc?si=9Ho6bFOxwSMWc9sp",
    "L2qFECbudzw?si=GITxXtpU5xzMwh9e",
    "ZrkikAeTBRc?si=5VQHIyWTkt8fYYUy",
    "8wjQ_A4Rxl0?si=KEPhe2Bk_17v1Pzq",
    "BuwW6M3xLI0?si=0OOuIv9NIbWxnfff",
    "6rta6uJWWgU?si=tQTfl15jmdQQB2is",
    "_LPcNZYh3lM?si=3aDkBnkR7WtpNcRf",
    "kdkK3qY6KLg?si=0VPI9p5EZ3MHdNZd",
    "XusvAwMZRg8?si=WsQG4-Y8UU9h4dsh",
  ];
  const videoId = "GxekA1hrDa8";
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={topRef} className="min-h-screen bg-background text-foreground p-8 pb-8 overflow-x-hidden">

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
          TATA – Corporate AV & Product Film Post Production
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Halfreel Films delivered 11 corporate AVs for TATA, including 1 product film.<br />
          Managed full post-production with animations and infographics for impactful corporate storytelling.
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
                  <button
                    onClick={() => setIsPlaying(true)}
                    className={`w-20 h-20 rounded-full border-2 border-white bg-black/50 flex items-center justify-center shadow-lg transition hover:scale-110 ${!isPlaying ? "animate-pulse-ring" : ""
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      className="ml-[3px]"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
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
        className="max-w-6xl mx-auto text-center mb-8"
      >
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
          Halfreel Films collaborated with TATA to produce a suite of impactful corporate content.
          We delivered 11 corporate AVs, including 1 specialised product film.
          Our post-production services included offline and online editing, colour grading, sound mixing, VO, 2D/3D animation, and infographics.
          The product film showcased engineering excellence and product innovation.
          The corporate AVs highlighted TATA’s capabilities and brand vision.
          We transformed technical details into visually engaging, easy-to-understand storytelling.
          Custom infographics brought clarity to complex information.
          Visual and tonal consistency aligned with TATA’s high standards.
          Our work was tailored for both internal and external communication formats.
          This project underlines our expertise in professional, multi-format corporate content creation.
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
