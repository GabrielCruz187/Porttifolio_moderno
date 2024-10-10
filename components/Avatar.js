import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex xl:max-w-none"> {/* Removi a classe hidden para garantir que apareça no responsivo */}
      <Image 
        src={'/gabicruz.png'}
        width={537}
        height={478}
        alt="Gabriel Cruz"
        className=" w-full h-full"
      />
    </div>
  );
};

export default Avatar;
