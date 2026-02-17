import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="py-52 px-6 md:px-12 lg:px-24 scroll-mt-20 relative overflow-hidden border-b border-slate-50">
      {/* Dynamic Background Title */}
      <div className="absolute top-20 left-0 w-full pointer-events-none select-none overflow-hidden opacity-[0.03]">
        <h2 className="text-[25vw] font-tradition font-black text-[#1A1420] leading-none uppercase -ml-10 whitespace-nowrap">
          {title} {title}
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <header className="mb-40 grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-6 mb-8 reveal">
              <div className="w-12 h-px bg-[#751E19]"></div>
              <span className="text-[#751E19] text-[10px] font-black tracking-[0.6em] uppercase">
                {id.replace('-', ' ')}
              </span>
            </div>
            <h2 className="text-7xl md:text-[10rem] font-tradition text-[#1A1420] uppercase leading-[0.75] tracking-tighter reveal" style={{ transitionDelay: '0.1s' }}>
              {title}
            </h2>
          </div>
          <div className="lg:col-span-4 reveal" style={{ transitionDelay: '0.3s' }}>
            <p className="text-slate-400 text-xl md:text-2xl font-thrift italic font-light leading-relaxed border-l-2 border-[#751E19]/20 pl-10 mb-8">
              {subtitle}
            </p>
          </div>
        </header>
        
        <div className="reveal" style={{ transitionDelay: '0.5s' }}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;