import { motion } from "framer-motion";
import { FaSyncAlt, FaEraser, FaStar } from "react-icons/fa";
import { GiHeartburn } from "react-icons/gi";

const services = [
  {
    title: "Tatuagens",
    description:
      "Criação de tatuagens exclusivas e personalizadas para cada cliente.",
    icon: <GiHeartburn size={40} />,
  },
  {
    title: "Coberturas e Reformas",
    description:
      "Transformando tatuagens antigas em novas obras de arte que você se orgulhará de exibir.",
    icon: <FaSyncAlt size={40} />,
  },
  {
    title: "Remoção de tatuagem",
    description:
      "Remoção de tatuagens usa tecnologia de ponta para remover tatuagens indesejadas.",
    icon: <FaEraser size={40} />,
  },
  {
    title: "Piercing",
    description:
      "Oferecemos o serviço de body piercing com a máxima segurança, precisão e higiene.",
    icon: <FaStar size={40} />,
  },
];

const Services = () => {
  return (
    <section className="py-12 min-h-screen bg-slate-950 text-slate-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl mb-10 font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nossos Serviços
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 py-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="mb-6 text-pink-950">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
