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
 * Tech names from services.js → Simple Icons slugs (simple-icons@12 / jsDelivr).
 * Prefer exact brand slugs; pattern rules in techNameToSimpleIconSlug handle variants.
 */
const TECH_TO_SLUG = {
  "gpt 4o": "openai",
  "openai gpt 4o": "openai",
  claude: "anthropic",
  "claude 3 5": "anthropic",
  "anthropic claude": "anthropic",
  gemini: "google",
  "gemini pro": "google",
  "google gemini": "google",
  "llama 3": "meta",
  mistral: "mistralai",
  cohere: "cohere",
  "phi 3": "microsoft",
  python: "python",
  tensorflow: "tensorflow",
  pytorch: "pytorch",
  "scikit learn": "scikitlearn",
  xgboost: "xgboost",
  jax: "google",
  mlflow: "databricks",
  kubeflow: "kubeflow",
  prometheus: "prometheus",
  grafana: "grafana",
  "ci cd pipelines": "githubactions",
  "model versioning": "git",
  aws: "amazonwebservices",
  "aws bedrock": "amazonwebservices",
  "aws sagemaker": "amazonwebservices",
  "aws glue": "amazonwebservices",
  "aws amplify": "amazonwebservices",
  "aws cloudformation": "amazonwebservices",
  azure: "microsoftazure",
  "azure openai": "microsoftazure",
  "azure ml": "microsoftazure",
  "google cloud": "googlecloud",
  "gcp vertex ai": "googlecloud",
  gcp: "googlecloud",
  docker: "docker",
  kubernetes: "kubernetes",
  serverless: "awslambda",
  langchain: "langchain",
  llamaindex: "meta",
  haystack: "deepset",
  "semantic kernel": "microsoft",
  dspy: "python",
  chromadb: "chromadb",
  chroma: "chromadb",
  pinecone: "pinecone",
  weaviate: "weaviate",
  milvus: "milvus",
  qdrant: "qdrant",
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
  "jetpack compose": "jetpackcompose",
  "android studio": "androidstudio",
  "ml kit": "google",
  coroutines: "kotlin",
  room: "sqlite",
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
  webhooks: "webhook",
  "sdk toolkits": "python",
  "slack teams bots": "slack",
  "crm connectors": "salesforce",
  "hugging face": "huggingface",
  deepspeed: "microsoft",
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
  ecs: "amazonwebservices",
  nomad: "hashicorp",
  datadog: "datadog",
  "elk stack": "elastic",
  opentelemetry: "opentelemetry",
  splunk: "splunk",
  "apache airflow": "apacheairflow",
  dbt: "dbt",
  fivetran: "fivetran",
  spark: "apachespark",
  kafka: "apachekafka",
  "apache kafka": "apachekafka",
  snowflake: "snowflake",
  bigquery: "googlecloud",
  redshift: "amazonwebservices",
  databricks: "databricks",
  "delta lake": "databricks",
  teradata: "teradata",
  "apache flink": "apacheflink",
  "spark streaming": "apachespark",
  kinesis: "amazonwebservices",
  confluent: "confluent",
  pulsar: "apachepulsar",
  tableau: "tableau",
  "power bi": "powerbi",
  looker: "looker",
  plotly: "plotly",
  metabase: "metabase",
  elasticsearch: "elasticsearch",
};

