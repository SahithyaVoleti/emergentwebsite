import { getPlatformsFeaturedTechNames } from "../../../lib/serviceTechStackSlugs";
import TechStackRibbonSection from "../../ubuntu/TechStackRibbonSection";

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
 * Homepage technology band — auto-scrolling ribbon of brand logos with full names.
 */
export default function UbuntuHomeTechStack() {
  const featured = getPlatformsFeaturedTechNames();
  const names = featured.length >= 10 ? featured : FALLBACK_TECH;

  return (
    <TechStackRibbonSection
      id="tech-stack"
      testId="home-tech-stack"
      eyebrow="Technology stack"
      title="The stack behind our |AI delivery|"
      lead="Models, frameworks, data systems, and cloud platforms we use to build and operate enterprise AI and the services we offer."
      techNames={names}
    />
  );
}
