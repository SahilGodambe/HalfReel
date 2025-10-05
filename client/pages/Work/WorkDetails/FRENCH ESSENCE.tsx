// WorkDetails/FRENCHESSENCE.tsx
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Navigation from "../../../components/Navigation"; <-- import your Navigation

export default function FRENCHESSENCE() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);
  const moreVideos = [

    // Vertical videos
    "B0zC2dLaU9I?si=Zpb5dcXYcYHHpCJx",
    "fPk38JOU0AU?si=I-biD4HVMJSNwHtL",
    "tBKfQM7_bog?si=wPlds7IXadS1JJpR",
    "MrXCmGbA9wU?si=tceqo0l-mtlbgfT8",
    "tBKfQM7_bog?si=8BOh_MIoePrClcCc",
    "xNzEK-kUAb8?si=Aam2XYs0ix7lEPfV",
    "yjEW4_TMaPU?si=UFX1jqO1AZay-5Km",
    "4Pl9X_s57IU?si=jyj788r3ijmzWhoN",
    "BFOARHQckuM?si=8qzVd2G4aGXa1tgY",
    "Snd4pK3zeo0?si=BVFxyPYHkeks3gN8",
    "Ns-fp98p-Ko?si=0lX8fE6FeF2W8KRL",
    "nqAHVFyBgHs?si=sW1oa10B_fOsyqzF",
    "DjvBiwD4f_A?si=EE828UvRMamb4y8E",
    "-N4ys5STAMU?si=Ethx3HSedAMGIfg4",
    "RS-d_26is9g?si=Rpy0lWm0_sDul-RN",
    "IHDNraP_CCM?si=Z4-JRUpVX4iHYVD0",
    "6vSY6Ow6fGg?si=X6XhnuOYvScDM3cb",
    "hTaMJwHisHI?si=c0flFoaq2AFF32cq",
    "n166eg0v9tw?si=Ui0hoHjyShLtCHIQ",
    "D8uokaGBEI8?si=3_h2z6DDYfmh1UGF",
    "T7hFMHnXD9M?si=iVM6Xx_YPL7HomUw",
    "n6uo8ngeKiQ?si=W9x4qs_LcoKh7pub",
    "rb4vRCmilz4?si=tHCRMgEe1W7NboyY",
    "qLim2ieMqwc?si=67g7BZH7j8vziq7k",
    "cCp821XJQpM?si=2rGO48Lh-LLuW3er",
    "koP_wmXtcRc?si=4Sus6ap00_loiFWK",
    "GAso7FTw60s?si=R8C2Fokx7HCNv8-Z",
    "v2x7yayEV0c?si=gUQUKxLK_nqs_8z5",
    "zuiEWE-OOdg?si=1vKVV2oQqDKXn_PX",
    "NUOzwPCDTJw?si=uShAyX810AhYAVCu",
    "rR8PFlVGb7U?si=Q9N8eolsaUXM8Xfy",
    "3QFVqPR47kE?si=JqxRxCluK9UITCpj",
    "u9e4Mpd8Gbc?si=wrDP-_lalHyP4hKf",
    "B0tfBuu9ZHQ?si=zqros-mzh5D1Se5L",
    "rFpERFWiRzY?si=pWt1V1Xr0dNNbXMV",
    "jWhwf-22hx4?si=wg5ZMuNYacwLS_aC",
    "kSzxo21mOoc?si=N6rbBVP1orBUyi_7",
    "qqJfcMhFmgc?si=tXG-zM-5Ulwg7P02",
    "x6656s9mZDI?si=x5IusE5nVaHDSsqi",
    "2_Rg9l80KRg?si=-YTl3TZ-jYqg5xtQ",
    "DMGb_It5lwY?si=peFJYq8l9p9Y3TDE",
    "MQJ9utrmUeE?si=af6bvPbjPXNIjHKT",
  ];
  const videoId = "XJPZ5C1Co9s";
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
          French Essence – Digital Campaign Post Production
        </h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Halfreel Films delivered 42 films for French Essence – 1 main digital film and 41 reels.<br />
          Handled complete post-production, ensuring luxury storytelling and platform-ready content.

        </p>
      </motion.div>

      {/* Main Video */}
      <div className="w-full flex items-center justify-center pb-4 relative transition-all duration-1000">
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
          Halfreel Films partnered with French Essence to bring their campaign vision to life.
          We delivered a total of 42 films, including 1 main digital film and 41 digital reels.
          Our scope covered complete post-production – offline editing, online finishing, colour grading, sound mixing, and voice-over.
          The main digital film set the tone for the brand’s premium storytelling.
          The 41 reels were crafted to engage audiences across various social media platforms.
          Each asset was optimised for its platform without losing cinematic quality.
          We ensured visual consistency, elegance, and audio precision across all deliverables.
          The films reflected the brand’s luxurious and sophisticated identity.
          Collaboration with the creative team ensured storytelling authenticity.
          This project showcases our ability to manage high-volume, premium-quality content with finesse.

        </p>
      </motion.div>

      {/* Collage Grid of YouTube Videos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pb-16 md:pb-0">
        {moreVideos.map((id, index) => {
          // Define different aspect ratios for collage
          const isHorizontal = index < 0; // first 2 videos horizontal
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
