import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup, useScroll, useTransform } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';
import Hero from './components/Hero';
import NavigationGrid, { gridConfig, themeConfig } from './components/NavigationGrid';
import LogoSystem, { BrandLogo } from './components/LogoSystem';
import ColorPalette from './components/ColorPalette';
import Typography from './components/Typography';
import Mockups from './components/Mockups';
import VoiceAndTone from './components/VoiceAndTone';

/* ─── Scroll-reactive hero icon ─── */
const HeroIcon = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]   // 0 when hero top hits viewport top, 1 when hero bottom leaves viewport top
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <div ref={ref} className="absolute inset-y-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center overflow-hidden pointer-events-none">
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full h-full flex items-center justify-center p-12 md:p-20 [&_svg]:!max-w-none [&_svg]:w-full [&_svg]:max-h-[70vh] [&_svg]:!opacity-100"
      >
        {children}
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when a category is open
  useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeSection]);

  // Reset overlay scroll to top when opening a category
  useEffect(() => {
    if (activeSection && overlayRef.current) {
      overlayRef.current.scrollTop = 0;
    }
  }, [activeSection]);

  const navItems = ['Voz', 'Logo', 'Tipografia', 'Color', 'Imagenes', 'Motion'];

  const handleNavClick = (item: string) => {
    setActiveSection(item);
    setMenuOpen(false);
  };

  const goToHome = () => {
    setActiveSection(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToGrid = () => {
    setActiveSection(null);
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

  const MenuButton = ({ onClick }: { onClick: () => void }) => (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 hover:opacity-70 transition-opacity"
    >
      <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em]">Menu</span>
      <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">
        <div className="w-1 h-1 bg-current rounded-full group-hover:scale-[4] transition-transform duration-300" />
      </div>
    </button>
  );

  // Theme for active category
  const activeTheme = activeSection ? (themeConfig[activeSection] || themeConfig['Voz']) : null;
  const solidBaseClass = activeTheme ? activeTheme.base.replace('/90', '') : '';

  return (
    <LayoutGroup>
      <div className="bg-[#1A1420] min-h-screen w-full relative selection:bg-[#751E19] selection:text-white">

        {/* ═══════════════════════════════════════════════════════════
            INDEX VIEW – Always mounted, scroll preserved naturally
           ═══════════════════════════════════════════════════════════ */}
        <div className="relative">
          <header className="absolute top-0 left-0 w-full z-40 px-6 md:px-12 py-8 flex justify-between items-start text-[#F2F0EC]">
            <button onClick={goToHome} className="w-24 md:w-32 hover:opacity-80 transition-opacity">
              <BrandLogo color="#F2F0EC" />
            </button>
            <MenuButton onClick={() => setMenuOpen(true)} />
          </header>

          <div className="relative z-0">
            <Hero />
          </div>

          <div className="relative z-10 bg-[#F2F0EC]/95 backdrop-blur-md min-h-screen">
            <NavigationGrid items={navItems} onNavigate={handleNavClick} />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════
            CATEGORY OVERLAY – Card morphs via layoutId, NO FADE
           ═══════════════════════════════════════════════════════════ */}
        <AnimatePresence>
          {activeSection && (() => {
            const config = gridConfig[activeSection] || { span: '', bgIcon: null };
            const len = activeSection.length;
            let fontSizeClass = "";
            if (len >= 10) fontSizeClass = "text-[9vw] md:text-[9rem] lg:text-[11rem]";
            else if (len >= 7) fontSizeClass = "text-[11vw] md:text-[11rem] lg:text-[13rem]";
            else if (len >= 5) fontSizeClass = "text-[14vw] md:text-[13rem] lg:text-[15rem]";
            else fontSizeClass = "text-[22vw] md:text-[16rem] lg:text-[19rem]";

            return (
              <motion.div
                key="category-overlay"
                ref={overlayRef}
                className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden ${solidBaseClass}`}
              >
                {/* Fixed header – always on top */}
                <div className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-6 flex justify-between items-center">
                  <button
                    onClick={backToGrid}
                    className="flex items-center gap-3 hover:opacity-70 transition-opacity group"
                  >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em]">Indice</span>
                  </button>
                  <MenuButton onClick={() => setMenuOpen(true)} />
                </div>

                {/* Hero card – morphs from grid via layoutId */}
                <motion.div
                  layoutId={`category-card-${activeSection}`}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className={`
                    w-full h-screen relative flex flex-col justify-center items-start overflow-hidden
                    ${solidBaseClass}
                    hero-active px-6 md:px-12 lg:px-24
                  `}
                >
                  <div className="absolute inset-0 opacity-[0.03] noise-overlay" />

                  {/* Background icon – subtle, reacts to scroll */}
                  <HeroIcon>{config.bgIcon}</HeroIcon>

                  {/* Title */}
                  <div className="relative z-10 text-left pointer-events-none mt-20 max-w-full md:max-w-[60%]">
                    <motion.h1
                      layoutId={`category-title-${activeSection}`}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className={`font-thrift ${fontSizeClass} uppercase leading-[0.8] tracking-tighter origin-bottom-left`}
                    >
                      {activeSection}
                    </motion.h1>

                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 120, opacity: 0.5 }}
                      transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                      className="mt-8 md:mt-12 h-px bg-current origin-left ml-2 md:ml-4"
                    />
                  </div>
                </motion.div>

                {/* Content section */}
                <div className="relative bg-[#F2F0EC] min-h-[50vh] z-10">
                  {renderActiveSection()}
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════════════════════
            MENU OVERLAY
           ═══════════════════════════════════════════════════════════ */}
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
    </LayoutGroup>
  );
};

export default App;