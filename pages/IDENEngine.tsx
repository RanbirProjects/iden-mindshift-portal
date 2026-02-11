
import React from 'react';

const IDENEngine: React.FC = () => {
  return (
    <div className="pt-48 pb-32 px-8 md:px-12 max-w-[1800px] mx-auto min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-56 items-end">
        <div className="flex flex-col">
          <span className="text-indigo-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-12 block animate-reveal">Sentient Core</span>
          <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] mb-16 text-black tracking-tighter animate-reveal delay-100">
            IDEN <br/> ENGINE
          </h1>
          <p className="text-2xl md:text-4xl text-black/40 font-medium leading-tight max-w-xl animate-reveal delay-200">
            A hyper-scale neural grid designed to harmonize global data flows with specific human purpose.
          </p>
        </div>
        <div className="flex flex-col animate-reveal delay-300">
          <div className="branx-card p-16 rounded-[4rem]">
            <h3 className="text-2xl font-black mb-12 italic text-black">Architectural Pillars</h3>
            <ul className="space-y-10">
              {[
                "Neural Mesh Consensus",
                "SHARE Data Sovereignty",
                "Contextual Scalability",
                "Ethical Intent Filtering"
              ].map(item => (
                <li key={item} className="flex items-center gap-8 group border-b border-black/5 pb-6 last:border-0">
                  <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-200 transition-transform group-hover:scale-150"></div>
                  <span className="text-xl font-bold text-black/60 group-hover:text-black group-hover:translate-x-4 transition-all duration-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tech Breakdown */}
      <div className="space-y-16 mb-56">
        {[
          { title: "THE NEURAL LAYER", desc: "Processing 15 million intent nodes per millisecond with zero-latency awareness.", img: "https://picsum.photos/seed/tech1-light/1400/800" },
          { title: "DATA SOVEREIGNTY", desc: "The SHARE Protocol ensures user-owned data remains sovereign while fueling global IQ.", img: "https://picsum.photos/seed/tech2-light/1400/800" }
        ].map((block, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}>
             <div className="lg:w-2/3 branx-card h-[700px] overflow-hidden rounded-[4rem]">
                <img src={block.img} className="w-full h-full object-cover reveal-img" alt="" />
             </div>
             <div className="lg:w-1/3 branx-card p-16 rounded-[4rem] flex flex-col justify-center">
                <span className="text-black/10 font-black text-6xl mb-8">0{i+1}</span>
                <h3 className="text-5xl font-black mb-8 text-black leading-none">{block.title}</h3>
                <p className="text-black/50 leading-relaxed text-xl font-medium">{block.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDENEngine;
