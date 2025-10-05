import React, { useRef, useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

export default function Work() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const refTop = useRef(null);
  const refLeft = useRef(null);
  const refRight1 = useRef(null);
  const refRight2 = useRef(null);

  const inViewTop = useInView(refTop, { once: true });
  const inViewLeft = useInView(refLeft, { once: true });
  const inViewRight1 = useInView(refRight1, { once: true });
  const inViewRight2 = useInView(refRight2, { once: true });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navbar */}
      {/* Navbar */}
<div className="block md:fixed top-0 left-0 right-0 z-50">
  <Navigation />
</div>


      <section id="about" className="w-full pt-24 md:pt-28 work-section">
        <div className="w-full max-w-full flex flex-col items-center justify-start pt-8 px-4 h-full">
          <div className="w-full max-w-8xl text-center">
            {/* Title */}
            <h1 className="text-about-heading font-extrabold text-neon-yellow mb-6 ">
              OUR WORK
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-6xl mx-auto text-base md:text-lg lg:text-[24px] text-muted-foreground leading-relaxed tracking-wide px-4"
            >
              From fast-paced ad film editing to cinematic storytelling, our
              post-production team crafts visuals that captivate. We've worked with
              brands across industries, offering expert video editing, VFX, and
              motion graphics that turn raw footage into scroll-stopping content.
              Every frame we touch is built to engage, convert, and wow.
            </motion.p>

            {/* Top Section - Tata, Zoya, CountryDelight, MGHector */}
            <div className="grid grid-cols-2 grid-rows-[3fr_2fr_2fr] gap-2 h-[100vh] max-w-7xl mx-auto px-4">
              {/* Box 1 - Tata */}
              <motion.div
                ref={refTop}
                initial={{ y: -100, opacity: 0 }}
                animate={inViewTop ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                onClick={() => navigate("/Work/TATA")}
                className="col-span-2 row-span-1 bg-[#333399] flex items-center justify-center mt-[30px] rounded-xl overflow-hidden relative group cursor-pointer"
              >
                {/* Hover Image */}
                <img
                  src="/Hover/ttt.png"
                  alt="TATA Image"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                />
                {/* Main Logo */}
                <img
                  src="/White logos/Tata motors.png"
                  alt="TATA Logo"
                  className="w-[200px] sm:w-[275px] md:w-[350px] lg:w-[400px] xl:w-[475px] h-auto object-contain z-10 max-w-full max-h-full"
                />
              </motion.div>

              {/* Box 2 - Zoya */}
              <motion.div
                ref={refLeft}
                initial={{ x: -100, opacity: 0 }}
                animate={inViewLeft ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                onClick={() => navigate("/Work/Zoya")}
                className="relative col-start-1 row-start-2 row-span-2 overflow-hidden group cursor-pointer rounded-xl bg-[#c49884] flex items-center justify-center"
              >
                {/* Hover Image */}
                <img
                  src="/Hover/zoya.png"
                  alt="Zoya Image"
                  className="absolute w-full h-full top-0 left-0 object-cover opacity-0 group-hover:opacity-60 transition-all duration-700 ease-in-out z-0"
                />
                {/* Logo in the middle */}
                <img
                  src="/White logos/ZOYA.png"
                  alt="Zoya Logo"
                  className="w-[120px] sm:w-[165px] md:w-[200px] lg:w-[230px] xl:w-[250px] h-auto object-contain z-10 max-w-full max-h-full"
                />
              </motion.div>

              {/* Box 3 - Country Delight */}
              <motion.div
                ref={refRight1}
                initial={{ x: 100, opacity: 0 }}
                animate={inViewRight1 ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                onClick={() => navigate("/Work/Country Delight")}
                className="relative col-start-2 row-start-2 overflow-hidden group cursor-pointer rounded-xl bg-[#ffcd36] flex items-center justify-center"
              >
                {/* Hover Image */}
                <img
                  src="/Hover/country_delight.png"
                  alt="Country Delight Image"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                />
                {/* Main Logo */}
                <img
                  src="/White logos/country_delight.png"
                  alt="Country Delight Logo"
                  className="w-[100px] sm:w-[125px] md:w-[150px] lg:w-[165px] h-auto object-contain z-10 max-w-full max-h-full"
                />
              </motion.div>

              {/* Box 4 - MGHector */}
              <motion.div
                ref={refRight2}
                initial={{ x: 100, opacity: 0 }}
                animate={inViewRight2 ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={() => navigate("/Work/MgHector")}
                className="relative col-start-2 row-start-3 overflow-hidden group cursor-pointer rounded-xl bg-[#1C1C1C] flex items-center justify-center"
              >
                {/* Hover Background Image */}
                <img
  src="/Hover/mgh.png"
  alt="MGHector Image"
  className="absolute inset-0 w-full h-full object-cover 
             object-right sm:object-center 
             opacity-0 group-hover:opacity-60 
             transition-all duration-700 ease-in-out z-0"
/>

                {/* Logo (changes color/lightens on hover) */}
                <img
                  src="/White logos/morris garage hector-01.png"
                  alt="MGHector Logo"
                  className="w-[120px] sm:w-[145px] md:w-[150px] lg:w-[180px] xl:w-[200px] h-auto object-contain z-10 max-w-full max-h-full"
                />
              </motion.div>
            </div>

            {/* Row for Whisper & Man'sWorld */}
            <div className="w-full max-w-7xl mx-auto mt-2">
              <div className="grid grid-cols-3 gap-2 w-full px-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => navigate("/Work/Whisper")}
                  className="relative group bg-[#24cf36] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md overflow-hidden cursor-pointer"
                >
                  {/* Hover image (centered in box) */}
                  {/* <img
  src="/Hover/whiper.jpeg"
  alt="Whisper Image"
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover 
             object-[80%_center] sm:object-[45%_center] 
             opacity-0 group-hover:opacity-60 transition-all duration-700 ease-in-out z-0"
/> */}

                  {/* Logo stays above */}
                  <img
                    src="/White logos/Whisper.png"
                    alt="Whisper Logo"
                    className="w-[200px] sm:w-[240px] md:w-[280px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => navigate("/Work/Man'sWorld")}
                  className="relative col-span-2 bg-[#e34426] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md cursor-pointer overflow-hidden group"
                >
                  {/* Hover Background Image */}
                  <img
                    src="/Hover/mansworld.jpg"
                    alt="Man's World Image"
                    className="absolute inset-0 w-full h-full object-cover object-[center_45%] opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Logo/Image */}
                  <img
                    src="/White logos/mansworld logo better quality.png"
                    alt="Man's World Logo"
                    className="w-[140px] sm:w-[175px] md:w-[225px] lg:w-[350px] xl:w-[400px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Row for Freakins, Iconiq, FrenchEssence */}
            <div className="w-full max-w-7xl mx-auto mt-2">
              <div className="grid grid-cols-3 gap-2 w-full px-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => navigate("/Work/Freakins")}
                  className="group bg-[#000000] h-[300px] flex items-center justify-center text-black font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/frekinsss.png"
                    alt="Freakins Image"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0 object-left sm:object-center"
                  />
                  {/* Main Image/Logo */} 
                  <img
                    src="/White logos/Freakins.png"
                    alt="Freakins Logo"
                    className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => navigate("/Work/ICONiQ")}
                  className="group bg-[#E5E7EB] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/iconiq.png"
                    alt="Iconiq Image"
                    className="absolute inset-0 w-full h-full object-cover object-[60%_center] sm:object-center opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/Iconic.png"
                    alt="Iconiq Logo"
                    className="w-[140px] sm:w-[160px] md:w-[180px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => navigate("/Work/FRENCHESSENCE")}
                  className="group bg-[#121212] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/french_essence.png"
                    alt="French Essence Image"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/French essence.png"
                    alt="French Essence Logo"
                    className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Row for Pluspoint, Jazz, CRISIL */}
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-3 gap-2 w-full px-4 h-[600px] mt-2">
                <div className="col-span-2 flex flex-col gap-2 h-full">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    onClick={() => navigate("/Work/PlusPoint")}
                    className="relative col-span-2 bg-[#4c341f] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md cursor-pointer overflow-hidden group"
                  >
                    {/* Hover Background Image (covers entire box) */}
                    <img
                      src="/Hover/plus_point.png"
                      alt="PlusPoint Image"
                      className="absolute inset-0 w-full h-[300px] object-cover object-top opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                    />
                    {/* Main Logo (brightens on hover) */}
                    <img
                      src="/White logos/Plus point.png"
                      alt="PlusPoint Logo"
                      className="w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] h-auto object-contain z-10 max-w-full max-h-full"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    onClick={() => navigate("/Work/Jazz")}
                    className="relative flex-1 bg-[#ff2b2a] flex items-center justify-center text-black font-bold text-2xl rounded-xl shadow-md overflow-hidden cursor-pointer group"
                  >
                    {/* Hover Image */}
                    <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-in-out z-0">
  <img
    src="/Hover/jazz.png"
    alt="Rolling Stone Image"
    className="absolute w-full h-[350px] sm:h-[350px] md:h-[500px] 
               bottom-[-50px] sm:bottom-[-100px] md:bottom-[-150px] 
               left-1/2 -translate-x-1/2 
               opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0 
               object-cover"
  />
</div>

                    {/* Main Image/Logo */}
                    <img
                      src="/White logos/Rolling stone.png"
                      alt="Rolling Stone Logo"
                      className="w-[140px] sm:w-[170px] md:w-[250px] lg:w-[350px] xl:w-[400px] h-auto object-contain z-10 max-w-full max-h-full"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => navigate("/Work/CRISIL")}
                  className="group bg-[#5b5b5b] flex items-center justify-center text-black font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
  src="/Hover/crizil.jpg"
  alt="Crisil Image"
  className="absolute inset-0 w-full h-full 
             object-cover 
             object-[25%_center] sm:object-[55%_center] md:object-[60%_center] lg:object-[65%_center]
             opacity-0 group-hover:opacity-60 
             transition-opacity duration-700 ease-in-out z-0"
/>


                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/Crisil.png"
                    alt="Crisil Logo"
                    className="w-[180px] sm:w-[200px] md:w-[230px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Row for Ashapura, Kesariya, Poddar*/}
            <div className="w-full max-w-7xl mx-auto mt-2">
              <div className="grid grid-cols-3 gap-2 w-full px-4">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => navigate("/Work/Ashapura Realty")}
                  className="group bg-[#c06c6c] h-[300px] flex items-center justify-center text-black font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/ashapura_realty.png"
                    alt="Ashapura Realty Image"
                    className="absolute inset-0 w-full h-full object-cover object-[25%_center] opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/Ashapura2.png"
                    alt="Ashapura Realty Logo"
                    className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[250px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => navigate("/Work/Kesariya Farm")}
                  className="group bg-[#35762f] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/kesariya_farm.png"
                    alt="Kesariya Farm Image"
                    className="absolute inset-0 w-full h-full object-cover object-[10%_center] opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/KESARIYA.png"
                    alt="Kesariya Farm Logo"
                    className="w-[180px] sm:w-[200px] md:w-[225px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => navigate("/Work/Poddar Realty")}
                  className="group bg-[#3d6e99] h-[300px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/podaar_realty.png"
                    alt="Poddar Realty Image"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/Poddar.png"
                    alt="Poddar Realty Logo"
                    className="w-[60px] sm:w-[70px] md:w-[100px] lg:w-[140px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </div>

            {/* Row for Seekho & NUA */}
            <div className="w-full max-w-7xl mx-auto mt-2">
              <div className="grid grid-cols-2 w-full px-4 pb-4 gap-2">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => navigate("/Work/Seekho")}
                  className="group bg-[#7252e3] h-[200px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/seekhoapp.png"
                    alt="Seekho Image"
                    className="absolute inset-0 w-full h-full object-cover object-top opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />
                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/SEEKHO (2).png"
                    alt="Seekho Logo"
                    className="w-[100px] sm:w-[125px] md:w-[150px] lg:w-[180px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => navigate("/Work/NUA")}
                  className="group bg-[#e75751] h-[200px] flex items-center justify-center text-white font-bold text-xl rounded-xl shadow-md relative overflow-hidden cursor-pointer"
                >
                  {/* Hover Image */}
                  <img
                    src="/Hover/nua.png"
                    alt="NUA Image"
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 ease-in-out z-0"
                  />

                  {/* Main Image/Logo */}
                  <img
                    src="/White logos/NUA.png"
                    alt="NUA Logo"
                    className="w-[110px] sm:w-[135px] md:w-[160px] lg:w-[180px] h-auto object-contain z-10 max-w-full max-h-full"
                  />
                </motion.div>
              </div>
            </div>

            <motion.img
              src="/White logos/logo strip.png"
              alt="Work showcase"
              className="mx-auto rounded-xl max-w-7xl w-full object-cover pb-6 px-4"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
