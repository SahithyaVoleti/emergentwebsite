import "@/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "@/pages/HomePage";
import ServiceDetail from "@/pages/ServiceDetail";
import SolutionsPage from "@/pages/SolutionsPage";
import SolutionDetail from "@/pages/SolutionDetail";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import IndustriesPage from "@/pages/IndustriesPage";
import IndustryDetail from "@/pages/IndustryDetail";
import AboutPage from "@/pages/AboutPage";
import TeamPage from "@/pages/TeamPage";
import TestimonialsPage from "@/pages/TestimonialsPage";
import PartnersPage from "@/pages/PartnersPage";
import SecurityPage from "@/pages/SecurityPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "@/pages/TermsAndConditionsPage";
import LegalTemplatesPage from "@/pages/LegalTemplatesPage";
import BlogPage from "@/pages/BlogPage";
import BlogDetail from "@/pages/BlogDetail";
import CareersPage from "@/pages/CareersPage";
import UbuntuPageShell from "@/components/ubuntu/UbuntuPageShell";

function PublicLayout({ children }) {
  return <UbuntuPageShell>{children}</UbuntuPageShell>;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BrowserRouter>
        <ScrollToTop />
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
