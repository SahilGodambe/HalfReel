import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import About from "./About";
import Contact from "./Contact";

const Index = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fade, setFade] = useState("opacity-100");

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const isScrolling = useRef(false);

  const homeVideoRef = useRef<HTMLVideoElement | null>(null);
  const workVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);

  const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth < 768);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  

  const navigate = useNavigate();

  const sections = [
    { label: "Home" },
    { label: "About" },
    { label: "Work", bg: "bg-blue-600" },
    { label: "Contact", bg: "bg-yellow-600" },
  ];

  useEffect(() => {
    if (activeIndex === displayIndex) return;
    setFade("opacity-0");
    const timeout = setTimeout(() => {
      setDisplayIndex(activeIndex);
      setFade("opacity-0");
      requestAnimationFrame(() => setFade("opacity-100"));
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeIndex, displayIndex]);

  useEffect(() => {
    let startY = 0;
    const threshold = 50;
    const handleTouchStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;
      if (isScrolling.current || Math.abs(deltaY) < threshold) return;
      isScrolling.current = true;
      if (deltaY > 0 && activeIndex < sections.length - 1) setActiveIndex((p) => p + 1);
      else if (deltaY < 0 && activeIndex > 0) setActiveIndex((p) => p - 1);
      setTimeout(() => (isScrolling.current = false), 800);
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex]);

  useEffect(() => {
    let scrollAccumulator = 0;
    const scrollThreshold = 100;
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling.current) return;
      if (activeIndex === 1) {
        const aboutContainer = document.querySelector(".overflow-y-auto") as HTMLElement;
        if (aboutContainer) {
          const { scrollTop, scrollHeight, clientHeight } = aboutContainer;
          if (e.deltaY < 0 && scrollTop === 0) {
            e.preventDefault();
            scrollAccumulator += Math.abs(e.deltaY);
            if (scrollAccumulator >= scrollThreshold) {
              setActiveIndex((p) => p - 1);
              scrollAccumulator = 0;
              isScrolling.current = true;
              setTimeout(() => (isScrolling.current = false), 800);
            }
            return;
          }
          if (e.deltaY > 0 && scrollTop + clientHeight >= scrollHeight - 5) {
            scrollAccumulator += e.deltaY;
            if (scrollAccumulator >= scrollThreshold) {
              setActiveIndex((p) => p + 1);
              scrollAccumulator = 0;
              isScrolling.current = true;
              setTimeout(() => (isScrolling.current = false), 800);
            }
            return;
          }
          return;
        }
      }
      e.preventDefault();
      scrollAccumulator += Math.abs(e.deltaY);
      if (scrollAccumulator >= scrollThreshold) {
        scrollAccumulator = 0;
        isScrolling.current = true;
        if (e.deltaY > 0 && activeIndex < sections.length - 1) setActiveIndex((p) => p + 1);
        else if (e.deltaY < 0 && activeIndex > 0) setActiveIndex((p) => p - 1);
        setTimeout(() => (isScrolling.current = false), 800);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex]);

  useEffect(() => {
    const video =
      activeIndex === 0
        ? homeVideoRef.current
        : activeIndex === 2
          ? workVideoRef.current
          : null;

    if (!video) return;

    const handleTimeUpdate = () => setVideoCurrentTime(video.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, [activeIndex]);

  useEffect(() => {
    const video = homeVideoRef.current;
    if (!video) return;
    if (activeIndex === 0) {
      video.currentTime = videoCurrentTime;
      video.play().catch(() => { });
    } else video.pause();
  }, [activeIndex]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && activeIndex === 0) {
        e.preventDefault();
        togglePlayPause();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeIndex]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = homeVideoRef.current;
      if (!video) return;
      if (document.hidden) {
        setVideoCurrentTime(video.currentTime);
        video.pause();
      } else if (activeIndex === 0) {
        video.currentTime = videoCurrentTime;
        video.play().catch(() => { });
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [activeIndex, videoCurrentTime]);

  // Get correct video element depending on activeIndex + device
const getActiveVideo = () => {
  if (activeIndex === 0) {
    return isMobile ? mobileVideoRef.current : homeVideoRef.current;
  } else if (activeIndex === 2) {
    return workVideoRef.current;
  }
  return null;
};


  const togglePlayPause = () => {
  const video = getActiveVideo();
  if (!video) return;
  if (video.paused) {
    video.play().catch(() => {});
    setIsPlaying(true);
  } else {
    video.pause();
    setIsPlaying(false);
  }
};

const toggleMute = () => {
  const video = getActiveVideo();
  if (!video) return;
  video.muted = !video.muted;
  setIsMuted(video.muted);
};
useEffect(() => {
  const video = getActiveVideo();
  if (!video) return;

  const handleTimeUpdate = () => setVideoCurrentTime(video.currentTime);
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  video.addEventListener("timeupdate", handleTimeUpdate);
  video.addEventListener("play", handlePlay);
  video.addEventListener("pause", handlePause);

  return () => {
    video.removeEventListener("timeupdate", handleTimeUpdate);
    video.removeEventListener("play", handlePlay);
    video.removeEventListener("pause", handlePause);
  };
}, [activeIndex, isMobile]);



  const renderSlideContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="h-full w-full relative bg-black" onClick={togglePlayPause}>
            <video
              key={isMobile ? "mobile" : "desktop"}
              ref={isMobile ? mobileVideoRef : homeVideoRef}
              className="w-screen h-screen"
              style={{ objectFit: isMobile ? "cover" : "fill" }}
              autoPlay
              loop
              muted={isMuted}
              playsInline
            >
              <source 
                src={isMobile ? "/homemp4-mobile.mp4" : "/homemp4.mp4"} 
                type="video/mp4" 
              />
            </video>

            <div className="absolute bottom-6 right-12 flex flex-col items-end gap-4 z-20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlayPause();
                }}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
              >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
              </button>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="h-full w-full overflow-y-auto bg-white">
            <About showNavbar={false}/>
          </div>
        );

      case 2:
        return (
          <div className="h-full w-full flex flex-col-reverse lg:flex-row mt-4 px-0 sm:px-6 lg:px-14">
  {/* Text Section */}
  <div className="w-full lg:w-1/2 h-1/2 lg:h-full p-4 sm:p-6 lg:p-8 flex md:items-center justify-start lg:pl-16">
  <div className="max-w-xl space-y-4 sm:space-y-6 text-left">
    <div className="sm:pl-[10px] lg:pl-16"> 
  <motion.p
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
   className="text-[60px] sm:text-[60px] lg:text-[90px] 2xl:text-[96px] font-extrabold">
    <span className="text-neon-yellow">Our</span>{" "}
    <span className="text-neon-yellow">Work</span>
  </motion.p>

  {/* <p className="text-[18px] sm:text-[18px] lg:text-[32px] 2xl:text-[32px] font-semibold leading-relaxed text-black pl-0 sm:pl-[10px]">
    Raw to Remarkable! <br />
    Ads to cinema, we craft edits, VFX, and motion that turn raw footage
    into scroll-stopping stories.
  </p> */}
  <motion.p
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="text-[18px] sm:text-[18px] lg:text-[32px] 2xl:text-[32px] font-semibold leading-relaxed text-black pl-0 sm:pl-[10px]"
>
  Raw to Remarkable! <br />
  Ads to cinema, we craft edits, VFX, and motion that turn raw footage
  into scroll-stopping stories.
</motion.p>


  



      {/* <button
        onClick={() => navigate("/Work")}
        className="px-4 py-2 sm:px-6 sm:py-3 2xl:px-8 2xl:py-4 text-black text-base sm:text-lg 2xl:text-xl font-semibold rounded-md transition-colors duration-300 bg-[hsl(var(--neon-light-yellow))] hover:bg-[hsl(var(--neon-yellow))]"
      >
        Explore Our Work
      </button> */}
      <motion.button
  onClick={() => navigate("/Work")}
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="px-4 py-2 sm:px-6 sm:py-3 mt-6 2xl:px-8 2xl:py-4 2xl:mt-10 text-black text-base sm:text-lg 2xl:text-xl font-semibold rounded-md transition-colors duration-300 bg-[hsl(var(--neon-light-yellow))] hover:bg-[hsl(var(--neon-yellow))]"
>
  Explore Our Work
</motion.button>
    </div>
    </div>
  </div>

  {/* Video Section */}
  <motion.div
  className="w-full lg:w-1/2 h-1/2 lg:h-full flex justify-center items-center px-4 lg:pl-0 lg:pr-8 relative"
  onClick={togglePlayPause}
  initial={{ opacity: 0, x: 100 }} // start 100px right
  animate={{ opacity: 1, x: 0 }}  // fade in & slide to center
  transition={{ duration: 1 }}
>
  <video
    ref={workVideoRef}
    src="/workmp4.mp4"
    autoPlay
    loop
    muted={isMuted}
    playsInline
    className="w-full h-full max-h-[50vh] lg:max-h-none object-contain"
  />

  {/* Controls */}
  <div
    className="absolute bottom-4 left-4 flex gap-2 bg-black bg-opacity-50 p-2 rounded"
    onClick={(e) => e.stopPropagation()}
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        togglePlayPause();
      }}
      className="text-white p-1"
      aria-label="Play/Pause"
    >
      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        toggleMute();
      }}
      className="text-white p-1"
      aria-label="Mute/Unmute"
    >
      {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
    </button>
  </div>
</motion.div>
</div>

        );

      case 3:
        return (
          <div className="h-full w-full overflow-y-auto bg-white">
            <Contact showNavbar={false}/>
          </div>
        );

      default:
        return (
          <div
            className={`h-full w-full flex items-center justify-center text-white text-5xl ${sections[index].bg}`}
          >
            {sections[index].label}
          </div>
        );
    }
  };

  return (
    <div
      className="min-h-[100dvh] w-screen overflow-hidden relative font-sans"
      style={{
        overscrollBehavior: "none", // stop pull-to-refresh
        touchAction: "none",        // stop browser default gestures
      }}
    >
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navigation />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${fade}`}>
        {renderSlideContent(displayIndex)}
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
        {sections.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-3 w-3 rounded-full ${activeIndex === i ? "bg-white scale-125" : "bg-gray-400"
              }`}
            title={sections[i].label}
          />
        ))}
      </div>

      {activeIndex === 0 && (
        <div className="fixed bottom-6 left-6 hidden sm:block text-white text-sm bg-black/50 p-3 rounded-lg">
          Press <kbd className="bg-white/20 px-2 py-1 rounded">Space</kbd> to play/pause
        </div>
      )}
    </div>
  );
};

export default Index;
