import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NavigationGridProps {
  items: string[];
  onNavigate: (item: string) => void;
}

// Exportamos componentes para usarlos en el Hero de App.tsx
export const AnimatedIcon = ({ d, size = 'default' }: { d: string; size?: 'small' | 'default' }) => (
  <div className="w-full flex justify-center items-center h-full">
    <svg 
      viewBox="0 -960 960 960" 
      className={`w-full h-auto overflow-visible ${size === 'small' ? 'max-w-[100px] md:max-w-[120px]' : 'max-w-[140px] md:max-w-[180px]'}`}
      style={{ color: 'currentColor' }}
    >
      <style>
        {`
          .mat-path {
            fill: none;
            stroke: currentColor;
            stroke-miterlimit: 10;
            stroke-width: 20px;
            stroke-dasharray: 4000;
            stroke-dashoffset: 4000;
            transition: stroke-dashoffset 4s cubic-bezier(0.25, 1, 0.5, 1);
            will-change: stroke-dashoffset;
          }
          .group:hover .mat-path, .hero-active .mat-path {
            stroke-dashoffset: 0;
          }
        `}
      </style>
      <path d={d} className="mat-path" />
    </svg>
  </div>
);

export const AnimatedIsotype = () => (
  <div className="w-full flex justify-center items-center h-full">
    <svg 
      viewBox="0 0 93.92 83.91" 
      className="w-full max-w-[200px] md:max-w-[280px] h-auto overflow-visible"
      style={{ color: 'currentColor' }}
    >
      <style>
        {`
          .iso-path {
            fill: none;
            stroke: currentColor;
            stroke-miterlimit: 10;
            stroke-width: 2.5px;
            stroke-dasharray: 450;
            stroke-dashoffset: 450;
            transition: stroke-dashoffset 4s cubic-bezier(0.25, 1, 0.5, 1); 
            will-change: stroke-dashoffset;
          }
          .group:hover .iso-path, .hero-active .iso-path {
            stroke-dashoffset: 0;
          }
        `}
      </style>
      <ellipse className="iso-path" cx="13.75" cy="18.38" rx="10.75" ry="10.4"/>
      <polyline className="iso-path" points="31.7 48.01 25.49 58.06 15.43 51.84 27.4 32.46 47 44.58 46.88 44.5 71.46 59.69 59.05 79.78 48.98 73.56 55.19 63.52"/>
      <polyline className="iso-path" points="49.14 20.39 55.35 10.35 45.29 4.13 33.32 23.5 52.92 35.62 52.8 35.54 77.38 50.73 89.79 30.63 79.73 24.41 73.52 34.46"/>
    </svg>
  </div>
);

// Exportamos configuraciones
export const gridConfig: Record<string, { span: string; bgIcon: React.ReactNode }> = {
  'Voz': { 
    span: 'md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-5', 
    bgIcon: <AnimatedIcon size="small" d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z" />
  },
  'Tipografia': { 
    span: 'md:col-start-1 md:col-span-4 md:row-start-6 md:row-span-7', 
    bgIcon: <AnimatedIcon d="M560-160v-520H360v-120h520v120H680v520H560Zm-360 0v-320H80v-120h360v120H320v320H200Z" />
  },
  'Logo': { 
    span: 'md:col-start-5 md:col-span-4 md:row-start-1 md:row-span-8', 
    bgIcon: <AnimatedIsotype />
  },
  'Color': { 
    span: 'md:col-start-5 md:col-span-4 md:row-start-9 md:row-span-4', 
    bgIcon: <AnimatedIcon size="small" d="M346-140 100-386q-10-10-15-22t-5-25q0-13 5-25t15-22l230-229-106-106 62-65 400 400q10 10 14.5 22t4.5 25q0 13-4.5 25T686-386L440-140q-10 10-22 15t-25 5q-13 0-25-5t-22-15Zm47-506L179-432h428L393-646Zm399 526q-36 0-61-25.5T706-208q0-27 13.5-51t30.5-47l42-54 44 54q16 23 30 47t14 51q0 37-26 62.5T792-120Z" />
  },
  'Imagenes': { 
    span: 'md:col-start-9 md:col-span-4 md:row-start-1 md:row-span-6', 
    bgIcon: <AnimatedIcon d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z" />
  },
  'Motion': { 
    span: 'md:col-start-9 md:col-span-4 md:row-start-7 md:row-span-6', 
    bgIcon: <AnimatedIcon d="M200-766v572q-17-17-32-36t-28-39v-422q13-20 28-39t32-36Zm160-96v764q-21-7-41-15.5T280-133v-694q19-11 39-19.5t41-15.5Zm280 749v-734q106 47 173 145t67 222q0 124-67 222T640-113ZM480-80q-10 0-20-.5T440-82v-796q10-1 20-1.5t20-.5q20 0 40 2t40 6v784q-20 4-40 6t-40 2Z" />
  }
};

