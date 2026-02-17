import React from 'react';
import { motion } from 'framer-motion';

// Isotipo: El gráfico de líneas abstractas (SVG oficial)
export const BrandIsotype = ({ className = "w-full h-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 94 84" className={className} xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke={color} strokeWidth="6" strokeMiterlimit="10">
      <ellipse cx="13.75" cy="18.38" rx="10.75" ry="10.4"/>
      <polyline points="31.7 48.01 25.49 58.06 15.43 51.84 27.4 32.46 47 44.58 46.88 44.5 71.46 59.69 59.05 79.78 48.98 73.56 55.19 63.52"/>
      <polyline points="49.14 20.39 55.35 10.35 45.29 4.13 33.32 23.5 52.92 35.62 52.8 35.54 77.38 50.73 89.79 30.63 79.73 24.41 73.52 34.46"/>
    </g>
  </svg>
);

// Logotipo Completo: Isotipo + Texto vectorizado (SVG oficial)
export const BrandLogo = ({ className = "w-full h-auto", color = "currentColor" }) => (
  <svg viewBox="0 0 392.09 127.46" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`.cls-stroke{fill:none;stroke:${color};stroke-width:6px;stroke-miterlimit:10;} .cls-fill{fill:${color};}`}</style>
    </defs>
    
    {/* Capa de Texto (Relleno) */}
    <g transform="translate(-101.45 -356.77)" className="cls-fill">
        {/* ME MATA */}
        <path d="M252.82,466.8v16.77h-2.64V467c0-3.14-1.28-4.95-3.93-4.95-1.9,0-3.66,1.15-5.3,3.4v18.1h-2.64V467c0-3.31-1.24-4.95-3.71-4.95-2,0-3.84,1.15-5.47,3.4v18.1h-2.65V460.22h1.81l.62,2a9,9,0,0,1,6-2.73,6,6,0,0,1,5.34,3.08c2.08-2.07,4.19-3.08,6.4-3.08C250.4,459.52,252.82,462.16,252.82,466.8Z"/>
        <path d="M277.88,471.52h-14v.22c0,3.66.53,6.22,1.54,7.68s2.74,2.25,5.26,2.25a13.12,13.12,0,0,0,5.42-1.19l.84,2.47a19.68,19.68,0,0,1-6.66,1.28c-6.36,0-9.09-3.75-9.09-12.4,0-8.34,2.78-12.27,8.47-12.27,5.52,0,8.25,3.57,8.25,10.77Zm-13.94-2.47h11.21c-.22-4.77-1.86-7-5.52-7C266.14,462,264.33,464.15,263.94,469.05Z"/>
        <path d="M322.05,466.8v16.77H319.4V467c0-3.14-1.28-4.95-3.93-4.95-1.89,0-3.66,1.15-5.29,3.4v18.1h-2.65V467c0-3.31-1.23-4.95-3.71-4.95-2,0-3.84,1.15-5.47,3.4v18.1H295.7V460.22h1.81l.62,2a9,9,0,0,1,6.05-2.73,6,6,0,0,1,5.34,3.08c2.07-2.07,4.19-3.08,6.4-3.08C319.62,459.52,322.05,462.16,322.05,466.8Z"/>
        <path d="M346.31,465.78v17.79h-1.76l-.49-2.83c-1.32,2.16-3.57,3.27-6.7,3.27-4.64,0-7.42-2.39-7.42-6.58,0-4.41,3.18-6.79,9-6.79h4.81v-4.42c0-2.69-1.37-4.06-4.94-4.06a20.07,20.07,0,0,0-6.75,1.37l-.8-2.51a22.2,22.2,0,0,1,7.64-1.46C343.84,459.56,346.31,461.63,346.31,465.78Zm-2.6,9.09v-1.76H338.9c-4.15,0-6.22,1.41-6.22,4.28s1.72,4.1,5.2,4.1C341.55,481.49,343.71,479,343.71,474.87Z"/>
        <path d="M365.81,483.74a15,15,0,0,1-3.31.4c-3.92,0-5.87-2.21-5.87-6.66V462.74h-3.26v-2.52h3.26V453.6h2.65v6.62h6.09v2.52h-6.09v14.47c0,3.22,1.11,4.41,3.62,4.41a9.29,9.29,0,0,0,2.47-.31Z"/>
        <path d="M386.82,465.78v17.79h-1.77l-.48-2.83c-1.33,2.16-3.58,3.27-6.71,3.27-4.64,0-7.42-2.39-7.42-6.58,0-4.41,3.18-6.79,9-6.79h4.81v-4.42c0-2.69-1.37-4.06-4.94-4.06a20.07,20.07,0,0,0-6.75,1.37l-.8-2.51a22.25,22.25,0,0,1,7.64-1.46Q386.83,459.56,386.82,465.78Zm-2.61,9.09v-1.76H379.4c-4.14,0-6.22,1.41-6.22,4.28s1.72,4.1,5.21,4.1C382.05,481.49,384.21,479,384.21,474.87Z"/>
        
        {/* HELENA (Letras Grandes) */}
        <path d="M200.25,439.74V374.53h38.31v5.71H206.77V434h32.6v5.71Zm11.41-35.13V384.8h26.9v5.71H218.18v8.39h19.56v5.71Zm0,24.86v-20.3h26.08v5.71H218.18v8.88h21.19v5.71Z"/>
        <path d="M249.24,439.74V374.53h6.52V434h32.61v5.71Zm11.41-10.27V374.53h6.52v49.23h21.2v5.71Z"/>
        <path d="M297.82,439.74V374.53h38.31v5.71H304.35V434H337v5.71Zm11.42-35.13V384.8h26.89v5.71H315.76v8.39h19.56v5.71Zm0,24.86v-20.3h26.08v5.71H315.76v8.88H337v5.71Z"/>
        <path d="M345.92,439.74V374.53h6.52v65.21Zm54.61-9.21-44.09-56h7.66L394,412.76V374.53h6.52Zm-43.2,9.21V383.42l44.34,56.32H394l-30.16-38.23v38.23Zm48.09,0V374.53H412v65.21Z"/>
        <path d="M418.39,439.74l29.34-65.21h5.95l-29,65.21Zm11.66,0,7.74-17.53h36.35l7.75,17.53h-6.36l-5-11.82h-29l-5.06,11.82Zm9.7-22.09L456,381l16.22,36.68Zm8.55-5.71h15.33l-7.66-18Zm39,27.8-29-65.21h5.95l29.35,65.21Z"/>
    </g>

    {/* Capa de Gráficos (Líneas/Isotipo incluido en el logo) */}
    <g className="cls-stroke" fill="none">
        <ellipse cx="13.75" cy="18.38" rx="10.75" ry="10.4"/>
        <polyline points="31.7 48.01 25.49 58.06 15.43 51.84 27.4 32.46 47 44.58 46.88 44.5 71.46 59.69 59.05 79.78 48.98 73.56 55.19 63.52"/>
        <polyline points="49.14 20.39 55.35 10.35 45.29 4.13 33.32 23.5 52.92 35.62 52.8 35.54 77.38 50.73 89.79 30.63 79.73 24.41 73.52 34.46"/>
    </g>
  </svg>
);

