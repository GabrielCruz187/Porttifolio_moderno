import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Certifique-se de importar o CSS de navegação
import { Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// Dados dos projetos
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Rede social',
          path: '/one.jpeg',
          github: 'https://github.com/GabrielCruz187/lavagem-do-z-',
        },
        {
          title: 'Lavajato',
          path: '/ze.png',
          github: 'https://github.com/GabrielCruz187/lavagem-do-z-',
        },
        {
          title: 'Plataforma de vender cursos',
          path: '/plataforma.png',
          github: 'https://github.com/GabrielCruz187/lavagem-do-z-',
        },
      ],
    },
    {
      images: [
        {
          title: 'Outro Projeto 1',
          path: '/projeto1.png',
          github: 'https://github.com/GabrielCruz187/projeto1',
        },
        {
          title: 'Outro Projeto 2',
          path: '/projeto2.png',
          github: 'https://github.com/GabrielCruz187/projeto2',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={30} // Espaçamento entre os slides
      slidesPerView={1} // Exibir um projeto por vez
      navigation={true} // Habilita navegação por setas
      pagination={{ clickable: true }} // Habilita a paginação
      modules={[Pagination, Navigation]} // Inclui os módulos de paginação e navegação
      className="h-[480px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex space-x-4">
              {slide.images.map((image, index) => {
                return (
                  <Link key={index} href={image.github} target="_blank" rel="noopener noreferrer">
                    <div className="relative img-projet group"
                    style={{ backgroundImage: `url(${image.path})` }}>
                      
                      <div className="overlay">{image.title}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