export const themeConfig: Record<string, { base: string; hover: string }> = {
  'Voz': { 
    base: 'bg-[#F2F0EC]/90 text-[#1A1420] border-[#1A1420]/5',
    hover: 'hover:bg-[#751E19] hover:text-[#F2F0EC] hover:border-[#F2F0EC]/10'
  },
  'Tipografia': { 
    base: 'bg-[#1A1420]/90 text-[#F2F0EC] border-[#F2F0EC]/10',
    hover: 'hover:bg-[#F2F0EC] hover:text-[#1A1420] hover:border-[#1A1420]/5'
  },
  'Logo': { 
    base: 'bg-[#751E19]/90 text-[#F2F0EC] border-[#F2F0EC]/10',
    hover: 'hover:bg-[#1A1420] hover:text-[#F2F0EC] hover:border-[#F2F0EC]/10'
  },
  'Color': { 
    base: 'bg-[#F2F0EC]/90 text-[#1A1420] border-[#1A1420]/5',
    hover: 'hover:bg-[#1A1420] hover:text-[#F2F0EC] hover:border-[#F2F0EC]/10'
  },
  'Imagenes': { 
    base: 'bg-[#1A1420]/90 text-[#F2F0EC] border-[#F2F0EC]/10',
    hover: 'hover:bg-[#751E19] hover:text-[#F2F0EC] hover:border-[#F2F0EC]/10'
  },
  'Motion': { 
    base: 'bg-[#751E19]/90 text-[#F2F0EC] border-[#F2F0EC]/10',
    hover: 'hover:bg-[#F2F0EC] hover:text-[#1A1420] hover:border-[#1A1420]/5'
  }
};

const NavigationGrid: React.FC<NavigationGridProps> = ({ items, onNavigate }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <section className="h-screen max-h-screen w-full bg-transparent flex flex-col justify-center items-center px-4 md:px-8 relative overflow-hidden selection:bg-[#751E19] selection:text-white">
      
      {/* Background Atmosphere */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#751E19] to-transparent opacity-[0.08] blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[50%] rounded-full bg-[#1A1420] opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

      {/* Main Container */}
      <div className="max-w-[1600px] w-full h-[90vh] md:h-[90vh] flex flex-col relative z-10 justify-center">
        
        {/* Crystal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-12 gap-4 h-full w-full">
          {items.map((item, index) => {
            const config = gridConfig[item] || { 
              span: 'col-span-4', 
              bgIcon: null 
            };
            const theme = themeConfig[item] || themeConfig['Voz'];
            const isHovered = hoveredItem === item;
            
            return (
              <motion.button
                layoutId={`category-card-${item}`}
                key={item}
                onClick={() => onNavigate(item)}
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05, 
                  ease: "easeOut" 
                }}
                className={`
                  group relative flex flex-col justify-between p-6 md:p-8
                  rounded-sm
                  backdrop-blur-xl
                  shadow-[0_4px_30px_rgba(0,0,0,0.03)]
                  
                  /* Dynamic Theme Classes */
                  ${theme.base}
                  ${theme.hover}
                  border

                  /* Interaction State */
                  hover:scale-[1.01]
                  hover:shadow-xl
                  
                  transition-all duration-500 ease-out
                  overflow-hidden
                  text-left
                  ${config.span}
                  ${/* Fallback for mobile */ 'max-md:row-span-1 max-md:col-span-1 max-md:min-h-[200px]'}
                `}
              >
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                
                {/* 1. Icon Layer - Positioned Absolutely to avoid layout shift */}
                {/* Center the icon in the card */}
                <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none">
                     <motion.div
                       className="w-full h-full flex justify-center items-center opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                       initial={false}
                       animate={isHovered ? {
                         y: -10,
                         scale: item === 'Logo' ? 1.05 : 1.1,
                       } : {
                         y: 0,
                         scale: 1,
                       }}
                       transition={{ type: "spring", stiffness: 300, damping: 20 }}
                     >
                        {config.bgIcon}
                     </motion.div>
                </div>

                {/* 2. Content Layer - Relative on top (z-10/z-20) */}
                {/* Top Row: Meta Info */}
                <div className="flex justify-between items-start w-full relative z-10">
                  <span className={`font-mono text-[9px] font-bold border border-current rounded-full w-6 h-6 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity`}>
                      {index + 1}
                  </span>
                </div>

                {/* Bottom: Title - Ensure it sits at bottom and on top of icon */}
                <div className="relative z-20 mt-auto pt-4 w-full">
                    <motion.h3 
                      layoutId={`category-title-${item}`}
                      className="font-thrift text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.85] tracking-tighter transition-transform duration-500 group-hover:translate-x-2 origin-bottom-left mix-blend-difference md:mix-blend-normal"
                    >
                      {item}
                    </motion.h3>
                </div>

              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NavigationGrid;