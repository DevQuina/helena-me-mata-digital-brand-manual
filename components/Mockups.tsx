import React from 'react';
import { motion } from 'framer-motion';

const MockupItem: React.FC<{ title: string; subtitle: string; bg: string }> = ({ title, subtitle, bg }) => (
  <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8 }}
    className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-gray-200"
  >
    <div className={`w-full h-full bg-cover bg-center ${bg} transition-transform duration-1000 group-hover:scale-110`} />
    <div className="absolute inset-0 bg-[#1A1420]/20 group-hover:bg-transparent transition-colors duration-500" />
    
    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-[#F2F0EC] text-[#1A1420]">
      <h3 className="font-thrift text-xl mb-2 uppercase tracking-tight">{title}</h3>
      <p className="font-thrift text-sm opacity-70">{subtitle}</p>
    </div>
  </motion.div>
);

const Mockups: React.FC = () => {
  return (
    <section id="aplicaciones" className="bg-[#F2F0EC] pt-0 pb-40 px-4 md:px-8">
      <div className="max-w-[1800px] mx-auto pt-20">
        <div className="flex flex-col md:flex-row justify-end items-end mb-24 px-4">
           <p className="text-[#1A1420] font-thrift max-w-sm text-right mt-8 md:mt-0 opacity-60">
             Aplicaciones físicas y digitales donde la marca cobra vida.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <MockupItem 
             title="Menu Design" 
             subtitle="Papel texturizado 300g con golpe en seco." 
             bg="bg-[url('https://res.cloudinary.com/dhz5y6c4r/image/upload/v1771318190/export_1_14_bazr5a.jpg')]"
           />
           <MockupItem 
             title="Social Media" 
             subtitle="Feed curado: Oscuridad y saturación selectiva." 
             bg="bg-[url('https://res.cloudinary.com/dhz5y6c4r/image/upload/v1771321100/export_1_18_pyrgh6.jpg')]"
           />
           <MockupItem 
             title="Signage" 
             subtitle="Neón rojo sobre piedra cruda." 
             bg="bg-[url('https://res.cloudinary.com/dhz5y6c4r/image/upload/v1771318191/Image_image_g2ftvn.jpg')]"
           />
        </div>
      </div>
    </section>
  );
};

export default Mockups;