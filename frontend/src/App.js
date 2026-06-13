import { lazy, Suspense } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import UbuntuPageShell from "@/components/ubuntu/UbuntuPageShell";
import RouteMeta from "@/components/RouteMeta";

const HomePage = lazy(() => import("@/pages/HomePage"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const SolutionsPage = lazy(() => import("@/pages/SolutionsPage"));
const SolutionDetail = lazy(() => import("@/pages/SolutionDetail"));
const CaseStudiesPage = lazy(() => import("@/pages/CaseStudiesPage"));
const CaseStudyDetail = lazy(() => import("@/pages/CaseStudyDetail"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const IndustryDetail = lazy(() => import("@/pages/IndustryDetail"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const TeamPage = lazy(() => import("@/pages/TeamPage"));
const TestimonialsPage = lazy(() => import("@/pages/TestimonialsPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage"));
const SecurityPage = lazy(() => import("@/pages/SecurityPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsAndConditionsPage = lazy(() => import("@/pages/TermsAndConditionsPage"));
const LegalTemplatesPage = lazy(() => import("@/pages/LegalTemplatesPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogDetail = lazy(() => import("@/pages/BlogDetail"));
const CareersPage = lazy(() => import("@/pages/CareersPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PublicLayout({ children }) {
  return <UbuntuPageShell>{children}</UbuntuPageShell>;
}

function RouteFallback() {
  return <div className="min-h-[40vh]" aria-hidden="true" />;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BrowserRouter>
        <ScrollToTop />
        <RouteMeta />
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
            <Route path="/services" element={<Navigate to="/#services-grid" replace />} />
            <Route path="/services/:slug" element={<PublicLayout><ServiceDetail /></PublicLayout>} />
            <Route path="/solutions" element={<PublicLayout><SolutionsPage /></PublicLayout>} />
            <Route path="/solutions/:slug" element={<PublicLayout><SolutionDetail /></PublicLayout>} />
            <Route path="/case-studies" element={<PublicLayout><CaseStudiesPage /></PublicLayout>} />
            <Route path="/case-studies/:slug" element={<PublicLayout><CaseStudyDetail /></PublicLayout>} />
            <Route path="/industries" element={<PublicLayout><IndustriesPage /></PublicLayout>} />
            <Route path="/industries/:slug" element={<PublicLayout><IndustryDetail /></PublicLayout>} />
            <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
            <Route path="/team" element={<PublicLayout><TeamPage /></PublicLayout>} />
            <Route path="/testimonials" element={<PublicLayout><TestimonialsPage /></PublicLayout>} />
            <Route path="/partners" element={<PublicLayout><PartnersPage /></PublicLayout>} />
            <Route path="/security" element={<PublicLayout><SecurityPage /></PublicLayout>} />
            <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicyPage /></PublicLayout>} />
            <Route path="/terms-and-conditions" element={<PublicLayout><TermsAndConditionsPage /></PublicLayout>} />
            <Route path="/legal-templates" element={<PublicLayout><LegalTemplatesPage /></PublicLayout>} />
            <Route path="/blog" element={<PublicLayout><BlogPage /></PublicLayout>} />
            <Route path="/blog/:slug" element={<PublicLayout><BlogDetail /></PublicLayout>} />
            <Route path="/careers" element={<PublicLayout><CareersPage /></PublicLayout>} />
            <Route path="*" element={<PublicLayout><NotFoundPage /></PublicLayout>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
