
import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-nav transition-all duration-500">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 h-24 flex items-center justify-between">
        <div 
          className="cursor-pointer group flex items-center gap-3"
          onClick={() => onPageChange(Page.HOME)}
        >
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center overflow-hidden">
            <div className="w-4 h-4 bg-white rounded-full transition-transform duration-500 group-hover:scale-150"></div>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase text-black">
            IDEN<span className="text-indigo-500 italic">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className="group relative py-1"
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all duration-300 ${
                activePage === item.id ? 'text-black' : 'text-black/30 group-hover:text-black'
              }`}>
                {item.label}
              </span>
              <div className={`absolute -bottom-1 left-0 h-[2px] bg-black transition-all duration-500 ${
                activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </button>
          ))}
          <button className="text-[10px] font-bold uppercase tracking-[0.25em] border border-black/10 px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform active:scale-95 ml-4">
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-24 left-0 right-0 p-8 border-b border-black/5 space-y-6 shadow-2xl animate-reveal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left text-2xl font-black uppercase tracking-tighter text-black/40 hover:text-black"
            >
              {item.label}
            </button>
          ))}
          <button className="w-full bg-black text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
