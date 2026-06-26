import { useParams, Link } from "react-router-dom";
import SitePageMain from "../components/ubuntu/SitePageMain";
import services from "../data/services";
import { getPillarById } from "../data/servicePillars";
import ServiceDetail from "./ServiceDetail";
import ServicePillarPage from "./ServicePillarPage";

export default function ServiceRoute() {
  const { slug } = useParams();
  const pillar = getPillarById(slug);

  if (pillar) {
    return <ServicePillarPage pillar={pillar} />;
  }

  const service = services.find((item) => item.slug === slug);
  if (service) {
    return <ServiceDetail service={service} />;
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
