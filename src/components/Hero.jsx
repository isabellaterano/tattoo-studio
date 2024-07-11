import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroVideo from "../assets/hero.mp4";
import { FaWhatsapp } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      className="relative h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-55"
        src={heroVideo}
        autoPlay
        loop
        muted
        aria-hidden="true"
      ></video>
      <div className="relative container flex flex-col items-center lg:items-start justify-center h-full z-10 text-center lg:text-left lg:ml-8">
        <motion.h1
          id="hero-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transformando ideias <br />
          em arte na pele com <br />
          excelência e paixão
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="/contato"
            className="border-2 bg-opacity-55 border-pink-950 text-pink-50 px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-950 transition duration-300 inline-flex items-center gap-2"
          >
            Entre em contato
            <FaWhatsapp />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
