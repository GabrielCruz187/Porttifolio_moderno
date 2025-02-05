import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-20 sm:py-28 lg:py-36 flex items-center">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text section */}
          <div className="text-center xl:w-[30vw] flex flex-col lg:text-left mb-8 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8 mb-4"
            >
              My services <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm sm:text-base"
            >
              Ofereço soluções completas e personalizadas em desenvolvimento web, desde a criação de interfaces intuitivas até a implementação de sistemas robustos no backend. Meu foco é transformar ideias em ferramentas digitais eficientes, com alta performance e design funcional.
            </motion.p>
          </div>

          

          {/* Slider section */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%] flex justify-center"
          >
            <ServiceSlider />
          </motion.div>
          
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;

