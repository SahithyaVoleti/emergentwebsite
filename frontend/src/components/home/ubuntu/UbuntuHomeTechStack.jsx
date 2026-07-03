import SectionEyebrow from "../../ubuntu/SectionEyebrow";
import SectionTitle from "../../ubuntu/SectionTitle";
import { TechBrandMark } from "../../TechBrandIcon";
import { getPlatformsFeaturedTechNames } from "../../../lib/serviceTechStackSlugs";

/** Curated fallback if the derived featured set is unexpectedly small. */
const FALLBACK_TECH = [
  "GPT-4o",
  "Claude",
  "Gemini",
  "Llama 3",
  "Python",
  "LangChain",
  "TensorFlow",
  "PyTorch",
  "Hugging Face",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Kubernetes",
  "Terraform",
  "React",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "Snowflake",
  "Kafka",
  "Spark",
];

/**
 * Homepage technology band — an auto-scrolling ribbon of the original brand
 * logos we build with across AI development and delivery services.
 * Pauses on hover; the two identical tracks create a seamless loop.
 */
export default function UbuntuHomeTechStack() {
  const featured = getPlatformsFeaturedTechNames();
  const names = featured.length >= 10 ? featured : FALLBACK_TECH;
  const track = [...names, ...names];

  return (
    <section
      id="tech-stack"
      data-testid="home-tech-stack"
      className="ubuntu-section-block ubuntu-tech-ribbon border-y border-[#d9d9d9] bg-white"
      aria-labelledby="tech-stack-heading"
    >
      <div className="ubuntu-container">
        <div className="max-w-3xl">
          <SectionEyebrow>Technology stack</SectionEyebrow>
          <SectionTitle id="tech-stack-heading" title="The stack behind our |AI delivery|" />
          <p className="ubuntu-lead mt-3">
            Models, frameworks, data systems, and cloud platforms we use to build and operate
            enterprise AI and the services we offer.
          </p>
        </div>

        <div
          className="ubuntu-tech-ribbon__viewport mt-8 lg:mt-10"
          role="list"
          aria-label="Technologies we work with"
        >
          <div className="animate-marquee ubuntu-tech-ribbon__track">
            {track.map((name, index) => (
              <TechBrandMark
                key={`${name}-${index}`}
                name={name}
                className="ubuntu-tech-ribbon__item"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
