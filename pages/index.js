import Image from "next/image";

import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'

import { fadeIn } from '../variants'

const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>

    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10'>
    
    <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
    h-full container mx-auto'>
      <h1 className='h1'>
      Transformando ideias <br />  em {''}
      <span className='text-accent'>realidade digital</span> 
      </h1>

      <p className='max-w-sm xl:max-w-wl mx-auto xl-mx-0 mb-10 xl:mb-16'>
        hsuhsuhsushushshsuushus

      </p>

      <div className="flex jusify-center xl:hidden">
        <ProjectsBtn />
        </div>

    </div>
  </div>

  <div></div>
  </div>
  
  );
};

export default Home;
