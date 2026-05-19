import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Shield,
  Zap,
  TrendingUp,
  Package,
  Users,
  MessageSquare,
  DollarSign,
  Target,
  BarChart3,
  Bell,
  Search
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import industries from "../data/industries";

const industryDashboardData = {
  Commerce: {
    solutionsLabel: "COMMERCE AI SOLUTIONS",
    heroTitle: "Enterprise Intelligence For Modern Commerce",
    heroDesc: "AI-powered orchestration for pricing, inventory, demand and customer intelligence across complex retail ecosystems.",
    features: [
      { title: "Dynamic Pricing Intelligence", desc: "Maximize margins with real-time market intelligence" },
      { title: "Inventory Optimization", desc: "Balance availability and efficiency across channels" },
      { title: "Personalized Recommendations", desc: "AI-driven personalization that boosts conversion" },
      { title: "Customer Sentiment Analysis", desc: "Understand customer intent and improve experiences" }
    ],
    dashboardTitle: "Commerce Overview",
    metrics: [
      { label: "Total Revenue", val: "$24.8M", change: "+18.6%", trend: "up" },
      { label: "Gross Margin", val: "28.4%", change: "+6.7%", trend: "up" },
      { label: "Inventory Turnover", val: "8.7x", change: "+12.3%", trend: "up" },
      { label: "Fill Rate", val: "96.2%", change: "+4.8%", trend: "up" }
    ],
    categories: [
      { name: "Electronics", val: "$8.2M", percent: 80, change: "↑ 24.1%" },
      { name: "Home & Kitchen", val: "$6.7M", percent: 65, change: "↑ 16.3%" },
      { name: "Fashion", val: "$5.1M", percent: 50, change: "↑ 11.7%" },
      { name: "Beauty", val: "$2.8M", percent: 28, change: "↑ 9.4%" }
    ],
    recommendations: [
      { text: "Increase price for Headphones by 7%", impact: "High Impact" },
      { text: "Replenish Smartwatches by 1,240 units", impact: "High Impact" },
      { text: "Run promotion for Jackets category", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "AI Price Opportunity", val: "+$1.42M", desc: "Potential Margin Lift" },
      topRight: { title: "Stockout Risk", val: "12", desc: "SKUs at risk", color: "red" },
      bottomRight: { title: "Forecast Accuracy", val: "94.6%", desc: "8.3% vs last month" }
    },
    footerStats: [
      { label: "Revenue Growth", val: "18.6%", desc: "vs last year" },
      { label: "Gross Margin", val: "28.4%", desc: "6.7% improvement" },
      { label: "Inventory Turnover", val: "8.7x", desc: "12.3% improvement" },
      { label: "Fill Rate", val: "96.2%", desc: "4.8% improvement" }
    ]
  },
  Health: {
    solutionsLabel: "HEALTHCARE AI SOLUTIONS",
    heroTitle: "Clinical Intelligence & Sovereign Care",
    heroDesc: "HIPAA-compliant workflows and computer vision pipelines that optimize diagnostic throughput and reduce documentation tax.",
    features: [
      { title: "Clinical Documentation AI", desc: "Ambient dialogue processing for automated EHR recording" },
      { title: "Diagnostic Decision Support", desc: "Neural assists for radiological and clinical diagnostic workflows" },
      { title: "Patient Triage Automation", desc: "Real-time acuity routing and physiological telemetry mapping" },
      { title: "Population Health Analytics", desc: "Predictive cohort risk modeling and preventative care indexing" }
    ],
    dashboardTitle: "Clinical Operations",
    metrics: [
      { label: "Patient Throughput", val: "1,240/day", change: "+14.2%", trend: "up" },
      { label: "Documentation Time", val: "-42%", change: "-12.5%", trend: "down" },
      { label: "Diagnostic SLA", val: "99.8%", change: "+2.1%", trend: "up" },
      { label: "Sovereignty Compliance", val: "100%", change: "Verified", trend: "up" }
    ],
    categories: [
      { name: "Radiology Triage", val: "4.2 min", percent: 85, change: "↓ 32.1%" },
      { name: "Emergency Intake", val: "8.5 min", percent: 60, change: "↓ 18.4%" },
      { name: "Outpatient EHR", val: "1.8 min", percent: 45, change: "↓ 40.2%" },
      { name: "ICU Alerts", val: "0.2 sec", percent: 95, change: "Instant" }
    ],
    recommendations: [
      { text: "Reallocate 4 staff to Emergency Radiology", impact: "High Impact" },
      { text: "Approve 18 automated billing summaries", impact: "High Impact" },
      { text: "Archive 120 verified patient histories", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "Triage Alert System", val: "0.0s", desc: "Zero telemetry delay" },
      topRight: { title: "Bed Capacity Risk", val: "2", desc: "Beds remaining", color: "red" },
      bottomRight: { title: "Diagnosis Accuracy", val: "99.7%", desc: "Verified via consensus" }
    },
    footerStats: [
      { label: "Throughput Growth", val: "14.2%", desc: "vs last year" },
      { label: "Time Saved", val: "42%", desc: "in charting hourly" },
      { label: "Diagnostic Accuracy", val: "99.7%", desc: "consensus verified" },
      { label: "Compliance Rate", val: "100%", desc: "Sovereign HIPAA" }
    ]
  },
  Finance: {
    solutionsLabel: "FINANCIAL AI SOLUTIONS",
    heroTitle: "Low-Latency Risk & Fraud Intelligence",
    heroDesc: "Milliseconds-scale ML frameworks that run continuous risk telemetry, automated compliance auditing, and high-velocity fraud shielding.",
    features: [
      { title: "Fraud Detection Guard", desc: "Sub-50ms transaction auditing with real-time veto execution" },
      { title: "Algorithmic Risk Profiling", desc: "Dynamic credit mapping and automated ledger risk assessments" },
      { title: "Regulatory Compliance Engine", desc: "Auto-generated audit traces and continuous KYC/AML monitoring" },
      { title: "Document Processing AI", desc: "Extraction and ingestion of heterogeneous financial filings" }
    ],
    dashboardTitle: "Financial Risk",
    metrics: [
      { label: "Transactions Audited", val: "4.2M/day", change: "+32.4%", trend: "up" },
      { label: "Fraud Prevented", val: "$1.84M", change: "+22.1%", trend: "up" },
      { label: "False Positive Rate", val: "0.04%", change: "-68.5%", trend: "down" },
      { label: "KYC Onboarding", val: "1.2s", change: "-85.0%", trend: "down" }
    ],
    categories: [
      { name: "Retail Payments", val: "1.2M txn", percent: 85, change: "↑ 28.1%" },
      { name: "Commercial Lending", val: "$14.2M", percent: 65, change: "↑ 18.3%" },
      { name: "Wealth Accounts", val: "$8.4M", percent: 40, change: "↑ 12.7%" },
      { name: "Cross-Border FX", val: "450k txn", percent: 30, change: "↑ 8.4%" }
    ],
    recommendations: [
      { text: "Block suspected IP cluster in EU-West", impact: "High Impact" },
      { text: "Approve 42 automated credit limits", impact: "High Impact" },
      { text: "Flag 3 abnormal transfers in PropTech", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "Fraud Intercept Speed", val: "18ms", desc: "Mean audit latency" },
      topRight: { title: "Flagged High Risks", val: "0", desc: "Unresolved alerts", color: "green" },
      bottomRight: { title: "Compliance Score", val: "100%", desc: "SEC & FINRA Audited" }
    },
    footerStats: [
      { label: "Txn Volume Growth", val: "32.4%", desc: "vs last year" },
      { label: "Fraud Intercepted", val: "$1.84M", desc: "in real-time blocks" },
      { label: "False Positive Drop", val: "68.5%", desc: "fewer customer blocks" },
      { label: "Audit Readiness", val: "100%", desc: "Forensic tracing" }
    ]
  },
  EdTech: {
    solutionsLabel: "EDTECH AI SOLUTIONS",
    heroTitle: "Adaptive Curriculum & Student Performance",
    heroDesc: "COPPA/FERPA-sovereign adaptive learning pathways and automated assessment tools that multiply instructor bandwidth.",
    features: [
      { title: "Adaptive Learning Engine", desc: "Dynamic pacing and content synthesis tailored to student velocity" },
      { title: "Automated Assessment AI", desc: "Rubric-aligned grading and granular feedback generation" },
      { title: "Curriculum Alignment Pipeline", desc: "Auto-mapping of educational materials to state standards" },
      { title: "Early Warning Analytics", desc: "Predictive indicators that flag cohort comprehension drops" }
    ],
    dashboardTitle: "Academic Telemetry",
    metrics: [
      { label: "Active Students", val: "48,200", change: "+24.5%", trend: "up" },
      { label: "Comprehension Rate", val: "91.8%", change: "+8.4%", trend: "up" },
      { label: "Grading Efficiency", val: "14x", change: "+120%", trend: "up" },
      { label: "Engagement Index", val: "88.2%", change: "+12.3%", trend: "up" }
    ],
    categories: [
      { name: "STEM Subjects", val: "24k active", percent: 80, change: "↑ 31.4%" },
      { name: "Language Arts", val: "12k active", percent: 60, change: "↑ 18.2%" },
      { name: "Social Sciences", val: "8.2k active", percent: 45, change: "↑ 14.1%" },
      { name: "Fine Arts", val: "4.0k active", percent: 25, change: "↑ 8.3%" }
    ],
    recommendations: [
      { text: "Synthesize Geometry remedial module", impact: "High Impact" },
      { text: "Flag 14 students for early algebra support", impact: "High Impact" },
      { text: "Align Biology syllabus to state standards", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "Grading Time Saved", val: "420h", desc: "Weekly instructor hours" },
      topRight: { title: "At-Risk Alert", val: "8", desc: "Students flagged", color: "red" },
      bottomRight: { title: "COPPA Boundary", val: "100%", desc: "Zero external leaks" }
    },
    footerStats: [
      { label: "Comprehension Lift", val: "8.4%", desc: "overall score growth" },
      { label: "Grading Speedup", val: "14x", desc: "with rubric accuracy" },
      { label: "Student Engagement", val: "88.2%", desc: "daily active interaction" },
      { label: "Privacy Compliance", val: "100%", desc: "FERPA & COPPA secure" }
    ]
  },
  Industrial: {
    solutionsLabel: "INDUSTRIAL AI SOLUTIONS",
    heroTitle: "Predictive Edge & Operational Uptime",
    heroDesc: "Edge-deployed sensor fusion and quality-assurance vision models designed to maximize plant yield and secure business continuity.",
    features: [
      { title: "Predictive Maintenance", desc: "Continuous Remaining Useful Life estimations on critical assets" },
      { title: "Visual Defect Detection", desc: "High-speed optical inspection pipelines for millisecond QA" },
      { title: "Dynamic Plant Scheduling", desc: "Constraint-aware real-time optimization of lines and shifts" },
      { title: "Yield & Scrap Minimization", desc: "Root-cause diagnostics that isolate raw material and process drift" }
    ],
    dashboardTitle: "Plant Operations",
    metrics: [
      { label: "Overall Equipment Effectiveness", val: "92.4%", change: "+8.6%", trend: "up" },
      { label: "Unplanned Downtime", val: "1.2%", change: "-84.2%", trend: "down" },
      { label: "Quality Defect Rate", val: "0.08%", change: "-72.1%", trend: "down" },
      { label: "Plant Throughput", val: "18,400/hr", change: "+14.8%", trend: "up" }
    ],
    categories: [
      { name: "Assembly Line A", val: "94.2% OEE", percent: 90, change: "↑ 8.2%" },
      { name: "Fabrication Cell B", val: "91.8% OEE", percent: 80, change: "↑ 6.4%" },
      { name: "Packaging Line C", val: "89.5% OEE", percent: 70, change: "↑ 11.2%" },
      { name: "Quality Triage Cell", val: "99.9% QA", percent: 95, change: "↑ 2.1%" }
    ],
    recommendations: [
      { text: "Lubricate hydraulic spindle B in 4 hrs", impact: "High Impact" },
      { text: "Reject Batch #4012 (density variance)", impact: "High Impact" },
      { text: "Reschedule Line C for scheduled maintenance", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "MTBF Extension", val: "+240%", desc: "Mean Time Between Failures" },
      topRight: { title: "Vibration Alert", val: "1", desc: "Critical spindle risk", color: "red" },
      bottomRight: { title: "Scrap Reduction", val: "42%", desc: "Material waste saved" }
    },
    footerStats: [
      { label: "OEE Performance", val: "92.4%", desc: "plant-wide average" },
      { label: "Downtime Prevented", val: "84.2%", desc: "unplanned halts saved" },
      { label: "Defect Elimination", val: "72.1%", desc: "fewer optical failures" },
      { label: "Yield Increase", val: "14.8%", desc: "operational throughput" }
    ]
  },
  Sports: {
    solutionsLabel: "SPORTS & MEDIA AI SOLUTIONS",
    heroTitle: "Fan Engagement & High-Velocity Telemetry",
    heroDesc: "Real-time computer vision indexing of live play-telemetry and audience affinity models that deliver highly personalized spectator loops.",
    features: [
      { title: "High-Velocity Play Indexing", desc: "Automated event extraction and technical coordinate logging" },
      { title: "Real-time Fan Personalization", desc: "Intent-aware highlights and dynamic metric distribution" },
      { title: "Biomechanical Injury Guard", desc: "Real-time load mapping and injury risk identification" },
      { title: "Media Production Assist", desc: "Autonomous camera tracking and automated clip package editing" }
    ],
    dashboardTitle: "Broadcasting Analytics",
    metrics: [
      { label: "Live Viewership", val: "842,000", change: "+42.6%", trend: "up" },
      { label: "Engagement Duration", val: "48.2 min", change: "+28.4%", trend: "up" },
      { label: "Highlight Generation", val: "< 1.5s", change: "Real-time", trend: "up" },
      { label: "Biomechanical Safety", val: "98.4%", change: "Optimal", trend: "up" }
    ],
    categories: [
      { name: "Live Stats Feed", val: "520k active", percent: 85, change: "↑ 48.2%" },
      { name: "Interactive Highlights", val: "310k active", percent: 65, change: "↑ 32.4%" },
      { name: "Fantasy Synced Views", val: "180k active", percent: 45, change: "↑ 22.1%" },
      { name: "Merchandise Offers", val: "45k active", percent: 20, change: "↑ 14.8%" }
    ],
    recommendations: [
      { text: "Serve high-impact dunk highlight to feed", impact: "High Impact" },
      { text: "Flag knee-flexure stress for Player #23", impact: "High Impact" },
      { text: "Trigger dynamic sponsor asset for commercial", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "Ad Engagement", val: "2.4x", desc: "Contextual conversion rate" },
      topRight: { title: "Latency Risk", val: "80ms", desc: "Telemetry stream delay", color: "green" },
      bottomRight: { title: "Fan Satisfaction", val: "94.8%", desc: "Sentiment rating" }
    },
    footerStats: [
      { label: "Viewership Surge", val: "42.6%", desc: "vs seasonal average" },
      { label: "Fan Session Duration", val: "28.4%", desc: "longer session retention" },
      { label: "Clip Assembly", val: "1.5s", desc: "automated highlights" },
      { label: "Player Availability", val: "98.4%", desc: "optimal physical load" }
    ]
  },
  PropTech: {
    solutionsLabel: "PROPTECH AI SOLUTIONS",
    heroTitle: "Hyper-Local Valuation & Transaction Intelligence",
    heroDesc: "Multi-layered real estate valuation indices and intent-aware conversion graphs that optimize asset management portfolios.",
    features: [
      { title: "Hyper-Local Valuation", desc: "Micro-market valuation mapping with sub-3% margin accuracy" },
      { title: "Buyer Intent Profiling", desc: "Acuity indexing of lead profiles based on cross-channel indicators" },
      { title: "Autonomous Document Auditing", desc: "NLP contracts auditing and automated KYC lease onboarding" },
      { title: "Dynamic Space Management", desc: "AI optimization of foot-traffic data and floor plan metrics" }
    ],
    dashboardTitle: "Portfolio Steering",
    metrics: [
      { label: "Valuation Accuracy", val: "97.4%", change: "+4.2%", trend: "up" },
      { label: "Lead Qualification", val: "3.2x", change: "+220%", trend: "up" },
      { label: "Transaction Velocity", val: "4.8 days", change: "-62.4%", trend: "down" },
      { label: "Space Yield Lift", val: "+16.8%", change: "+8.4%", trend: "up" }
    ],
    categories: [
      { name: "Residential Valuation", val: "840 units", percent: 80, change: "↑ 18.2%" },
      { name: "Commercial Ingestion", val: "$42.5M", percent: 60, change: "↑ 12.4%" },
      { name: "Contract Auditing", val: "1,240 lease", percent: 50, change: "↑ 24.6%" },
      { name: "Dynamic Layouts", val: "45 build", percent: 30, change: "↑ 9.2%" }
    ],
    recommendations: [
      { text: "Update price index for Sector 14 property", impact: "High Impact" },
      { text: "Flag 18 high-intent commercial buyers", impact: "High Impact" },
      { text: "Review rent variance clause on Lease #401", impact: "Medium Impact" }
    ],
    floatBadges: {
      left: { title: "Asset Yield Gain", val: "+$840k", desc: "Commercial margin optimization" },
      topRight: { title: "Audits Pending", val: "3", desc: "Requires human verification", color: "red" },
      bottomRight: { title: "Underwrite Speed", val: "1.2hr", desc: "Mean approval velocity" }
    },
    footerStats: [
      { label: "Valuation Accuracy", val: "97.4%", desc: "within median sales" },
      { label: "Lead Quality Lift", val: "3.2x", desc: "high conversion intent" },
      { label: "Close Speedup", val: "62.4%", desc: "fewer document friction days" },
      { label: "Space Yield Increase", val: "16.8%", desc: "overall asset utility boost" }
    ]
  }
};

