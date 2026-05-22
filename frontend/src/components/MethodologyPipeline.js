import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Hash } from 'lucide-react';

const MethodologyPipeline = ({ steps }) => {
  return (
    <div className="w-full px-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop View: Industrial Node Flow */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex-1 group"
              >
                {/* System Node Card */}
                <div className="relative flex aspect-square flex-col items-center justify-center border border-[#d9d9d9] bg-white p-8 text-center shadow-sm transition-all duration-500 group-hover:border-[#8b1538] group-hover:shadow-md">
                  <div className="absolute top-2 left-2 h-3 w-3 border-l-2 border-t-2 border-[#e5e5e5] transition-colors group-hover:border-[#8b1538]" />
                  <div className="absolute top-2 right-2 h-3 w-3 border-r-2 border-t-2 border-[#e5e5e5] transition-colors group-hover:border-[#8b1538]" />
                  <div className="absolute bottom-2 left-2 h-3 w-3 border-b-2 border-l-2 border-[#e5e5e5] transition-colors group-hover:border-[#8b1538]" />
                  <div className="absolute bottom-2 right-2 h-3 w-3 border-b-2 border-r-2 border-[#e5e5e5] transition-colors group-hover:border-[#8b1538]" />

                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111] px-3 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white">
                    PHASE_{String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xs font-semibold uppercase leading-snug tracking-wide text-[#111]">
                    {step.step || step.label || step.title}
                  </h3>

                  {/* Status Indicator */}
                  <div className="flex items-center gap-2 mt-4">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#8b1538]" />
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Ready</span>
                  </div>
                </div>
              </motion.div>

              {/* Data Cable Connection (Except Last) */}
              {i < steps.length - 1 && (
                <div className="flex flex-col items-center justify-center w-8 shrink-0">
                  <div className="w-full h-[3px] bg-slate-100 relative overflow-hidden rounded-full">
                    <motion.div 
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                      className="absolute inset-0 w-2/3 bg-[#8b1538] shadow-[0_0_8px_rgba(139, 21, 56,0.5)]"
                    />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View: Vertical System Log */}
        <div className="lg:hidden space-y-4 px-4">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-100 p-6 flex items-center gap-6 relative"
            >
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-200" />
              <div className="flex h-10 w-10 items-center justify-center border border-[#d9d9d9] bg-[#fafafa] text-xs font-semibold text-[#111]">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-[#111]">
                {step.step || step.label || step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MethodologyPipeline;
