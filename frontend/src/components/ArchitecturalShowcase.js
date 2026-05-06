import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Network, 
  Activity, 
  Database, 
  ShieldAlert,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { StaggerChildren, StaggerItem } from './AnimatedSection';

const ArchitecturalShowcase = ({ capabilities, title, description }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* Header - More Compact */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 border-b border-slate-100 pb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 mb-4">
              <Terminal size={12} className="text-slate-400" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Capabilities Matrix</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-none">
              {title}
            </h2>
          </div>
          <p className="text-[13px] text-slate-500 leading-relaxed font-medium max-w-sm">
            {description}
          </p>
        </div>

        {/* High-Density Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <StaggerItem key={i}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-[#F8FAFC] border border-slate-200 rounded-xl p-6 hover:bg-[#0B1B3D] transition-all duration-500 h-full flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* ID Background Overlay */}
                <div className="absolute top-2 right-4 text-4xl font-black text-slate-100/50 group-hover:text-white/5 transition-colors pointer-events-none">
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div>
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500 shadow-sm">
                    <Activity size={18} className="text-slate-400 group-hover:text-white" />
                  </div>
                  
                  <h3 className="text-sm font-black text-[#0B1B3D] tracking-tight uppercase group-hover:text-white mb-3 transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium group-hover:text-slate-300 transition-colors mb-6">
                    {cap.desc}
                  </p>
                </div>

                {/* Micro-Specs - Compact Row */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 group-hover:border-white/10 transition-colors">
                  <div className="flex gap-3">
                    <div className="flex flex-col">
                      <span className="text-[7px] font-black text-slate-300 group-hover:text-white/30 uppercase tracking-widest">Protocol</span>
                      <span className="text-[9px] font-black text-[#0B1B3D] group-hover:text-white uppercase">VPC-Secure</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[7px] font-black text-slate-300 group-hover:text-white/30 uppercase tracking-widest">Inference</span>
                      <span className="text-[9px] font-black text-[#0B1B3D] group-hover:text-white uppercase">Live-API</span>
                    </div>
                  </div>
                  <motion.div
                    animate={hoveredIndex === i ? { x: 5 } : { x: 0 }}
                    className="text-slate-300 group-hover:text-blue-400"
                  >
                    <ArrowRight size={16} />
                  </motion.div>
                </div>

                {/* Animated Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700 ease-out" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Global System Stats - To fill space efficiently and look "real" */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
           {[
             { label: "Core Availability", val: "99.99%" },
             { label: "Avg Latency", val: "<140ms" },
             { label: "Encryption", val: "AES-256" },
             { label: "Data Mesh", val: "Multi-Cloud" }
           ].map((stat, idx) => (
             <div key={idx} className="flex flex-col items-center md:items-start">
               <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</span>
               <span className="text-sm font-black text-[#0B1B3D] uppercase">{stat.val}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalShowcase;
