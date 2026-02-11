
import React from 'react';

const MindShift: React.FC = () => {
  return (
    <div className="pt-48 pb-32 px-8 md:px-12 max-w-[1800px] mx-auto min-h-screen">
      <div className="mb-56 border-b border-black/5 pb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
           <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] mb-8 text-black tracking-tighter uppercase italic animate-reveal">
             MIND<span className="text-indigo-500 not-italic">SHIFT</span>
           </h1>
           <span className="text-indigo-500 font-bold uppercase tracking-[0.5em] text-xs px-6 py-2 border border-indigo-100 rounded-full bg-indigo-50/30 animate-reveal delay-100">
             Evolution v1.02
           </span>
        </div>
        <p className="text-3xl md:text-5xl text-black/40 max-w-5xl font-medium leading-tight tracking-tight animate-reveal delay-200">
          We accelerate cognitive performance by integrating IDEN-driven neural feedback with elite behavioral coaching.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mb-56 items-center">
         <div className="space-y-32">
            <div className="group animate-reveal delay-300">
               <span className="text-black/20 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Program 01 / The Alpha Cycle</span>
               <h3 className="text-5xl font-black mb-10 text-black leading-none group-hover:text-indigo-600 transition-colors">ELITE FOUNDER <br/> COACHING</h3>
               <p className="text-black/50 text-xl leading-relaxed mb-12 font-medium">
                  A 12-week high-intensity transformation for high-stakes executives. Using IDEN telemetry to map your cognitive peaks and eliminate decision-making friction.
               </p>
               <button className="text-[10px] font-bold uppercase tracking-[0.3em] bg-black text-white px-12 py-5 rounded-full hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
                  Request Access
               </button>
            </div>
            <div className="group animate-reveal delay-300">
               <span className="text-black/20 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Program 02 / Flow Integrity</span>
               <h3 className="text-5xl font-black mb-10 text-black leading-none group-hover:text-indigo-600 transition-colors">SUSTAINED <br/> EXCELLENCE</h3>
               <p className="text-black/50 text-xl leading-relaxed mb-12 font-medium">
                  Continuous integration cycles that monitor neural load in real-time, providing immediate cognitive "shifts" to maintain peak performance during crunch.
               </p>
            </div>
         </div>
         <div className="branx-card rounded-[4.5rem] overflow-hidden h-full min-h-[750px] animate-reveal delay-300">
            <img src="https://picsum.photos/seed/mind-evolution/1000/1500" className="w-full h-full object-cover reveal-img" alt="MindShift Evolution" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
         </div>
      </div>
    </div>
  );
};

export default MindShift;
