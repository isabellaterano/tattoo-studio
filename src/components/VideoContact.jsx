import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import videoFile from "../assets/contact.mp4";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const VideoContact = () => {
  return (
    <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <video className="w-full h-full rounded-lg shadow-md" controls>
          <source src={videoFile} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </motion.div>

      <motion.div
        className="p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={formVariants}
      >
        <h2 className="text-3xl mb-6 font-medium">Entre em contato</h2>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <FaPhone className="mr-2 text-xl" />
            <span>(11) 123456-7890</span>
          </div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2 text-xl" />
            <span>855 Tattoo Lane, Moema, São Paulo, Brasil</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2 text-xl" />
            <span>info@skulltattoostudio.com</span>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <a
            href="#"
            className="mx-2 text-xl text-pink-50 hover:text-pink-950 transition duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="mx-2 text-xl text-pink-50 hover:text-pink-950 transition duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="mx-2 text-xl text-pink-50 hover:text-pink-950 transition duration-300"
          >
            <FaXTwitter />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoContact;
