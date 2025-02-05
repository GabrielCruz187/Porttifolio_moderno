import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

import CountUp from 'react-countup'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";

import {
  SiNextdotjs,
 
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Full stack developer',
        icons: [
          <FaHtml5 key={1} />,
          <FaCss3 key={2} />,
          <FaJs key={3} />,
          <FaReact key={4} />,
          <SiNextdotjs key={5} />,
          <FaPython key={6} />,
          <FaNodeJs key={7} />,
          <FaSass key={8} />,
        ],
      },
      
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Freelancer ',
        stage: '2023 - 2024',
      },
      
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Anásile e denvolvimento de sistemas - Cruzeiro Do Sul',
        stage: '2022 - 2024',
      },
      {
        title: 'Full stack developer - Onbitcode',
        stage: '2023',
      },
      
    ],
  },
];

import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'
import ParticlesContainer from '../../components/ParticlesContainer';

const About = () => {

  const [index, setIndex] = useState(0)


  return <div className=' h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar img */}
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden"
      className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row'>
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2
          variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden"
          className='h2'>Quem <span className='text-accent'>sou</span> eu?</motion.h2>
        <motion.p
          variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden"
          className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 '> Sou Gabriel Cruz, tenho 21 anos e atualmente estou cursando Análise e Desenvolvimento de Sistemas. Além de meus estudos, também faço cursos complementares para expandir meus conhecimentos e atuo como freelancer em desenvolvimento web. Estou em busca do meu primeiro emprego fixo na área de tecnologia, onde posso aplicar minhas habilidades e continuar evoluindo como Full Stack Developer.
        </motion.p>
       

        <motion.div
          variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-6 '>
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of experience</div>
            </div>

            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={70} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied clients</div>
            </div>
            <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={55} duration={5} /> +
              </div>
              <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished projects</div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
              cursor-pointer capitalize
              xl:text-lg relative after:w-8 after:h-[2px]
              after:bg-white after:absolute after:-bottom-1 after:left-0
              `}
                onClick={() => setIndex(itemIndex)}

              >
                {item.title}
              </div>
            )
          })}

        </div>

        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center
          xl:items-start
          '>
          {aboutData[index].info.map((item, itemIndex) => {
            return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max
            gap-x-2 items-center text-white/60
            '>
              <div className='font-light mb-2 md:mb-0 '>
                {item.title}
              </div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* icons */}
                {item.icons?.map((icon, itemIndex) => {
                  return <div key={itemIndex} className='text-2xl text-white '>{icon}</div>
                })}
              </div>
            </div>
          })}
        </div>

      </motion.div>
      

    </div>
    
  </div>;
};

export default About;