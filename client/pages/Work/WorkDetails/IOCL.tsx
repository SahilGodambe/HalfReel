import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export default function IOCL() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "0egGhE2_3OM"; // <-- new video ID
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
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl items-center h-screen">
        {/* Left: YouTube Video */}
        <div className="w-full md:w-3/5 flex items-center justify-center py-4 relative transition-all duration-1000">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md relative group">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1&playsinline=1&rel=0&modestbranding=1`}
                title="Jazz Project Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full relative group">
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="Jazz project thumbnail"
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
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
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Title & Details */}
        <div className="w-full md:w-2/5 flex flex-col justify-center h-full pb-16 md:pb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neon-yellow">
            IOCL – Corporate AV Post Production
          </h1>

          <p className="text-base md:text-lg leading-relaxed mb-4 text-muted-foreground">
            Halfreel Films post-produced 1 corporate AV for IOCL.<br />
            Services included editing, colour grading, and sound mixing.<br />
            The AV communicated IOCL’s values and achievements.<br />
            Visuals were structured for a professional narrative flow.<br />
            Colour grading ensured a clean, corporate look.<br />
            Audio was balanced for clear delivery across platforms.<br />
            We optimised pacing for audience retention.<br />
            Tone and style matched IOCL’s brand guidelines.<br />
            The AV was suitable for both internal and public viewing.<br />
            This project highlights our corporate storytelling skills.<br />

          </p>
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
