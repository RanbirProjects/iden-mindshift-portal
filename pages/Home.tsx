import React, { useEffect, useState } from "react";
import { generateSitemapAndResearch } from "../services/geminiService";
import { Page } from "../types";

interface HomeProps {
  onPageChange: (page: Page) => void;
}

interface ResearchData {
  researchSummary: string;
  sitemap: {
    title: string;
    description: string;
  }[];
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const [research, setResearch] = useState<ResearchData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const data = await generateSitemapAndResearch();
        setResearch(data);
      } catch (error) {
        console.error("Failed to fetch research:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="px-8 md:px-12 py-32 md:py-64 max-w-[1800px] mx-auto">
        <div className="max-w-7xl">
          <div className="flex items-center gap-4 mb-12 opacity-30">
            <div className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">
              The New Human Paradigm
            </span>
          </div>

          <h1 className="text-[clamp(3.5rem,10.5vw,11rem)] font-black leading-[0.8] mb-16 tracking-tighter text-black uppercase">
            <div className="overflow-hidden">
              <span className="block">Orchestrating</span>
            </div>
            <div className="overflow-hidden">
              <span className="block">
                The <span className="text-indigo-500 italic">Sentient</span>
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block">
                Era<span className="text-black/10">.</span>
              </span>
            </div>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-end">
            <p className="text-2xl md:text-3xl text-black/40 max-w-xl font-medium leading-tight">
              Integrating the IDEN Engine's neural infrastructure with
              MindShift's cognitive evolution programs to define the next era
              of human-machine synergy.
            </p>

            <div className="flex flex-col md:items-end gap-12">
              <div className="flex flex-wrap gap-4 md:justify-end">
                {["Research", "Infrastructure", "Evolution"].map((tag) => (
                  <span
                    key={tag}
                    className="px-6 py-2.5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-black/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="px-8 md:px-12 py-40 max-w-[1800px] mx-auto border-t border-black/5">
        <div className="flex justify-between items-baseline mb-32">
          <h2 className="text-5xl font-black uppercase italic">
            The Ecosystem<span className="text-indigo-500">.</span>
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/20">
            Selected Works 2025
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* IDEN Card */}
          <div
            onClick={() => onPageChange(Page.IDEN_ENGINE)}
            className="md:col-span-8 group cursor-pointer branx-card rounded-[3.5rem] p-16 min-h-[750px] flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] bg-black text-white px-8 py-3 rounded-full">
                Phase 01
              </span>
            </div>

            <div className="mt-auto">
              <h2 className="text-7xl md:text-[9rem] font-black mb-10">
                IDEN ENGINE
              </h2>
              <p className="text-black/40 text-2xl max-w-lg">
                Constructing the neural backbone of modern data flow for
                high-stakes intent.
              </p>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <div
              onClick={() => onPageChange(Page.MINDSHIFT)}
              className="group cursor-pointer branx-card rounded-[3.5rem] p-12 flex-grow"
            >
              <h3 className="text-5xl font-black mb-6">
                MIND
                <br />
                SHIFT
              </h3>
              <p className="text-black/40 text-lg">
                Cognitive acceleration protocols for elite leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      {research && (
        <section className="px-8 md:px-12 py-40 max-w-[1800px] mx-auto bg-black text-white rounded-[4rem] mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div>
              <h3 className="text-6xl font-black mb-12 uppercase italic">
                The Strategy Layer
              </h3>
              <p className="text-white/40 text-xl leading-relaxed">
                {research.researchSummary}
              </p>
            </div>

            <div className="space-y-12">
              {research.sitemap?.map((node, index) => (
                <div key={index} className="border-b border-white/10 pb-8">
                  <h4 className="text-2xl font-black uppercase">
                    {node.title}
                  </h4>
                  <p className="text-white/40 text-sm">
                    {node.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