/** Substring rules when exact key is missing (order matters — first match wins). */
const SLUG_PATTERNS = [
  [/openai|gpt[\s-]?4|gpt[\s-]?3/, "openai"],
  [/anthropic|claude/, "anthropic"],
  [/gemini|palm/, "google"],
  [/llama|llamaindex/, "meta"],
  [/mistral/, "mistralai"],
  [/cohere/, "cohere"],
  [/phi[\s-]?3/, "microsoft"],
  [/hugging\s*face|huggingface|\bvllm\b|\btgi\b|axolotl/, "huggingface"],
  [/pytorch|torch|lora|qlora|deepspeed/, "pytorch"],
  [/tensorflow/, "tensorflow"],
  [/scikit|sklearn/, "scikitlearn"],
  [/xgboost/, "xgboost"],
  [/\bjax\b/, "google"],
  [/mlflow/, "databricks"],
  [/kubeflow/, "kubeflow"],
  [/prometheus/, "prometheus"],
  [/grafana/, "grafana"],
  [/ci[\s/\\-]?cd|github\s*actions/, "githubactions"],
  [/model\s*version/, "git"],
  [/sagemaker|bedrock|cloudformation|aws\s*glue|aws\s*amplify|\baws\b|redshift|kinesis|\becs\b/, "amazonwebservices"],
  [/azure/, "microsoftazure"],
  [/vertex\s*ai|google\s*cloud|\bgcp\b|bigquery/, "googlecloud"],
  [/awslambda|serverless|lambda/, "awslambda"],
  [/langchain|langgraph/, "langchain"],
  [/haystack|deepset/, "deepset"],
  [/semantic\s*kernel|autogen|\bphi\b/, "microsoft"],
  [/chromadb|\bchroma\b/, "chromadb"],
  [/pinecone/, "pinecone"],
  [/weaviate/, "weaviate"],
  [/milvus/, "milvus"],
  [/qdrant/, "qdrant"],
  [/\bredis\b/, "redis"],
  [/node(\.js)?/, "nodedotjs"],
  [/express/, "express"],
  [/\.net|dotnet/, "dotnet"],
  [/\bjava\b|openjdk|spring/, "openjdk"],
  [/\bgo\b|golang/, "go"],
  [/react/, "react"],
  [/angular/, "angular"],
  [/next\.?js/, "nextdotjs"],
  [/typescript/, "typescript"],
  [/vue/, "vuedotjs"],
  [/svelte/, "svelte"],
  [/postgres/, "postgresql"],
  [/mongo/, "mongodb"],
  [/mysql/, "mysql"],
  [/cassandra/, "apachecassandra"],
  [/firebase/, "firebase"],
  [/jenkins/, "jenkins"],
  [/terraform/, "terraform"],
  [/swift|swiftui|combine/, "swift"],
  [/xcode|core\s*ml|testflight/, "apple"],
  [/kotlin|coroutines/, "kotlin"],
  [/jetpack/, "jetpackcompose"],
  [/android/, "android"],
  [/flutter/, "flutter"],
  [/dart/, "dart"],
  [/expo/, "expo"],
  [/capacitor/, "capacitor"],
  [/ionic/, "ionic"],
  [/supabase/, "supabase"],
  [/graphql/, "graphql"],
  [/crewai/, "openai"],
  [/temporal/, "temporal"],
  [/prefect/, "prefect"],
  [/rest\s*api|swagger|openapi/, "swagger"],
  [/webhook/, "webhook"],
  [/slack|teams/, "slack"],
  [/salesforce|crm/, "salesforce"],
  [/triton|nvidia/, "nvidia"],
  [/gitlab/, "gitlab"],
  [/circleci/, "circleci"],
  [/argo/, "argo"],
  [/\bflux\b/, "flux"],
  [/ansible/, "ansible"],
  [/pulumi/, "pulumi"],
  [/chef/, "chef"],
  [/opentofu/, "opentofu"],
  [/helm/, "helm"],
  [/podman/, "podman"],
  [/nomad|hashicorp/, "hashicorp"],
  [/datadog/, "datadog"],
  [/elastic|opensearch|elk/, "elastic"],
  [/opentelemetry/, "opentelemetry"],
  [/splunk/, "splunk"],
  [/airflow/, "apacheairflow"],
  [/\bdbt\b/, "dbt"],
  [/fivetran/, "fivetran"],
  [/spark/, "apachespark"],
  [/kafka/, "apachekafka"],
  [/snowflake/, "snowflake"],
  [/databricks|delta\s*lake/, "databricks"],
  [/teradata/, "teradata"],
  [/flink/, "apacheflink"],
  [/confluent/, "confluent"],
  [/pulsar/, "apachepulsar"],
  [/tableau/, "tableau"],
  [/power\s*bi/, "powerbi"],
  [/looker/, "looker"],
  [/plotly/, "plotly"],
  [/metabase/, "metabase"],
  [/docker/, "docker"],
  [/kubernetes|k8s/, "kubernetes"],
  [/python|dspy|phidata/, "python"],
];

/** simple-icons@12 on jsDelivr — cdn.simpleicons.org 404s for several slugs (openai, aws, etc.). */
const SIMPLE_ICONS_CDN_VERSION = "12";

/** Legacy slug aliases → icon slug that exists in simple-icons@12 */
const SLUG_ALIASES = {
  amazon: "amazonwebservices",
  amazonaws: "amazonwebservices",
  amazonwebservices: "amazonwebservices",
  awslambda: "awslambda",
};

export function resolveSimpleIconSlug(slug) {
  return SLUG_ALIASES[slug] ?? slug;
}

export function getSimpleIconImageUrl(slug) {
  const resolved = resolveSimpleIconSlug(slug);
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_CDN_VERSION}/icons/${resolved}.svg`;
}

/** Colored brand SVG (transparent background) for marquee / mockup tiles. */
export function getSimpleIconColoredImageUrl(slug) {
  const resolved = resolveSimpleIconSlug(slug);
  return `https://cdn.simpleicons.org/${resolved}`;
}

export function techNameToSimpleIconSlug(name) {
  const key = normKey(name);
  if (TECH_TO_SLUG[key]) return resolveSimpleIconSlug(TECH_TO_SLUG[key]);

  for (const [pattern, slug] of SLUG_PATTERNS) {
    if (pattern.test(key)) return resolveSimpleIconSlug(slug);
  }

  return null;
}

/** Stable key for deduping marquee tiles that share the same brand icon. */
export function getTechIconVisualKey(name) {
  const slug = techNameToSimpleIconSlug(name);
  if (slug) return resolveSimpleIconSlug(slug);
  return `label:${normKey(name)}`;
}

/** Keep first occurrence when multiple labels map to the same icon. */
export function dedupeTechNamesByIcon(names) {
  const seen = new Set();
  const result = [];
  for (const name of names) {
    const label = String(name).trim();
    if (!label) continue;
    const key = getTechIconVisualKey(label);
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(label);
  }
  return result;
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

/** Round-robin tech labels for homepage stack grid (balanced across service tracks). */
export function getBalancedSiteTechNames(maxNames = 24) {
  const byService = services
    .map((service) => ({
      names: dedupeTechNamesByIcon(extractTechNamesFromService(service)),
    }))
    .filter((entry) => entry.names.length > 0);

  const result = [];
  let round = 0;
  while (result.length < maxNames) {
    let added = false;
    for (const { names } of byService) {
      const name = names[round];
      if (name && !result.includes(name)) {
        result.push(name);
        added = true;
        if (result.length >= maxNames) break;
      }
    }
    if (!added) break;
    round += 1;
  }
  return dedupeTechNamesByIcon(result);
}
