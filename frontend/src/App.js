import { lazy, Suspense } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import RouteFallback from "@/components/RouteFallback";
import SiteSEO from "@/components/SiteSEO";
import HomePage from "@/pages/HomePage";
import UbuntuPageShell from "@/components/ubuntu/UbuntuPageShell";

const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceRoute = lazy(() => import("@/pages/ServiceRoute"));
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
const ResearchInnovationPage = lazy(() => import("@/pages/ResearchInnovationPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function PublicLayout({ children }) {
  return <UbuntuPageShell>{children}</UbuntuPageShell>;
}

function LazyPage({ children }) {
  return <Suspense fallback={<RouteFallback />}>{children}</Suspense>;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <BrowserRouter>
        <ScrollToTop />
        <SiteSEO />
        <Routes>
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route
            path="/services"
            element={
              <PublicLayout>
                <LazyPage>
                  <ServicesPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <PublicLayout>
                <LazyPage>
                  <ServiceRoute />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/solutions"
            element={
              <PublicLayout>
                <LazyPage>
                  <SolutionsPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/solutions/:slug"
            element={
              <PublicLayout>
                <LazyPage>
                  <SolutionDetail />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/case-studies"
            element={
              <PublicLayout>
                <LazyPage>
                  <CaseStudiesPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/case-studies/:slug"
            element={
              <PublicLayout>
                <LazyPage>
                  <CaseStudyDetail />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/industries"
            element={
              <PublicLayout>
                <LazyPage>
                  <IndustriesPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/industries/:slug"
            element={
              <PublicLayout>
                <LazyPage>
                  <IndustryDetail />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PublicLayout>
                <LazyPage>
                  <AboutPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/team"
            element={
              <PublicLayout>
                <LazyPage>
                  <TeamPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/testimonials"
            element={
              <PublicLayout>
                <LazyPage>
                  <TestimonialsPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/partners"
            element={
              <PublicLayout>
                <LazyPage>
                  <PartnersPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/security"
            element={
              <PublicLayout>
                <LazyPage>
                  <SecurityPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PublicLayout>
                <LazyPage>
                  <PrivacyPolicyPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <PublicLayout>
                <LazyPage>
                  <TermsAndConditionsPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/legal-templates"
            element={
              <PublicLayout>
                <LazyPage>
                  <LegalTemplatesPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <PublicLayout>
                <LazyPage>
                  <BlogPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PublicLayout>
                <LazyPage>
                  <BlogDetail />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/careers"
            element={
              <PublicLayout>
                <LazyPage>
                  <CareersPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="/research-innovation"
            element={
              <PublicLayout>
                <LazyPage>
                  <ResearchInnovationPage />
                </LazyPage>
              </PublicLayout>
            }
          />
          <Route
            path="*"
            element={
              <PublicLayout>
                <LazyPage>
                  <NotFoundPage />
                </LazyPage>
              </PublicLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
