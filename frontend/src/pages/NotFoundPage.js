import { Link } from "react-router-dom";
import SectionEyebrow from "../components/ubuntu/SectionEyebrow";
import SectionTitle from "../components/ubuntu/SectionTitle";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function NotFoundPage() {
  return (
    <SitePageMain>
      <section className="ubuntu-section-block border-b border-[#d9d9d9] bg-white">
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-start justify-center py-16">
          <SectionEyebrow>Not found</SectionEyebrow>
          <SectionTitle as="h1" title="Page not found" />
          <p className="ubuntu-lead mt-4 max-w-xl">
            The page you requested is not available. Use the links below to continue browsing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="ubuntu-btn-primary">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium text-[#5c5c5c] hover:underline">
              Services
            </Link>
            <Link to="/our-work" className="text-sm font-medium text-[#5c5c5c] hover:underline">
              Our Work
            </Link>
            <Link to="/#page-contact" className="text-sm font-medium text-[#5c5c5c] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </SitePageMain>
  );
}
