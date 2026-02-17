
import React from 'react';
import { Martini, Star } from 'lucide-react';

const ModernCocktail: React.FC<{ name: string; price: string; tags: string[]; image: string }> = ({ name, price, tags, image }) => (
  <div className="group cursor-pointer">
    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1420] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      <div className="absolute top-6 left-6 flex gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 glass rounded-full text-[9px] font-bold uppercase tracking-widest text-[#1A1420] bg-white/70 backdrop-blur-sm">{tag}</span>
        ))}
      </div>
      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-tradition text-3xl text-white uppercase tracking-tighter mb-1">{name}</h4>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} className="fill-[#751E19] text-[#751E19]" />)}
            </div>
          </div>
          <span className="font-tradition text-2xl text-white">{price}€</span>
        </div>
      </div>
    </div>
  </div>
);

const MenuUI: React.FC = () => {
  return (
    <div className="space-y-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <ModernCocktail 
          name="Juicio Paris" 
          price="16" 
          tags={['Cítrico', 'Potente']}
          image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
        />
        <ModernCocktail 
          name="Olimpo Sour" 
          price="14" 
          tags={['Sedoso', 'Herbal']}
          image="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800"
        />
        <ModernCocktail 
          name="Troya Mule" 
          price="15" 
          tags={['Refrescante']}
          image="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-px bg-slate-100 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
        <div className="bg-white p-12 md:p-20 flex flex-col justify-center">
          <span className="text-[#751E19] text-[10px] font-black tracking-[0.6em] uppercase mb-8">Interacción Digital</span>
          <h3 className="font-tradition text-5xl text-[#1A1420] uppercase leading-none mb-8 tracking-tighter">EL RITO DE <br/> LA RESERVA</h3>
          <p className="text-slate-500 font-light leading-relaxed mb-12">
            La web de Helena no es informativa, es performática. Las reservas se gestionan a través de una interfaz de "conversación minimalista" que guía al usuario hacia la noche perfecta.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="h-16 px-10 bg-[#1A1420] text-white font-tradition text-xs tracking-[0.3em] uppercase hover:bg-[#751E19] transition-colors rounded-full">
              RESERVAR MESA
            </button>
            <button className="h-16 px-10 border border-[#1A1420]/10 text-[#1A1420] font-tradition text-xs tracking-[0.3em] uppercase hover:border-[#751E19] hover:text-[#751E19] transition-all rounded-full">
              VER CARTA COMPLETA
            </button>
          </div>
        </div>
        <div className="bg-[#1A1420] p-20 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
           <div className="relative z-10 w-full aspect-square border border-white/10 rounded-full flex items-center justify-center animate-spin-slow">
              <div className="w-4/5 aspect-square border border-white/5 rounded-full flex items-center justify-center">
                 <Martini size={80} className="text-[#751E19]" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MenuUI;
