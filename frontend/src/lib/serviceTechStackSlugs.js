import services from "../data/services";

/** Normalize tech label for lookup */
function normKey(name) {
  return String(name)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

/**
 * Tech names from services.js → Simple Icons slugs (jsDelivr simple-icons@12).
 * Unlisted names are omitted from the cloud to avoid broken logos.
 */
const TECH_TO_SLUG = {
  "gpt 4o": "openai",
  "openai gpt 4o": "openai",
  "claude": "anthropic",
  "claude 3 5": "anthropic",
  "anthropic claude": "anthropic",
  "gemini": "google",
  "gemini pro": "google",
  "google gemini": "google",
  "llama 3": "meta",
  mistral: "meta",
  cohere: "google",
  "phi 3": "microsoft",
  python: "python",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  "scikit learn": "scikitlearn",
  xgboost: "python",
  jax: "python",
  mlflow: "mlflow",
  kubeflow: "kubernetes",
  prometheus: "prometheus",
  grafana: "grafana",
  "ci cd pipelines": "githubactions",
  "model versioning": "git",
  aws: "amazon",
  "aws bedrock": "amazon",
  "aws sagemaker": "amazon",
  "aws glue": "amazon",
  "aws amplify": "amazon",
  "aws cloudformation": "amazon",
  azure: "microsoftazure",
  "azure openai": "microsoftazure",
  "azure ml": "microsoftazure",
  "google cloud": "googlecloud",
  "gcp vertex ai": "googlecloud",
  docker: "docker",
  kubernetes: "kubernetes",
  serverless: "amazon",
  langchain: "langchain",
  llamaindex: "huggingface",
  haystack: "python",
  "semantic kernel": "microsoft",
  dspy: "python",
  chromadb: "mongodb",
  chroma: "mongodb",
  pinecone: "mongodb",
  weaviate: "postgresql",
  milvus: "milvus",
  qdrant: "redis",
  redis: "redis",
  "node js": "nodedotjs",
  "express js": "express",
  dotnet: "dotnet",
  java: "openjdk",
  go: "go",
  react: "react",
  angular: "angular",
  "next js": "nextdotjs",
  typescript: "typescript",
  "vue js": "vuedotjs",
  svelte: "svelte",
  postgresql: "postgresql",
  mongodb: "mongodb",
  mysql: "mysql",
  cassandra: "apachecassandra",
  firebase: "firebase",
  "github actions": "githubactions",
  jenkins: "jenkins",
  terraform: "terraform",
  swift: "swift",
  swiftui: "swift",
  xcode: "xcode",
  "core ml": "apple",
  testflight: "apple",
  combine: "swift",
  kotlin: "kotlin",
  "jetpack compose": "android",
  "android studio": "androidstudio",
  "ml kit": "google",
  coroutines: "kotlin",
  room: "android",
  flutter: "flutter",
  "react native": "react",
  dart: "dart",
  expo: "expo",
  capacitor: "capacitor",
  ionic: "ionic",
  supabase: "supabase",
  graphql: "graphql",
  langgraph: "langchain",
  autogen: "microsoft",
  crewai: "openai",
  phidata: "python",
  temporal: "temporal",
  prefect: "prefect",
  "rest apis": "swagger",
  webhooks: "ifttt",
  "sdk toolkits": "python",
  "slack teams bots": "slack",
  "crm connectors": "salesforce",
  gcp: "googlecloud",
  "hugging face": "huggingface",
  deepspeed: "pytorch",
  "lora qlora": "pytorch",
  axolotl: "huggingface",
  vllm: "huggingface",
  tgi: "huggingface",
  triton: "nvidia",
  "gitlab ci cd": "gitlab",
  circleci: "circleci",
  "argo cd": "argo",
  flux: "flux",
  ansible: "ansible",
  pulumi: "pulumi",
  chef: "chef",
  opentofu: "opentofu",
  helm: "helm",
  podman: "podman",
  ecs: "amazon",
  nomad: "hashicorp",
  datadog: "datadog",
  "elk stack": "elastic",
  opentelemetry: "opentelemetry",
  splunk: "splunk",
  "apache airflow": "apacheairflow",
  dbt: "dbt",
  fivetran: "apacheairflow",
  spark: "apachespark",
  kafka: "apachekafka",
  "apache kafka": "apachekafka",
  snowflake: "snowflake",
  bigquery: "googlecloud",
  redshift: "amazon",
  databricks: "databricks",
  "delta lake": "databricks",
  teradata: "teradata",
  "apache flink": "apacheflink",
  "spark streaming": "apachespark",
  kinesis: "amazon",
  confluent: "apachekafka",
  pulsar: "apachepulsar",
  tableau: "tableau",
  "power bi": "powerbi",
  looker: "looker",
  plotly: "plotly",
  metabase: "metabase",
  elasticsearch: "elasticsearch",
};

/** simple-icons@12 on jsDelivr — cdn.simpleicons.org 404s for several slugs (openai, aws, etc.). */
const SIMPLE_ICONS_CDN_VERSION = "12";

/** Legacy slug aliases → icon slug that exists in simple-icons@12 */
const SLUG_ALIASES = {
  amazonaws: "amazon",
  amazonwebservices: "amazon",
};

export function resolveSimpleIconSlug(slug) {
  return SLUG_ALIASES[slug] ?? slug;
}

export function getSimpleIconImageUrl(slug) {
  const resolved = resolveSimpleIconSlug(slug);
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_CDN_VERSION}/icons/${resolved}.svg`;
}

export function techNameToSimpleIconSlug(name) {
  const key = normKey(name);
  return TECH_TO_SLUG[key] ?? null;
}

export function extractTechNamesFromService(service) {
  if (!service?.techStack) return [];
  return service.techStack.flatMap((cat) => cat.techs || []);
}

export function getSlugsForService(serviceSlug) {
  const service = services.find((s) => s.slug === serviceSlug);
  if (!service) return [];
  const slugs = extractTechNamesFromService(service)
    .map(techNameToSimpleIconSlug)
    .filter(Boolean)
    .map(resolveSimpleIconSlug);
  return [...new Set(slugs)];
}

/** Per-service clouds for homepage filter */
export const SITE_SERVICE_TECH_CLOUDS = services.map((service) => ({
  slug: service.slug,
  title: service.title,
  slugs: getSlugsForService(service.slug),
}));

/** Round-robin across services so the “All” view represents every track */
export function getBalancedSiteTechSlugs(maxIcons = 36) {
  const clouds = SITE_SERVICE_TECH_CLOUDS.filter((s) => s.slugs.length > 0);
  const result = [];
  let round = 0;
  while (result.length < maxIcons) {
    let added = false;
    for (const { slugs } of clouds) {
      const slug = slugs[round];
      if (slug && !result.includes(slug)) {
        result.push(slug);
        added = true;
        if (result.length >= maxIcons) break;
      }
    }
    if (!added) break;
    round += 1;
  }
  return result;
}
