import { motion } from "framer-motion";
import Navigation from "../components/Navigation";

interface AboutProps { showNavbar?: boolean; }

export default function About({ showNavbar = true }: AboutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Fixed Navbar */}
      {showNavbar && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Navigation />
        </div>
      )}

      {/* Main Content Container with proper spacing */}
      <div className="pt-20 sm:pt-24 md:pt-28 min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-4 sm:px-6 lg:px-14 py-8 ">
        
        {/* Image Section */}
        <div className="h-full flex flex-col md:flex-row-reverse overflow-auto md:overflow-hidden mb-4 sm:mb-0">
          {/* <motion.img
            src="/about us.png"
            alt="About Us"
            className="w-full h-[80vh]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          /> */}
          <motion.img
          initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
  src="/about us.png"
  alt="About Us"
  className="w-full h-auto max-h-[80vh] object-contain"
/>

        </div>

        {/* Content Section */}
        <section className="w-full md:w-1/2 flex flex-col justify-center items-start text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 w-full max-w-[768px]"
          >
            {/* Title */}
            <h1 className="text-[60px] sm:text-[60px] lg:text-[96px] font-[900] leading-[30px] sm:leading-[48px] lg:leading-[96px] text-neon-yellow mb-1 md:mb-2">
              About <span className="text-neon-yellow">Us</span>
            </h1>

            {/* Paragraphs */}
            <p className="font-semibold text-black text-[18px] sm:text-[18px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[38px]">
              Halfreel Films is a creative post-production house based in Mumbai,
              India — blending storytelling, design, and precision editing.
            </p>

            <p className="font-semibold text-black text-[18px] sm:text-[18px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[38px]">
              We specialize in video post-production services including editing,
              color grading, sound design, and motion graphics.
            </p>

            <p className="font-semibold text-black text-[18px] sm:text-[18px] lg:text-[32px] leading-[24px] sm:leading-[28px] lg:leading-[38px]">
              Whether it’s a brand film, digital ad, or social media content, we
              help bring stories to life with a spark of madness and a whole lot
              of craft.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
