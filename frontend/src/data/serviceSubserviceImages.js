import { hq } from "../lib/heroImageThemes";

/** Remote sources used to seed local subservice card assets. */
export const SUBSERVICE_IMAGE_SOURCES = {
  "enterprise-copilots": hq("photo-1677442136019-21780ecad995"),
  "retrieval-augmented-generation": hq("photo-1551288049-bebda4e38f71"),
  "intelligent-document-processing": hq("photo-1450101499163-c8848c66ca85"),
  "agent-orchestration": hq("photo-1555949963-aa79dcee981c"),
  "prompt-engineering": hq("photo-1517694712202-14dd9538aa97"),
  "generative-ai-governance": hq("photo-1563013544-824ae1b704d3"),
  "predictive-analytics": hq("photo-1460925895917-afdab827c52f"),
  "natural-language-processing": hq("photo-1526374965328-7f61d4dc18c5"),
  "computer-vision": hq("photo-1485827404703-89b55fcc595e"),
  "model-fine-tuning": hq("photo-1620712943543-bcc4688e7485"),
  mlops: hq("photo-1558494949-ef010cbdcc31"),
  "llm-engineering": hq("photo-1517694712202-14dd9538aa97"),
  "data-pipeline-engineering": hq("photo-1551288049-bebda4e38f71"),
  "data-warehouse-lakehouse": hq("photo-1460925895917-afdab827c52f"),
  "real-time-streaming": hq("photo-1555949963-aa79dcee981c"),
  "data-governance": hq("photo-1451187580459-43490279c0fa"),
  "cloud-platform-engineering": hq("photo-1451187580459-43490279c0fa"),
  "cicd-release-automation": hq("photo-1558494949-ef010cbdcc31"),
  "kubernetes-operations": hq("photo-1558494949-ef010cbdcc31"),
  "infrastructure-as-code": hq("photo-1461749280684-dccba630e2f6"),
  "observability-sre": hq("photo-1551288049-bebda4e38f71"),
  "application-modernization": hq("photo-1461749280684-dccba630e2f6"),
};

export function getSubserviceCardImage(subserviceId) {
  return `/media/subservices/${subserviceId}.jpg`;
}
