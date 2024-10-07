import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import {FreeMode, Pagination} from 'swiper'



// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Front-end',
    description: 'Criação de interfaces de usuário modernas, interativas e otimizadas para todos os dispositivos.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Back-end',
    description: 'Implementação da lógica de negócios e gerenciamento de dados em servidores, de forma eficiente e segura.',
  },
  {
    icon: <RxDesktop />,
    title: 'APIs',
    description: 'Implementação da lógica de negócios e gerenciamento de dados em servidores, garantindo que a aplicação funcione de forma eficiente e segura.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return <Swiper breakpoints={{
    320: {
      slidesPerView:1,
      spaceBeteem:15
    },
    640: {
      slidesPerView:3,
      spaceBeteem:15
    },
    
  }}
  freeMode={true}
  pagination={{
    clickable:true
  }}
  modules={[FreeMode,Pagination]}
  className='h-[240px] sm:h-[340px]'
  >
    {
      serviceData.map((item,index) =>{
        return(
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
           sm:flex-col mx-2 gap-x-6 sm:gap-x-0 group cursor-pointer
           hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
           
           '>
              {/* icon */}
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            
            <div className='mb-8'>
              {/* title & desc */}
              <div className='mb-2 text-lg'>{item.title}</div>
              <div className='max-w-[350px] leading-normal'>{item.description}</div>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent 
              transition-all
              duration-300
              '/>
            </div>
            </div>
          </SwiperSlide>
        )
      })
}
    Service Slider</Swiper>;
};

export default ServiceSlider;
