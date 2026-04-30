import React from 'react';
import { motion } from 'framer-motion';

const Motion: React.FC = () => {
  return (
    <section id="motion" className="pt-0 pb-40 bg-[#F2F0EC] px-8 md:px-20">
      <div className="max-w-5xl mx-auto pt-20">
        <div className="space-y-16">

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">PRINCIPIO</div>
            <div className="w-full md:w-2/3">
              <p className="font-thrift text-3xl leading-tight text-[#1A1420]">
                El movimiento debe sentirse como un ritual: <span className="italic text-[#751E19]">deliberado, intenso, inevitable</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 border border-[#1A1420]/10 bg-white"
            >
              <h4 className="font-thrift text-xs tracking-[0.3em] mb-6 text-[#751E19] uppercase">01 — Entrada</h4>
              <div className="w-full h-32 bg-[#1A1420] flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ y: [80, 0, 80] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 bg-[#751E19] rotate-45"
                />
              </div>
              <p className="font-tradition text-sm mt-6 text-[#1A1420]/70">
                Los elementos aparecen desde abajo con un ease cúbico. Sin rebote, sin suavidad excesiva.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 border border-[#1A1420]/10 bg-white"
            >
              <h4 className="font-thrift text-xs tracking-[0.3em] mb-6 text-[#751E19] uppercase">02 — Transición</h4>
              <div className="w-full h-32 bg-[#1A1420] flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ scale: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 border-2 border-[#F2F0EC] rotate-45"
                />
              </div>
              <p className="font-tradition text-sm mt-6 text-[#1A1420]/70">
                Las transiciones entre secciones son un morph, nunca un fade. El contenido se transforma.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-10 border border-[#1A1420]/10 bg-white"
            >
              <h4 className="font-thrift text-xs tracking-[0.3em] mb-6 text-[#751E19] uppercase">03 — Pulso</h4>
              <div className="w-full h-32 bg-[#1A1420] flex items-center justify-center overflow-hidden">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-px bg-[#751E19]"
                />
              </div>
              <p className="font-tradition text-sm mt-6 text-[#1A1420]/70">
                El ritmo es lento y teatral. Nada se mueve rápido. Cada animación respira.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">DURACIONES</div>
            <div className="w-full md:w-2/3 bg-[#1A1420] p-12 shadow-2xl text-[#F2F0EC]">
              <div className="space-y-6 font-mono text-sm">
                <div className="flex justify-between items-center border-b border-[#F2F0EC]/10 pb-4">
                  <span>Micro-interacción</span>
                  <span className="text-[#751E19]">150ms</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F2F0EC]/10 pb-4">
                  <span>Hover / Click</span>
                  <span className="text-[#751E19]">300ms</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#F2F0EC]/10 pb-4">
                  <span>Transición de página</span>
                  <span className="text-[#751E19]">500ms</span>
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span>Aparición de sección</span>
                  <span className="text-[#751E19]">800ms</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">EASING</div>
            <div className="w-full md:w-2/3">
              <p className="font-thrift text-2xl leading-relaxed text-[#1A1420]">
                Siempre <span className="font-bold bg-[#751E19] text-white px-2">cubic-bezier</span>. Nunca linear. <br/>
                El easing es el carácter: <span className="italic">decidido al inicio, suave al final</span>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Motion;
