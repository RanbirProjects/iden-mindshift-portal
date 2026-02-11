
import React, { useEffect, useRef, useState } from 'react';
import { Page } from '../types';

interface FooterProps {
  onPageChange: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const revealClass = isVisible ? 'animate-reveal' : 'opacity-0';
  
  // Standardized hover classes for footer links
  const linkHoverClasses = "transition-all duration-300 hover:text-black/80 hover:underline underline-offset-4 decoration-black/10";

  return (
    <footer ref={footerRef} className="bg-white border-t border-black/5 pt-32 lg:pt-48 pb-12">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12">
        {/* Main Footer Content Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-20 lg:gap-32 mb-32 lg:mb-56 transition-all duration-1000 ${revealClass}`}>
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center gap-3 mb-8 cursor-pointer group"
              onClick={() => onPageChange(Page.HOME)}
            >
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <span className="font-black text-white text-xs">I</span>
              </div>
              <span className="text-xl font-black tracking-tighter uppercase text-black">IDEN.</span>
            </div>
            <p className="text-black/40 text-sm leading-relaxed max-w-xs font-medium">
              Illuminating true human purpose through technology. Creators of the SHARE Protocol and the IDEN Evolutionary Engine.
            </p>
          </div>
          
          <div className="delay-100">
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Engine</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-black/30">
              <li><button onClick={() => onPageChange(Page.IDEN_ENGINE)} className={linkHoverClasses}>Infrastructure</button></li>
              <li><button className={linkHoverClasses}>SHARE Protocol</button></li>
              <li><button className={linkHoverClasses}>Neural Mesh</button></li>
            </ul>
          </div>

          <div className="delay-200">
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Programs</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-black/30">
              <li><button onClick={() => onPageChange(Page.MINDSHIFT)} className={linkHoverClasses}>MindShift Alpha</button></li>
              <li><button className={linkHoverClasses}>Cognitive Coaching</button></li>
              <li><button className={linkHoverClasses}>Deep Flow Cycles</button></li>
            </ul>
          </div>

          <div className="delay-300">
            <h4 className="text-black font-bold mb-8 uppercase tracking-[0.2em] text-[10px]">Resources</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-black/30">
              <li><button onClick={() => onPageChange(Page.BLOG)} className={linkHoverClasses}>Blog & Insights</button></li>
              <li><button className={linkHoverClasses}>Documentation</button></li>
              <li><button className={linkHoverClasses}>Media Kit</button></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Bottom Navigation */}
        <div className={`border-t border-black/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-10 transition-all duration-1000 delay-500 ${revealClass}`}>
          <p className="text-black/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2025 IDEN Engine. Vision by Madhuri V.
          </p>
          <div className="flex gap-8">
            <a href="#" className={`text-black/20 ${linkHoverClasses}`}>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">LinkedIn</span>
            </a>
            <a href="#" className={`text-black/20 ${linkHoverClasses}`}>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">X.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
