import { Link } from "react-router-dom";
import SiteNavLink from "../components/ubuntu/SiteNavLink";
import SitePageMain from "../components/ubuntu/SitePageMain";

export default function NotFoundPage() {
  return (
    <SitePageMain>
      <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#8b1538]">404</p>
        <h1 className="ubuntu-section-title mt-2">Page not found</h1>
        <p className="mt-3 max-w-md text-sm text-[#555]">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="ubuntu-btn-primary border-0 px-5 py-2.5 text-sm">
            Back to home
          </Link>
          <SiteNavLink
            href="/#page-contact"
            primary
            showArrow={false}
            className="ubuntu-btn-secondary px-5 py-2.5 text-sm"
          >
            Contact us
          </SiteNavLink>
        </div>
      </div>
    </SitePageMain>
  );
}
