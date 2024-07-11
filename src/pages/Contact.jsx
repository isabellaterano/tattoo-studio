import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

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
          Entre em contato
        </h1>
        <p className="text-lg">
          Tem alguma dúvida ou deseja agendar uma consulta? Entre em contato
          conosco!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:mx-12">
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-2xl font-medium">Informações de contato</h2>
          <p>
            <FaMapMarkerAlt className="inline-block mr-2" />
            855 Tattoo Lane, Moema, São Paulo, Brasil
          </p>
          <p>
            <strong>Telefone:</strong> (11) 123456-7890
          </p>
          <p>
            <strong>Email:</strong> info@skulltattoostudio.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-xl hover:text-gray-700 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-xl hover:text-gray-700 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="text-xl hover:text-gray-700 transition" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <h2 className="text-2xl font-medium">Envie-nos uma mensagem</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                required
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="message"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-950"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-pink-950 text-pink-50 px-6 py-2 rounded-md text-lg font-semibold hover:bg-opacity-70 transition duration-300 inline-flex items-center gap-2"
            >
              Enviar
              <FiSend />
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h2 className="text-2xl font-medium mb-6">Nossa Localização</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.39593114477!2d-46.92498063676921!3d-23.681434505947195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1720640720004!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="border-0 rounded-md shadow-md"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Contact;
