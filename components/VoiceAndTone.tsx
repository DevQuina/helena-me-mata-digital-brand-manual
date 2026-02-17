import React from 'react';

const VoiceAndTone: React.FC = () => {
  return (
    <section id="voz" className="pt-0 pb-40 bg-[#F2F0EC] px-8 md:px-20">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="space-y-12">
           <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">SITUACIÓN: WEB COPY</div>
              <div className="w-full md:w-2/3 bg-white p-12 shadow-2xl border border-gray-100">
                 <p className="font-tradition text-3xl leading-tight text-[#1A1420]">
                    "No vienes a beber,<br/> vienes a pecar."
                 </p>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">SITUACIÓN: ERROR 404</div>
              <div className="w-full md:w-2/3 bg-[#1A1420] p-12 shadow-2xl text-[#F2F0EC]">
                 <p className="font-thrift text-xl italic opacity-80 mb-4">
                    "Te has perdido en el laberinto."
                 </p>
                 <button className="text-xs font-bold uppercase tracking-[0.3em] border-b border-[#751E19] pb-1 hover:text-[#751E19] transition-colors">Volver al Olimpo</button>
              </div>
           </div>

           <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 text-right font-thrift text-sm text-[#751E19] pt-4">FILOSOFÍA</div>
              <div className="w-full md:w-2/3">
                 <p className="font-thrift text-2xl leading-relaxed text-[#1A1420]">
                    Somos <span className="font-bold bg-[#751E19] text-white px-2">Canallas</span> pero cultos. <br/>
                    Somos <span className="font-bold bg-[#1A1420] text-white px-2">Elegantes</span> pero peligrosos. <br/>
                    Nunca pedimos perdón por ser intensos.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAndTone;