import { Link } from "react-router-dom";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function NotFoundPage() {
  return (
    <SitePageMain>
      <section className="ubuntu-section-block border-b border-[#d9d9d9] bg-white">
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-start justify-center py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
            Not found
          </p>
          <h1 className="ubuntu-section-title text-[#2d2d2d]">Page not found</h1>
          <p className="ubuntu-lead mt-4 max-w-xl text-[#2d2d2d]">
            The page you requested is not available. Use the links below to continue browsing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="ubuntu-btn-primary">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium text-[#5c5c5c] hover:underline">
              Services
            </Link>
            <Link to="/solutions" className="text-sm font-medium text-[#5c5c5c] hover:underline">
              Platforms
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
