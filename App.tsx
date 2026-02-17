import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react'; 
import Hero from './components/Hero';
import NavigationGrid, { gridConfig, themeConfig } from './components/NavigationGrid';
import LogoSystem, { BrandLogo } from './components/LogoSystem';
import ColorPalette from './components/ColorPalette';
import Typography from './components/Typography';
import Mockups from './components/Mockups';
import VoiceAndTone from './components/VoiceAndTone';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Index');
  const [scrollTarget, setScrollTarget] = useState<'top' | 'grid' | 'restore'>('top');
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeSection !== 'Index') {
        // We don't force scroll to top here for the fixed view, it starts at 0 naturally
    } else {
        // Handle scroll behavior when returning to Index
        if (scrollTarget === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (scrollTarget === 'restore') {
            window.scrollTo({ top: lastScrollY, behavior: 'instant' });
        }
    }
  }, [activeSection, scrollTarget, lastScrollY]);

  const navItems = ['Voz', 'Logo', 'Tipografia', 'Color', 'Imagenes', 'Motion'];

  const handleNavClick = (item: string) => {
    setLastScrollY(window.scrollY);
    setActiveSection(item);
    setMenuOpen(false);
  };

  const goToHome = () => {
    setScrollTarget('top');
    setActiveSection('Index');
    setMenuOpen(false);
  };

  const backToGrid = () => {
    setScrollTarget('restore');
    setActiveSection('Index');
    setMenuOpen(false);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'Voz': return <VoiceAndTone />;
      case 'Logo': return <LogoSystem />;
      case 'Tipografia': return <Typography />;
      case 'Color': return <ColorPalette />;
      case 'Imagenes': return <Mockups />;
      case 'Motion': return <LogoSystem />;
      default: return null;
    }
  };

  const MenuButton = ({ onClick, colorClass }: { onClick: () => void, colorClass?: string }) => (
    <button 
      onClick={onClick} 
      className={`group flex items-center gap-3 hover:opacity-70 transition-opacity ${colorClass}`}
    >
      <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em]">Menu</span>
      <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-current rounded-full group-hover:scale-[4] transition-transform duration-300" />
      </div>
    </button>
  );

  return (
    <div className="bg-[#1A1420] min-h-screen w-full relative selection:bg-[#751E19] selection:text-white">
      
      {/* Removed mode="wait" to allow morphing between existing index and entering fixed overlay */}
      <AnimatePresence>
        {activeSection === 'Index' ? (
          <motion.div
            key="index-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }} // Removed scale/blur for cleaner exit
            onAnimationComplete={() => {
                if (scrollTarget === 'grid' && gridRef.current) {
                    gridRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }}
            className="relative"
          >
            <header className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-start text-[#F2F0EC]">
              <button onClick={goToHome} className="w-24 md:w-32 hover:opacity-80 transition-opacity">
                <BrandLogo color="#F2F0EC" />
              </button>
              <MenuButton onClick={() => setMenuOpen(true)} />
            </header>

            <div className="relative z-0">
                <Hero />
            </div>

            <div ref={gridRef} className="relative z-10 bg-[#F2F0EC]/95 backdrop-blur-xl min-h-screen">
                <NavigationGrid items={navItems} onNavigate={handleNavClick} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="category-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            // Use fixed positioning to cover the screen immediately without layout jump from scroll
            className="fixed inset-0 z-50 bg-[#F2F0EC] overflow-y-auto overflow-x-hidden"
          >
            <motion.header 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none mix-blend-difference text-[#F2F0EC]"
            >
                <button 
                    onClick={backToGrid}
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity group pointer-events-auto"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em]">Indice</span>
                </button>

                <div className="pointer-events-auto">
                   <MenuButton onClick={() => setMenuOpen(true)} />
                </div>
            </motion.header>

            {(() => {
                const config = gridConfig[activeSection] || { span: '', bgIcon: null };
                const theme = themeConfig[activeSection] || themeConfig['Voz'];
                
                // Ensure solid background for clean transition (remove transparency)
                const solidBaseClass = theme.base.replace('/90', '');
                
                // Cálculo dinámico del tamaño de fuente
                const len = activeSection.length;
                let fontSizeClass = "";
                if (len >= 10) fontSizeClass = "text-[9vw] md:text-[9rem] lg:text-[11rem]";
                else if (len >= 7) fontSizeClass = "text-[11vw] md:text-[11rem] lg:text-[13rem]";
                else if (len >= 5) fontSizeClass = "text-[14vw] md:text-[13rem] lg:text-[15rem]";
                else fontSizeClass = "text-[22vw] md:text-[16rem] lg:text-[19rem]";

                return (
                    <motion.div
                        layoutId={`category-card-${activeSection}`}
                        initial={{ borderRadius: "20px" }}
                        animate={{ borderRadius: "0px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className={`
                             w-full h-screen relative flex flex-col justify-center items-start overflow-hidden
                             ${solidBaseClass} border-b border-[#1A1420]/5
                             hero-active px-6 md:px-12 lg:px-24
                        `}
                    >
                        {/* Remove texture in hero during transition for cleanliness, or keep it subtle */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                        
                        {/* Icono */}
                        <div className="absolute inset-y-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden pointer-events-none">
                            <motion.div 
                                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="w-full h-full flex items-center justify-center p-12 md:p-20 [&_svg]:!max-w-none [&_svg]:w-full [&_svg]:max-h-[70vh] opacity-80"
                            >
                                {config.bgIcon}
                            </motion.div>
                        </div>

                        {/* Título */}
                        <div className="relative z-10 text-left pointer-events-none mt-20 max-w-full md:max-w-[60%]">
                            <motion.h1 
                                layoutId={`category-title-${activeSection}`}
                                className={`font-thrift ${fontSizeClass} uppercase leading-[0.8] tracking-tighter mix-blend-difference md:mix-blend-normal origin-bottom-left`}
                            >
                                {activeSection}
                            </motion.h1>
                            
                            <motion.div 
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 120, opacity: 0.5 }}
                                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                                className="mt-8 md:mt-12 h-px bg-current origin-left ml-2 md:ml-4"
                            />
                        </div>
                    </motion.div>
                );
            })()}

            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-[#F2F0EC] min-h-[50vh] z-10"
            >
                {renderActiveSection()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#751E19] flex items-center justify-center"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-[#F2F0EC] hover:rotate-90 transition-transform duration-500 interactive p-4"
            >
              <X size={40} />
            </button>
            
            <nav className="flex flex-col items-center gap-6">
              <motion.button
                onClick={goToHome}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-mono text-sm uppercase tracking-widest text-[#F2F0EC]/60 hover:text-white mb-8"
              >
                  — Inicio —
              </motion.button>

              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`font-tradition text-5xl md:text-8xl transition-colors interactive cursor-pointer ${activeSection === item ? 'text-[#1A1420]' : 'text-[#F2F0EC] hover:text-[#1A1420]'}`}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;