import { motion } from "framer-motion";
import galleryImage1 from "../assets/images/gallery.jpg";
import galleryImage2 from "../assets/images/gallery2.jpg";
import galleryImage3 from "../assets/images/gallery3.jpg";
import galleryImage4 from "../assets/images/gallery4.jpg";
import galleryImage5 from "../assets/images/gallery5.jpg";
import galleryImage6 from "../assets/images/gallery6.jpg";
import galleryImage7 from "../assets/images/gallery7.jpg";
import galleryImage8 from "../assets/images/gallery8.jpg";
import galleryImage9 from "../assets/images/gallery9.jpg";

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
    <div className="container mx-auto px-4 py-16">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage1}
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
          className="relative"
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
        <motion.div
          className="relative sm:col-span-2 lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage6}
            alt="Tattoo Art 6"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative sm:col-span-2 lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage7}
            alt="Tattoo Art 7"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative sm:col-span-2 lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage8}
            alt="Tattoo Art 8"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
        <motion.div
          className="relative sm:col-span-2 lg:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={galleryImage9}
            alt="Tattoo Art 9"
            className="object-cover rounded-lg shadow-md w-full h-64"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
