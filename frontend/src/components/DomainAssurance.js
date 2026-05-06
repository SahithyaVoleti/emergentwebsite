import React from 'react';
import { ShieldCheck, Target, Repeat, BarChart, FileCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const DomainAssurance = () => {
  const pillars = [
    { icon: Target, label: "Defined", desc: "KPI Gates" },
    { icon: ShieldCheck, label: "Governed", desc: "Compliance" },
    { icon: Repeat, label: "Iterative", desc: "Agile Rollout" },
    { icon: BarChart, label: "Measured", desc: "Real-time ROI" },
    { icon: FileCheck, label: "Documented", desc: "Full Handover" },
  ];

  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <AnimatedSection>
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-y-8 gap-x-12">
            <div className="max-w-xs text-center lg:text-left">
              <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2">Assurance</p>
              <h3 className="text-xl font-black text-[#0B1B3D] tracking-tighter uppercase leading-none">Strategic Delivery Commitments</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {pillars.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 group">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300 shadow-sm">
                    <p.icon size={18} className="text-[#0B1B3D] group-hover:text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0B1B3D] mb-0.5">{p.label}</p>
                    <p className="text-[8px] font-bold uppercase tracking-tight text-slate-400">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DomainAssurance;
