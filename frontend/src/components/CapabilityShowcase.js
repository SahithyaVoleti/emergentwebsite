import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Target, 
  BarChart3, 
  Search, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Layers,
  Code2,
  Database,
  Eye
} from 'lucide-react';
import { StaggerChildren, StaggerItem } from './AnimatedSection';

const ICON_MAP = {
  "forecasting": TrendingUp,
  "pricing": BarChart3,
  "recommendations": Zap,
  "inventory": Layers,
  "search": Search,
  "sentiment": MessageSquare,
  "documentation": Code2,
  "diagnostic": Brain,
  "triage": Target,
  "image": Eye,
  "operational": ShieldCheck,
  "analytics": BarChart3,
  "fraud": ShieldCheck,
  "risk": Target,
  "compliance": ShieldCheck,
  "trading": TrendingUp,
  "intelligence": Brain,
  "processing": Database,
  "learning": Brain,
  "assessment": Target,
  "content": MessageSquare,
  "accessibility": Eye,
  "automation": Zap,
  "maintenance": ShieldCheck,
  "inspection": Eye,
  "scheduling": Target,
  "safety": ShieldCheck,
  "engagement": MessageSquare,
  "modeling": Brain,
  "gaming": Zap,
  "valuation": BarChart3,
  "prediction": TrendingUp,
  "lead": Target,
  "tours": Eye
};

const resolveIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  for (const [key, icon] of Object.entries(ICON_MAP)) {
    if (lowerTitle.includes(key)) return icon;
  }
  return Brain;
};

const CapabilityShowcase = ({ capabilities, title, description }) => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-slate-50/50 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0B1B3D] tracking-tighter mb-6 uppercase">
              {title}
            </h2>
            <div className="h-1 w-20 bg-blue-600 mb-6" />
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {description}
            </p>
          </motion.div>
        </div>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((cap, i) => {
            const Icon = resolveIcon(cap.title);
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group h-full bg-white border border-slate-100 p-8 rounded-2xl hover:shadow-2xl hover:shadow-blue-500/5 hover:border-blue-500/20 transition-all duration-500 relative flex flex-col justify-between overflow-hidden"
                >
                  {/* Card Background Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/0 group-hover:bg-blue-500/5 rounded-bl-[100px] transition-colors duration-500" />
                  
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon size={24} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    
                    <h3 className="text-lg font-black text-[#0B1B3D] tracking-tighter mb-4 uppercase group-hover:text-blue-600 transition-colors">
                      {cap.title}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-slate-100 group-hover:bg-blue-200 transition-all duration-500" />
                    <span className="text-[9px] font-black text-slate-300 group-hover:text-blue-600 uppercase tracking-widest transition-colors">Strategic</span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default CapabilityShowcase;
