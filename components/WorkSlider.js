import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaCss3, FaJs, } from 'react-icons/fa'; // Exemplos de ícones
import { SiTailwindcss, SiNextdotjs, SiSqlalchemy, SiSqlite } from 'react-icons/si'; // Outros ícones

// Dados do slider
const workSlides = [
  {
    title: 'Restaurante',
    path: '/food.png',
    link: '#',
    description: 'Um site responsivo para um restaurante, com funcionalidades de reserva e cardápio dinâmico.',
    techs: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
  {
    title: 'Snake Shop',
    path: '/loja.png',
    link: '#',
    description: 'E-commerce para venda de produtos exóticos, com carrinho de compras e integração de pagamento.',
    techs: [<FaHtml5 />, <FaCss3Alt />, <FaJs />],
  },
  {
    title: 'Barbearia',
    path: '/barber.png',
    link: '#',
    description: 'Sistema de agendamento online para barbearia, com interface amigável e agenda dinâmica.',
    techs: [<FaReact />, <SiNextdotjs />, <FaNodeJs />],
  },
  {
    title: 'Plataforma de Cursos',
    path: '/onee.png',
    link: '#',
    description: 'Plataforma de vendas de cursos com suporte a múltiplos usuários e upload de aulas.',
    techs: [<FaReact />, <FaNodeJs />, <SiTailwindcss />, <SiNextdotjs />, <SiSqlite />],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20} // Espaçamento entre os itens
      slidesPerView={2} // Mostrar 2 projetos por vez
      pagination={{ clickable: true }} // Bolinhas de navegação
      modules={[Pagination]}
      className="py-10 px-4 sm:px-8 lg:px-16"
    >
      {workSlides.map((project, index) => (
        <SwiperSlide key={index}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden group"
          >
            {/* Imagem do Projeto */}
            <div className="w-full h-60 sm:h-80 lg:h-96 overflow-hidden relative">
              <Image
                src={project.path}
                alt={project.title}
                width={500}
                height={300}
                className="absolute top-0 left-0 w-full h-auto transform group-hover:translate-y-[-100%] transition-transform duration-[2000ms] ease-in-out"
              />
            </div>

            {/* Informações do Projeto */}
            <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-2 text-white text-lg">
                {project.techs.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
