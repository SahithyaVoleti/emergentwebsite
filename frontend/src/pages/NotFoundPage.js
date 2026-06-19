import { Link } from "react-router-dom";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function NotFoundPage() {
  return (
    <SitePageMain>
      <section className="ubuntu-section-block border-b border-[#d9d9d9] bg-white">
        <div className="ubuntu-container flex min-h-[50vh] flex-col items-start justify-center py-16">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#5c677d]">
            Not found
          </p>
          <h1 className="ubuntu-section-title text-[#002855]">Page not found</h1>
          <p className="ubuntu-lead mt-4 max-w-xl text-[#33415c]">
            The page you requested is not available. Use the links below to continue browsing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/" className="ubuntu-btn-primary">
              Home
            </Link>
            <Link to="/services" className="text-sm font-medium text-[#0466c8] hover:underline">
              Services
            </Link>
            <Link to="/solutions" className="text-sm font-medium text-[#0466c8] hover:underline">
              Platforms
            </Link>
            <Link to="/#page-contact" className="text-sm font-medium text-[#0466c8] hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </SitePageMain>
  );
}
