import { motion } from "framer-motion";
import galleryImage from "../assets/images/gallery.jpg";
import galleryImage2 from "../assets/images/gallery2.jpg";
import galleryImage3 from "../assets/images/gallery3.jpg";
import galleryImage4 from "../assets/images/gallery4.jpg";
import galleryImage5 from "../assets/images/gallery5.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-slate-200 text-slate-950 min-h-dvh">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Galeria
        </h1>
        <p className="text-lg">
          Confira alguns de nossos trabalhos mais recentes e veja o que nossos
          talentosos artistas podem fazer.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage}
            alt="Tattoo Art 1"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage2}
            alt="Tattoo Art 2"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage3}
            alt="Tattoo Art 3"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage4}
            alt="Tattoo Art 4"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage5}
            alt="Tattoo Art 5"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
      </div>

      <div className="text-center mt-10">
        <motion.a
          href="/galeria"
          className="bg-pink-950 text-pink-100 px-6 py-3 rounded-md text-lg font-semibold hover:bg-opacity-80 transition duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          Veja mais
        </motion.a>
      </div>
    </div>
  );
};

export default Gallery;
