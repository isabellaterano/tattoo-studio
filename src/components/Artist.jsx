import { motion } from "framer-motion";
import artistImage1 from "../assets/images/artist.jpg";
import artistImage2 from "../assets/images/artist2.jpg";
import artistImage3 from "../assets/images/artist3.jpg";
import artistImage4 from "../assets/images/artist4.jpg";
import artistImage5 from "../assets/images/artist5.jpg";
import artistImage6 from "../assets/images/artist6.jpg";

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

const Artists = () => {
  return (
    <div className="container mx-auto px-4 py-16 min-h-dvh">
      <motion.div
        className="text-center mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Nossos Artistas
        </h1>
        <p className="text-lg">
          Conheça nossa talentosa equipe de artistas que criam tatuagens
          impressionantes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage1}
            alt="Artist 1"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">Lucia Yumi</h2>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage2}
            alt="Artist 2"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">Pedro Vicente</h2>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage3}
            alt="Artist 3"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">
              Isadora Buarque
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage4}
            alt="Artist 4"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">
              Marta Gonçalves
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage5}
            alt="Artist 5"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">Rodrigo Santos</h2>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={artistImage6}
            alt="Artist 5"
            className="object-cover rounded-lg shadow-md w-full h-64 grayscale"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
            <h2 className="text-xl font-semibold text-white">Victor Pereira</h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Artists;
