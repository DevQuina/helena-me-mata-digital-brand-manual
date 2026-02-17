import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  { name: 'Sangre', hex: '#751E19', desc: 'Pasión, Tragedia, Vino.', text: '#F2F0EC' },
  { name: 'Noche', hex: '#1A1420', desc: 'Misterio, Inframundo.', text: '#F2F0EC' },
  { name: 'Mármol', hex: '#F2F0EC', desc: 'Estatua, Piel, Luz.', text: '#1A1420' },
];

const ColorPalette: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="color" className="min-h-[calc(100vh-6rem)] w-full flex flex-col md:flex-row relative">
      {colors.map((color, index) => (
        <motion.div
          key={color.name}
          onHoverStart={() => setActive(index)}
          onHoverEnd={() => setActive(null)}
          className="relative min-h-[33vh] md:min-h-auto flex-1 border-r border-white/10 flex items-center justify-center cursor-pointer overflow-hidden transition-[flex] duration-700 ease-in-out interactive"
          style={{ 
            backgroundColor: color.hex,
            flex: active === index ? 3 : 1
          }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            <span style={{ color: color.text }} className="font-mono text-xs opacity-50">0{index + 1}</span>
            
            <div className="flex flex-col items-center">
               <h3 
                 style={{ color: color.text }} 
                 className={`font-thrift uppercase tracking-tighter transition-all duration-500 whitespace-nowrap ${active === index ? 'text-6xl md:text-8xl rotate-0' : 'text-4xl rotate-90 md:rotate-0'}`}
               >
                 {color.name}
               </h3>
               
               <AnimatePresence>
                 {active === index && (
                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     className="mt-8 text-center"
                   >
                     <p style={{ color: color.text }} className="font-thrift text-xl italic">{color.desc}</p>
                     <p style={{ color: color.text }} className="font-bold mt-4 tracking-widest">{color.hex}</p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>

            <span style={{ color: color.text }} className="font-mono text-xs opacity-50 text-right">HEX</span>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ColorPalette;