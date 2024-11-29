//components
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import ParticlesContainer from '../../components/ParticlesContainer';

const Contact = () => {
  return (
    <div className="h-full bg-primary/30 relative overflow-hidden">
       {/* Background de partículas */}
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full relative z-10">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] space-y-10">
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-8"
          >
            Let&apos;s <span className="text-accent">connect</span>.
          </motion.h2>
          
          {/* form */}
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-6 w-full mx-auto"
          >
            {/* group */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="input"
              />
              <textarea
                placeholder="Your Message"
                className="textarea"
              />
            </div>
            {/* submit button */}
            <motion.button
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 py-4 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
