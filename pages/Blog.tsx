
import React, { useState, useMemo } from 'react';
import { BlogArticle } from '../types';

const ARTICLES: BlogArticle[] = [
  {
    id: '1',
    title: 'THE NEURAL MESH REVOLUTION',
    excerpt: 'An investigative look into the contextual algorithms powering the next generation of sentient infrastructure.',
    date: 'March 15, 2025',
    author: 'Dr. Elena Vance',
    imageUrl: 'https://picsum.photos/seed/art-neural/1400/900',
    category: 'Technology'
  },
  {
    id: '2',
    title: 'EXECUTIVE FLOW STATE',
    excerpt: 'Mapping the neurochemical signatures of high-performance leadership through IDEN telemetry.',
    date: 'March 10, 2025',
    author: 'Marcus Thorne',
    imageUrl: 'https://picsum.photos/seed/art-flow-light/1400/900',
    category: 'MindShift'
  },
  {
    id: '3',
    title: 'THE SHARE PROTOCOL V2',
    excerpt: 'Privacy is no longer a luxury; it is the fundamental atomic layer of the next iteration of the web.',
    date: 'March 5, 2025',
    author: 'Sarah Chen',
    imageUrl: 'https://picsum.photos/seed/art-privacy/1400/900',
    category: 'Infrastructure'
  },
  {
    id: '4',
    title: 'SCALING INTENTIONALITY',
    excerpt: 'Why raw compute power is secondary to the quality of human intent in the age of AI dominance.',
    date: 'Feb 28, 2025',
    author: 'David Wu',
    imageUrl: 'https://picsum.photos/seed/art-intent-light/1400/900',
    category: 'Ethics'
  },
  {
    id: '5',
    title: 'QUANTUM CONTEXTUALITY',
    excerpt: 'How quantum nodes are enhancing IDEN Engine\'s ability to process non-linear human intent in real-time.',
    date: 'Feb 20, 2025',
    author: 'Dr. Julian Aris',
    imageUrl: 'https://picsum.photos/seed/quantum-nodes/1400/900',
    category: 'Technology'
  },
  {
    id: '6',
    title: 'NEURAL ELASTICITY PROTOCOLS',
    excerpt: 'Breaking through the cognitive ceiling with adaptive feedback loops that reorganize neural pathways for peak clarity.',
    date: 'Feb 15, 2025',
    author: 'Aria Sterling',
    imageUrl: 'https://picsum.photos/seed/neural-elastic/1400/900',
    category: 'MindShift'
  },
  {
    id: '7',
    title: 'THE DISTRIBUTED CORE',
    excerpt: 'Moving beyond localized data centers toward a truly ubiquitous neural mesh that exists everywhere at once.',
    date: 'Feb 10, 2025',
    author: 'Liam Vance',
    imageUrl: 'https://picsum.photos/seed/dist-core/1400/900',
    category: 'Infrastructure'
  },
  {
    id: '8',
    title: 'THE ALGORITHMIC OATH',
    excerpt: 'Defining the strict ethical boundaries of machine intervention in the process of human biological evolution.',
    date: 'Feb 02, 2025',
    author: 'Sofia Mendez',
    imageUrl: 'https://picsum.photos/seed/ethic-oath/1400/900',
    category: 'Ethics'
  }
];

const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = ARTICLES.map(article => article.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'All') return ARTICLES;
    return ARTICLES.filter(article => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-48 pb-40 px-8 md:px-12 max-w-[1800px] mx-auto min-h-screen">
      <div className="max-w-5xl mb-24 animate-reveal">
        <div className="flex items-center gap-4 mb-12 opacity-30">
           <div className="w-12 h-[1px] bg-black"></div>
           <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">The Knowledge Layer</span>
        </div>
        <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-black leading-[0.8] mb-16 tracking-tighter text-black uppercase">
          INSIGHTS & <br/><span className="text-indigo-500 italic">PERSPECTIVES.</span>
        </h1>
        <p className="text-3xl md:text-4xl text-black/40 font-medium leading-tight max-w-3xl tracking-tight">
          Deep dives into the intersection of technology, cognitive science, and human potential.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-24 flex flex-wrap gap-x-12 gap-y-6 border-b border-black/5 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="group relative py-2"
          >
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 ${
              activeCategory === cat ? 'text-black' : 'text-black/30 group-hover:text-black'
            }`}>
              {cat}
            </span>
            <div className={`absolute -bottom-px left-0 h-[2px] bg-black transition-all duration-500 ${
              activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'
            }`}></div>
          </button>
        ))}
      </div>

      {/* Article Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-32 transition-all duration-500">
          {filteredArticles.map((article, idx) => (
            <div key={article.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:mt-48' : ''}`}>
              <div className="group cursor-pointer branx-card rounded-[4rem] p-6 md:p-10 transition-all duration-700 h-full flex flex-col">
                <div className="aspect-[16/11] overflow-hidden rounded-[3rem] mb-10 relative">
                  <img src={article.imageUrl} className="w-full h-full object-cover reveal-img" alt={article.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                <div className="flex items-center justify-between mb-8 px-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-indigo-500">{article.category}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/20">{article.date}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black mb-6 px-2 group-hover:text-indigo-600 transition-all duration-500 text-black leading-[0.9] tracking-tighter uppercase">{article.title}</h2>
                <p className="text-black/50 text-lg leading-relaxed mb-10 px-2 line-clamp-3 font-medium flex-grow">{article.excerpt}</p>
                
                <div className="flex items-center justify-between px-2 pt-8 border-t border-black/5">
                   <div className="flex items-center gap-4 group/author relative">
                      <div className="w-8 h-8 rounded-full bg-black/5 border border-black/10 overflow-hidden flex items-center justify-center transition-colors group-hover/author:border-black/20">
                        <span className="text-[9px] font-bold opacity-30 text-black group-hover/author:opacity-60 transition-opacity">{article.author.charAt(0)}</span>
                      </div>
                      <div className="flex flex-col relative">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/40 group-hover/author:text-black/80 transition-all duration-300">
                          {article.author}
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black/20 transition-all duration-500 group-hover/author:w-full"></div>
                      </div>
                   </div>
                   <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-40 text-center">
          <p className="text-black/20 text-xl font-bold uppercase tracking-widest">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Blog;
