import { Navigate, useParams, Link } from "react-router-dom";
import SitePageMain from "../components/ubuntu/SitePageMain";
import { findSubserviceById } from "../data/serviceCatalog";
import { LEGACY_SERVICE_SLUGS } from "../data/services";
import { getPillarById } from "../data/servicePillars";
import ServicePillarPage from "./ServicePillarPage";
import ServiceSubservicePage from "./ServiceSubservicePage";

export default function ServiceRoute() {
  const { slug } = useParams();
  const legacyTarget = LEGACY_SERVICE_SLUGS[slug];
  if (legacyTarget && legacyTarget !== slug) {
    return <Navigate to={`/services/${legacyTarget}`} replace />;
  }

  const pillar = getPillarById(slug);
  if (pillar) {
    return <ServicePillarPage pillar={pillar} />;
  }

  const subserviceMatch = findSubserviceById(slug);
  if (subserviceMatch) {
    return (
      <ServiceSubservicePage
        pillar={subserviceMatch.pillar}
        subservice={subserviceMatch.subservice}
      />
    );
  }

  return (
    <SitePageMain>
      <div className="ubuntu-container flex min-h-[50vh] flex-col items-center justify-center py-16">
        <h1 className="ubuntu-section-title">Service not found</h1>
        <Link to="/services" className="mt-4 text-[#d1511f] hover:underline">
          Back to services
        </Link>
      </div>
    </SitePageMain>
  );
}
