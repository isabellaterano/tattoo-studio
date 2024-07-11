import { useState } from "react";
import image from "../assets/images/user3.jpg";
import image2 from "../assets/images/user.jpg";
import image3 from "../assets/images/user2.jpg";
import { ImQuotesLeft } from "react-icons/im";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Testimonial = () => {
  const testimonials = [
    {
      image: image,
      text: "O Skull Tattoo Studio forneceu um serviço excepcional, superando nossas expectativas em todos os aspectos. A atenção aos detalhes e o compromisso com a excelência realmente os diferenciam. Recomendo fortemente o Skull Tattoo Studio para qualquer projeto de tatuagem.",
      name: "Ana Paula",
      work: "Cliente Satisfeita",
    },
    {
      image: image2,
      text: "O Skull Tattoo Studio transformou a minha experiência com tatuagens com suas soluções inovadoras de design e execução. A expertise e o profissionalismo foram evidentes durante todo o processo. Trabalhar com o Skull Tattoo Studio foi uma mudança de jogo para mim.",
      name: "Carlos Henrique",
      work: "Cliente Satisfeito",
    },
    {
      image: image3,
      text: "Não poderíamos estar mais felizes com os resultados entregues pelo Skull Tattoo Studio. A criatividade, expertise e dedicação da equipe nos ajudaram a alcançar nossos objetivos e elevar nossa marca pessoal. O Skull Tattoo Studio é um parceiro confiável com quem continuaremos a colaborar no futuro.",
      name: "Juliana Souza",
      work: "Cliente Satisfeita",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section className="flex p-2 md:p-8 justify-center items-center min-h-dvh flex-col bg-slate-200 text-slate-950">
      <h1 className="text-3xl mb-6 font-medium lg:text-4xl lg:mb-10">
        Veja o que nossos clientes dizem
      </h1>
      <div className="p-8">
        {testimonials.map(
          (item, index) =>
            index === current && (
              <div key={index}>
                <div className="pb-10 flex items-start gap-4">
                  <ImQuotesLeft size={68} color="#cf3ad6 " weight="duotone" />
                  <h2 className="text-lg md:text-2xl font-bold">{item.text}</h2>
                </div>
                <div className="lg:flex justify-between items-end">
                  <div className="flex gap-4 items-center">
                    <div>
                      <img
                        src={item.image}
                        alt={item.name}
                        width={110}
                        className="rounded-full border border-pink-950 p-1"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <span>{item.work}</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 mt-8">
                    <div
                      onClick={previous}
                      className="bg-pink-950 p-4 cursor-pointer rounded-full hover:opacity-85"
                    >
                      <FaLessThan size={20} color="#fff" />
                    </div>
                    <div
                      onClick={next}
                      className="bg-pink-950 p-4 cursor-pointer rounded-full hover:opacity-85"
                    >
                      <FaGreaterThan size={20} color="#fff" />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Testimonial;