const LogoSystem: React.FC = () => {
  return (
    <section id="identidad" className="bg-[#F2F0EC] text-[#1A1420] pt-0 pb-40 px-8 relative overflow-hidden">
      <div className="max-w-[1800px] mx-auto pt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="space-y-12">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
             <p className="font-thrift text-2xl mt-8 leading-relaxed max-w-lg opacity-80">
               Una identidad basada en trazos crudos y tipografía de alto contraste. El isotipo evoca deconstrucción y elegancia trágica.
             </p>
           </motion.div>

           <div className="grid grid-cols-2 gap-4">
              <div className="p-8 border border-[#1A1420]/10 interactive hover:bg-[#1A1420]/5 transition-colors">
                 <h4 className="font-thrift text-xs tracking-[0.3em] mb-4 text-[#751E19] uppercase">Logotipo</h4>
                 <div className="opacity-50 text-sm font-thrift">Versión vectorial completa</div>
              </div>
              <div className="p-8 border border-[#1A1420]/10 interactive hover:bg-[#1A1420]/5 transition-colors">
                 <h4 className="font-thrift text-xs tracking-[0.3em] mb-4 text-[#751E19] uppercase">Isotipo</h4>
                 <div className="opacity-50 text-sm font-thrift">Elemento gráfico aislado</div>
              </div>
           </div>
        </div>

        <div className="relative aspect-square flex items-center justify-center border border-[#1A1420]/5 bg-[#1A1420]/[0.02]">
           {/* Grid Lines */}
           <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(26,20,32,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(26,20,32,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           
           <motion.div 
             className="w-[85%] relative z-10 flex items-center justify-center"
             initial={{ scale: 0.8, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             transition={{ duration: 1.5, ease: "easeOut" }}
           >
             <BrandLogo color="#1A1420" />
           </motion.div>
           
           <div className="absolute bottom-8 left-8 font-mono text-[10px] text-[#1A1420]/30">
              FIG. 01 — VECTOR LOGO LOCKUP
           </div>
        </div>

      </div>

      <div className="mt-40 border-t border-[#1A1420]/10 pt-20">
         <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col items-center gap-8">
                <span className="text-[#751E19] text-xs font-bold tracking-widest uppercase">Positivo</span>
                <div className="bg-[#F2F0EC] border border-[#1A1420]/5 p-12 w-full flex items-center justify-center aspect-[4/3]">
                    <BrandIsotype color="#1A1420" className="w-24" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <span className="text-[#751E19] text-xs font-bold tracking-widest uppercase">Negativo</span>
                <div className="bg-[#1A1420] p-12 w-full flex items-center justify-center aspect-[4/3]">
                    <BrandIsotype color="#F2F0EC" className="w-24" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-8">
                <span className="text-[#751E19] text-xs font-bold tracking-widest uppercase">Sangre</span>
                <div className="bg-[#F2F0EC] border border-[#1A1420]/5 p-12 w-full flex items-center justify-center aspect-[4/3]">
                    <BrandIsotype color="#751E19" className="w-24" />
                </div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default LogoSystem;