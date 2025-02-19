import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiSqlalchemy, SiSqlite } from 'react-icons/si';

const workSlides = [
  {
    id: 1,
    title: 'Restaurante',
    path: '/food.png',
    link: '#',
    description: 'Um site responsivo para um restaurante, com funcionalidades de reserva e cardápio dinâmico.',
    techs: [<FaHtml5 key="html5" />, <FaCss3 key="css3" />, <FaJs key="js" />],
  },
  {
    id: 2,
    title: 'Snake Shop',
    path: '/loja.png',
    link: '#',
    description: 'E-commerce para venda de produtos exóticos, com carrinho de compras e integração de pagamento.',
    techs: [<FaHtml5 key="html5" />, <FaCss3Alt key="css3alt" />, <FaJs key="js" />],
  },
  {
    id: 3,
    title: 'Barbearia',
    path: '/barber.png',
    link: '#',
    description: 'Sistema de agendamento online para barbearia, com interface amigável e agenda dinâmica.',
    techs: [<FaReact key="react" />, <SiNextdotjs key="nextjs" />, <FaNodeJs key="nodejs" />],
  },
  {
    id: 4,
    title: 'Plataforma de Cursos',
    path: '/onee.png',
    link: '#',
    description: 'Plataforma de vendas de cursos com suporte a múltiplos usuários e upload de aulas.',
    techs: [<FaReact key="react" />, <FaNodeJs key="nodejs" />, <SiTailwindcss key="tailwind" />, <SiNextdotjs key="nextjs" />, <SiSqlite key="sqlite" />],
  },
];

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="py-10 px-4 sm:px-8 lg:px-16"
    >
      {workSlides.map((project) => (
        <SwiperSlide key={project.id}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden group"
          >
            <div className="w-full h-60 sm:h-80 lg:h-96 overflow-hidden relative">
              <Image
                src={project.path}
                alt={project.title}
                width={500}
                height={300}
                className="absolute top-0 left-0 w-full h-auto transform group-hover:translate-y-[-100%] transition-transform duration-[2000ms] ease-in-out"
              />
            </div>

            <div className="absolute inset-0 bg-black/70 p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex space-x-2 text-white text-lg">
                {project.techs.map((tech) => tech)}
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;


