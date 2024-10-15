import Link from "next/link";

import {  
  RiInstagramLine, 
  RiLinkedinBoxLine,
  RiGithubLine
  
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.instagram.com/gabriell___cruzz/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/gabriel-silva-cruz-67160526a/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinBoxLine />
      </Link>
      <Link href={'https://github.com/GabrielCruz187'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      
    </div>
  );
};

export default Socials;

