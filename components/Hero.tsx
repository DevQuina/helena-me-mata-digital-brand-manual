import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { BrandLogo, BrandIsotype } from './LogoSystem';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth springs for mouse movement
  const springConfig = { damping: 30, stiffness: 200 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  // Transforms for the background isotype (parallax)
  const isotypeX = useTransform(mouseX, [-1, 1], [-40, 40]);
  const isotypeY = useTransform(mouseY, [-1, 1], [-40, 40]);
  const isotypeRotateX = useTransform(mouseY, [-1, 1], [5, -5]); // Slight 3D tilt
  const isotypeRotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1A1420] text-[#F2F0EC]">
      
      {/* Background Dynamic Isotype (The "Spirit" of the brand) */}
      <motion.div 
        style={{ 
          x: isotypeX, 
          y: isotypeY,
          rotateX: isotypeRotateX,
          rotateY: isotypeRotateY,
          perspective: 1000
        }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.04, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-[110vh] h-[110vh] max-w-none"
        >
            <BrandIsotype color="#F2F0EC" />
        </motion.div>
      </motion.div>

      {/* Main Content: The Official Logo */}
      <motion.div 
        className="relative z-10 flex flex-col items-center gap-12 px-8 max-w-[90vw] w-full"
      >
        {/* The Brand Logo - Clean, Big, Official */}
        <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full md:w-[85%] lg:w-[75%]"
        >
            <BrandLogo color="#F2F0EC" />
        </motion.div>

        {/* Subtitle / Context */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center gap-2 mt-8 text-center"
        >
            <p className="font-thrift text-sm md:text-lg tracking-[0.2em] uppercase">
                Manual de Identidad Digital
            </p>
        </motion.div>

      </motion.div>

      {/* Interactive Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 mix-blend-difference"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#F2F0EC]/50">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-[#751E19] to-transparent opacity-50" />
      </motion.div>

    </section>
  );
};

export default Hero;