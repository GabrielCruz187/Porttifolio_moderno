import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials"

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        {/* Logo */}
        <h1>
          DEV <span className="text-[#f13024]">CRUZ</span>
         </h1>

        {/* Social icons */}
        <Socials />
      </div>
    </header>
  );
};

export default Header;

