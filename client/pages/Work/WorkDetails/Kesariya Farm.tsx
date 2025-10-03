// WorkDetails/Kesariya.tsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Navigation from "../../../components/Navigation"; <-- import your Navigation

export default function Kesariya() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const moreVideos = [
    // Horizontal videos
    "YFayHNgz7Kk?si=kmqtXU0a_jXEKppW",
    "M-Dfe4BhpbQ?si=nuXhh7hW0HeoDTPc",
  ];
  const videoId = "V8zsTln1Gpk";

  return (
    <div className="min-h-screen bg-background text-foreground p-8 overflow-x-hidden">

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
          Kesariya Farm
        </h1>
      </motion.div>



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
          We partnered with Kesariya Farms to post-produce three horizontal, music-led ads for their flagship A2 Ghee product.<br />
          Our team handled editing, sound design, and motion graphics, bringing together visuals and rhythm to highlight the purity and richness of the brand.
          The result was a set of premium ads crafted to engage audiences and elevate Kesariya Farms’ product storytelling.<br />
        </p>
      </motion.div>

      {/* Collage Grid of YouTube Videos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-16 md:pb-0">
        {moreVideos.map((id, index) => {
          // Define different aspect ratios for collage
          const isHorizontal = index < 4; // first 2 videos horizontal
          return (
            <motion.div
              key={id}
              ref={(el) => (sectionRefs.current[index + 3] = el)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`
          rounded-xl overflow-hidden shadow-md
          ${isHorizontal ? "md:col-span-2 aspect-[16/9]" : "md:col-span-1 aspect-[9/16]"}
        `}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}?autoplay=0&controls=1&rel=0`}
                title={`PlusPoint Video ${id}`}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          );
        })}
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