const featureIcons = [TrendingUp, Package, Users, MessageSquare];
const footerIcons = [DollarSign, BarChart3, Package, Target];

export default function Industries({ showLabel = true }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeIndustry = industries[activeTab];
  const activeTitle = activeIndustry.title;
  const currentData = industryDashboardData[activeTitle] || industryDashboardData.Commerce;

  return (
    <section
      id="industries"
      data-testid="industries-section"
      className="arc-section relative overflow-hidden bg-[#F8FAFC] py-10 lg:py-12 border-y border-slate-100"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 corp-pat-dots opacity-40 pointer-events-none" />
      
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* Header Section: Compact and Left-Aligned to Remove White Space */}
        <AnimatedSection>
          <div className="flex flex-col items-start mb-6 border-b border-slate-100 pb-4">
            {showLabel && (
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 mb-2">
                <span className="text-[9px] font-black text-blue-700 uppercase tracking-widest">Industry Programs</span>
              </div>
            )}
            <h2
              data-testid="industries-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1B3D] tracking-tight leading-tight uppercase mb-2"
            >
              Industry programs with <span className="text-blue-600">governed delivery</span>
            </h2>
            <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-500 font-medium">
              Solutions are shaped to sector controls, data handling requirements, and KPIs your leadership team can review.
            </p>
          </div>
        </AnimatedSection>

        {/* Premium Scrollable Tab System */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex flex-nowrap md:justify-center gap-2 p-1 w-max md:w-full md:flex-wrap">
            {industries.map((ind, i) => {
              const TabIcon = ind.icon;
              const isSelected = activeTab === i;
              const tabLabel = ind.title === "Health" ? "Healthcare" : ind.title;

              return (
                <button
                  key={ind.slug}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTab(i)}
                  className={`relative rounded-xl border px-5 py-3 text-[10px] sm:text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? "border-[#0B1B3D] text-white shadow-lg shadow-[#0B1B3D]/10"
                      : "border-slate-200 bg-white text-slate-500 hover:text-[#0B1B3D] hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#0B1B3D] rounded-xl z-0"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <TabIcon size={14} className="relative z-10 shrink-0" />
                  <span className="relative z-10">{tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Industry Dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column: Context and Capability List */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 block">
                {currentData.solutionsLabel}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B1B3D] leading-tight mb-4 uppercase">
                {currentData.heroTitle}
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                {currentData.heroDesc}
              </p>

              {/* Vertical Feature Checklist */}
              <div className="flex flex-col gap-4 mb-6">
                {currentData.features.map((feature, fIndex) => {
                  const FeatureIcon = featureIcons[fIndex] || Check;
                  return (
                    <div key={fIndex} className="flex items-start gap-3 group">
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm border border-blue-100/50">
                        <FeatureIcon size={14} strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-black text-[#0B1B3D] group-hover:text-blue-600 transition-colors">
                          {feature.title}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium mt-0.5 leading-normal">
                          {feature.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Buttons */}
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-[#0B1B3D] text-white px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#0B1B3D]/10 transition-all hover:bg-blue-600 hover:-translate-y-0.5"
                >
                  Request Consultation
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={`/industries/${activeIndustry.slug}`}
                  className="inline-flex items-center justify-center border border-slate-200 bg-white text-slate-600 hover:text-[#0B1B3D] hover:border-slate-300 px-6 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm transition-all hover:-translate-y-0.5"
                >
                  View Solutions Architecture
                </Link>
              </div>
            </div>

            {/* Right Column: Live-rendered SaaS Dashboard Mockup */}
            <div className="lg:col-span-7 relative pt-4 pb-4">
              
              {/* Left Pop-out Badge */}
              <div className="absolute left-[-30px] top-[40%] bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xl z-20 flex flex-col gap-1 w-44 hover:-translate-y-1.5 transition-transform duration-300 hidden xl:flex">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">{currentData.floatBadges.left.title}</span>
                <span className="text-base font-black text-emerald-500 leading-none">{currentData.floatBadges.left.val}</span>
                <span className="text-[8px] font-bold text-slate-500">{currentData.floatBadges.left.desc}</span>
                <div className="w-full h-8 mt-1">
                  <svg className="w-full h-full text-blue-500" viewBox="0 0 100 30" fill="none">
                    <path d="M0 25 C 20 20, 40 5, 60 15 S 80 0, 100 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Right Top Pop-out Badge */}
              <div className="absolute right-[-20px] top-[15%] bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xl z-20 flex flex-col gap-1 w-36 hover:-translate-y-1.5 transition-transform duration-300 hidden xl:flex">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">{currentData.floatBadges.topRight.title}</span>
                <span className={`text-base font-black leading-none ${currentData.floatBadges.topRight.color === 'red' ? 'text-rose-500' : 'text-emerald-500'}`}>{currentData.floatBadges.topRight.val}</span>
                <span className="text-[8px] font-bold text-slate-500">{currentData.floatBadges.topRight.desc}</span>
                <div className="w-full h-8 mt-1">
                  <svg className={`w-full h-full ${currentData.floatBadges.topRight.color === 'red' ? 'text-rose-500' : 'text-emerald-500'}`} viewBox="0 0 100 30" fill="none">
                    <path d="M0 10 C 20 15, 40 5, 60 25 S 80 20, 100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Right Bottom Pop-out Badge */}
              <div className="absolute right-[-30px] bottom-[15%] bg-white p-3.5 rounded-2xl border border-slate-100 shadow-2xl z-20 flex flex-col gap-1 w-40 hover:-translate-y-1.5 transition-transform duration-300 hidden xl:flex">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-wider">{currentData.floatBadges.bottomRight.title}</span>
                <span className="text-base font-black text-blue-600 leading-none">{currentData.floatBadges.bottomRight.val}</span>
                <span className="text-[8px] font-bold text-slate-500">{currentData.floatBadges.bottomRight.desc}</span>
                <div className="w-full h-8 mt-1">
                  <svg className="w-full h-full text-blue-500" viewBox="0 0 100 30" fill="none">
                    <path d="M0 20 C 20 10, 40 25, 60 10 S 80 5, 100 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Interactive Dashboard Container */}
              <div className="relative rounded-3xl bg-white border border-slate-200/80 shadow-2xl p-4 sm:p-6 transition-all duration-500 hover:shadow-blue-500/10 hover:border-blue-200/50 flex gap-4 overflow-hidden select-none">
                
                {/* Dashboard Sidebar */}
                <div className="hidden sm:flex flex-col items-center gap-6 bg-[#0B1B3D] text-slate-400 py-6 px-3 rounded-2xl shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs shadow-md">
                    E
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 text-white shadow-inner"><TrendingUp size={15} /></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"><BarChart3 size={15} /></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"><Package size={15} /></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"><Users size={15} /></div>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"><MessageSquare size={15} /></div>
                  </div>
                  <div className="mt-auto w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
                    <Activity size={15} />
                  </div>
                </div>

                {/* Dashboard Main Panel */}
                <div className="flex-1 min-w-0">
                  
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <h4 className="text-xs sm:text-sm font-black text-[#0B1B3D] uppercase tracking-wide">
                      {currentData.dashboardTitle}
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 cursor-pointer transition-colors"><Search size={14} /></div>
                      <div className="p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 cursor-pointer transition-colors"><Bell size={14} /></div>
                      <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 text-blue-700 flex items-center justify-center text-[9px] font-black shadow-inner">
                        AD
                      </div>
                    </div>
                  </div>

                  {/* 4 KPIs grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {currentData.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-50/80 rounded-xl p-2.5 border border-slate-100 flex flex-col gap-0.5">
                        <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-wider truncate">{m.label}</span>
                        <div className="flex items-baseline justify-between gap-1 mt-0.5">
                          <span className="text-xs sm:text-sm font-black text-[#0B1B3D] tracking-tight">{m.val}</span>
                          <span className={`text-[8px] font-black ${m.trend === 'down' ? 'text-rose-500' : 'text-emerald-500'}`}>{m.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Splits: Trends, Performers, Forecast, and AI Recommendations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Left Inner Column */}
                    <div className="flex flex-col gap-4">
                      {/* Trend Graph */}
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex flex-col h-24 relative">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-wider">Trend Analysis</span>
                          <span className="text-[7px] bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-400 font-black uppercase tracking-wider">This Year</span>
                        </div>
                        <div className="w-full flex-1 relative mt-1">
                          <svg className="w-full h-full text-blue-500" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id={`gradient-trend-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="10" x2="100" y2="10" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            <line x1="0" y1="20" x2="100" y2="20" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            
                            <path d="M 0 35 Q 20 20, 40 10 T 80 25 T 100 8 L 100 40 L 0 40 Z" fill={`url(#gradient-trend-${activeTab})`} />
                            <path d="M 0 35 Q 20 20, 40 10 T 80 25 T 100 8" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            
                            <circle cx="100" cy="8" r="2.5" fill="rgb(59, 130, 246)" />
                          </svg>
                        </div>
                      </div>

                      {/* Top Performers */}
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3">
                        <span className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-wider block mb-2">Category Performance</span>
                        <div className="flex flex-col gap-2">
                          {currentData.categories.map((c, idx) => (
                            <div key={idx} className="flex flex-col gap-0.5">
                              <div className="flex items-center justify-between text-[8px] font-bold">
                                <span className="text-slate-500 font-black uppercase tracking-wider">{c.name}</span>
                                <span className="text-[#0B1B3D]">{c.val} <span className="text-emerald-500 ml-0.5">{c.change}</span></span>
                              </div>
                              <div className="w-full h-1 bg-slate-200/80 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 rounded-full" style={{ width: `${c.percent}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Inner Column */}
                    <div className="flex flex-col gap-4">
                      {/* Forecast Graph */}
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex flex-col h-24 relative">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-wider">Demand Forecast</span>
                          <span className="text-[7px] bg-white border border-slate-200 rounded px-1.5 py-0.5 text-slate-400 font-black uppercase tracking-wider">Next 30d</span>
                        </div>
                        <div className="w-full flex-1 relative mt-1">
                          <svg className="w-full h-full text-blue-500" viewBox="0 0 100 40" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id={`gradient-forecast-${activeTab}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.12" />
                                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            <line x1="0" y1="10" x2="100" y2="10" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            <line x1="0" y1="20" x2="100" y2="20" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            <line x1="0" y1="30" x2="100" y2="30" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="2,2" />
                            
                            <path d="M 0 32 Q 25 15, 50 25" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M 50 25 Q 75 10, 100 5" stroke="rgb(59, 130, 246)" strokeWidth="2" strokeDasharray="3,3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                            <path d="M 50 25 Q 75 10, 100 5 L 100 40 L 50 40 Z" fill={`url(#gradient-forecast-${activeTab})`} />
                            <circle cx="50" cy="25" r="2.5" fill="rgb(59, 130, 246)" />
                          </svg>
                        </div>
                      </div>

                      {/* AI Recommendations */}
                      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex-1 flex flex-col">
                        <span className="text-[9px] font-black text-[#0B1B3D] uppercase tracking-wider block mb-2">AI Recommendation Actions</span>
                        <div className="flex flex-col gap-2 flex-1 justify-center">
                          {currentData.recommendations.map((r, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-xl p-2 flex items-center justify-between text-[8px] shadow-sm">
                              <span className="text-slate-600 font-bold truncate pr-1">{r.text}</span>
                              <span className={`px-2 py-0.5 rounded-full font-black text-[7px] shrink-0 uppercase tracking-widest ${
                                r.impact === 'High Impact' 
                                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                                  : 'bg-amber-50 text-amber-600 border border-amber-100'
                              }`}>
                                {r.impact}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Horizontal Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-200/60 mt-8 max-w-6xl mx-auto">
          {currentData.footerStats.map((stat, sIndex) => {
            const StatIcon = footerIcons[sIndex] || DollarSign;
            return (
              <div key={sIndex} className="flex items-center gap-3">
                <div className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full bg-blue-50 text-blue-600 shadow-inner border border-blue-100/50">
                  <StatIcon size={16} strokeWidth={2} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg sm:text-xl font-black text-[#0B1B3D] tracking-tighter leading-none">
                    {stat.val}
                  </span>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-wider mt-1 leading-none">
                    {stat.label}
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold mt-0.5 leading-none">
                    {stat.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
