import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  font: string;
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', font, className }) => (
  <div className="flex overflow-hidden whitespace-nowrap py-4">
    <motion.div 
      className={`flex gap-12 ${font} ${className}`}
      animate={{ x: direction === 'left' ? [0, -1000] : [-1000, 0] }}
      transition={{ ease: "linear", duration: 20, repeat: Infinity }}
    >
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-8xl md:text-[12rem] uppercase leading-none">{text}</span>
      ))}
    </motion.div>
  </div>
);

const Typography: React.FC = () => {
  return (
    <section id="tipografia" className="pt-0 pb-40 bg-[#F2F0EC] text-[#1A1420] overflow-hidden">
      <div className="space-y-12 pt-20">
        <div>
           <div className="px-8 md:px-20 flex justify-between items-end mb-4">
              <span className="font-mono text-xs text-[#751E19]">AMBIGUITY TRADITION</span>
              <span className="font-mono text-xs opacity-50">DISPLAY / HEADLINES</span>
           </div>
           <Marquee text="HELENA ME MATA" font="font-tradition" className="text-[#1A1420]" />
        </div>

        <div>
           <div className="px-8 md:px-20 flex justify-between items-end mb-4">
              <span className="font-mono text-xs text-[#751E19]">AMBIGUITY THRIFT BOLD</span>
              <span className="font-mono text-xs opacity-50">SUBHEADS / EMPHASIS</span>
           </div>
           <Marquee text="BELLEZA CRUEL" direction="right" font="font-thrift-bold" className="text-[#751E19]" />
        </div>

        <div>
           <div className="px-8 md:px-20 flex justify-between items-end mb-4">
              <span className="font-mono text-xs text-[#751E19]">AMBIGUITY THRIFT LIGHT</span>
              <span className="font-mono text-xs opacity-50">MINIMAL / EDITORIAL</span>
           </div>
           <Marquee text="SE SIENTE" font="font-thrift" className="text-[#1A1420]" />
        </div>

        <div className="px-8 md:px-20 grid md:grid-cols-2 gap-12 mt-32">
           <div className="font-thrift text-4xl md:text-6xl leading-tight">
              "La tipografía no se lee, <span className="text-[#751E19] italic font-thrift-bold">se siente.</span>"
           </div>
           <div className="font-thrift text-xl leading-relaxed opacity-70 flex flex-col justify-end">
              <p>Ambiguity Thrift Light se utiliza para el cuerpo de texto, aportando un aire editorial y sofisticado que contrasta con la brutalidad de los titulares.</p>
              <div className="mt-8 text-6xl font-thrift">Aa Bb Cc Dd Ee</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;