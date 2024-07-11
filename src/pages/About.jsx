import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from "../assets/images/about.jpg";
import image2 from "../assets/images/about2.jpg";

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

const About = () => {
  return (
    <div className="grid grid-cols-1 gap-8 text-lg items-center mt-20 mb-8 mx-2 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32 lg:mt-28 lg:mx-8 ">
      <motion.div
        className="col-span-1 lg:col-span-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Bem-vindo ao Skull Tattoo
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Em nosso estúdio de tatuagem, acreditamos na criação de arte
            excepcional que dura a vida toda. Nossa equipe de tatuadores
            experientes está dedicada a fornecer um trabalho de alta qualidade
            em um ambiente seguro e acolhedor ambiente.
          </p>
          <p>
            Quer você esteja procurando um design pequeno ou uma manga inteira,
            nós oferecem uma ampla gama de estilos e técnicas para trazer sua
            visão para vida. Nosso estúdio de última geração garante os mais
            altos padrões de higiene e segurança.
          </p>
          <p>
            Desde a consulta inicial até os cuidados posteriores, estamos aqui
            para orientá-lo em cada etapa do processo de tatuagem. Nosso
            objetivo é fazer sua experiência o mais confortável e agradável
            possível.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="col-span-1 lg:col-span-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <img
          src={image1}
          alt="Tattoo artist at work"
          className="object-cover rounded-lg shadow-md w-full"
        />
      </motion.div>

      <motion.div
        className="relative aspect-square col-span-1 lg:col-span-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        <img
          src={image2}
          className="object-cover rounded-lg shadow-md w-full h-full"
          alt="Tattoo designs"
        />
      </motion.div>

      <motion.div
        className="col-span-1 lg:col-span-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
          Fazendo Arte desde 2012
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Desde 2012, nosso estúdio tem sido a pedra angular da tatuagem
            comunidade, oferecendo artesanato excepcional com um toque pessoal.
            Fundada por Pedro Ribeiro, a nossa paixão pela arte e dedicação aos
            nossos os clientes têm sido a força motriz do nosso sucesso.
          </p>
          <p>
            Temos orgulho em construir relacionamentos duradouros com nossos
            clientes. Nosso compromisso com a educação contínua e os mais
            recentes técnicas artísticas garantem que você receba tatuagens da
            mais alta qualidade.
          </p>

          <div>
            <Link
              to="/galeria"
              className="inline-block mt-4 bg-pink-950 rounded-md px-4 py-4 text-lg font-semibold hover:bg-opacity-85 transition-all"
            >
              Explore nossa galeria
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
