const coreTechData = {
  "generative-ai": [
    { name: "Foundation Models", description: "Foundation models selected against latency, cost, and data-handling requirements.", techs: [{ name: "GPT-4o" }, { name: "Claude 3.5" }, { name: "Gemini Pro" }, { name: "Llama 3" }, { name: "Mistral" }] },
    { name: "RAG Frameworks", description: "Retrieval-augmented generation and knowledge-grounded response pipelines.", techs: [{ name: "LangChain" }, { name: "LlamaIndex" }, { name: "Haystack" }, { name: "Semantic Kernel" }] },
    { name: "Vector Databases", description: "Semantic search and context retrieval for enterprise knowledge bases.", techs: [{ name: "Pinecone" }, { name: "Weaviate" }, { name: "Milvus" }, { name: "Qdrant" }, { name: "Chroma" }] },
    { name: "Agent Orchestration", description: "Multi-step workflows, tool calling, and governed automation.", techs: [{ name: "LangGraph" }, { name: "AutoGen" }, { name: "CrewAI" }, { name: "Temporal" }] },
    { name: "Deployment", description: "Production serving for language models and copilot endpoints.", techs: [{ name: "vLLM" }, { name: "AWS Bedrock" }, { name: "Azure OpenAI" }, { name: "GCP Vertex AI" }] },
  ],
  "machine-learning": [
    { name: "ML Frameworks", description: "Frameworks for training, evaluating, and deploying machine learning models.", techs: [{ name: "PyTorch" }, { name: "TensorFlow" }, { name: "Scikit-learn" }, { name: "XGBoost" }, { name: "JAX" }] },
    { name: "MLOps", description: "Model lifecycle management, deployment, and production monitoring.", techs: [{ name: "MLflow" }, { name: "Kubeflow" }, { name: "Prometheus" }, { name: "Grafana" }, { name: "Weights & Biases" }] },
    { name: "LLM Engineering", description: "Fine-tuning, evaluation, and serving for language-model features.", techs: [{ name: "Hugging Face" }, { name: "LoRA/QLoRA" }, { name: "vLLM" }, { name: "LangSmith" }, { name: "Ragas" }] },
    { name: "Cloud ML", description: "Managed platforms for model training and inference.", techs: [{ name: "AWS SageMaker" }, { name: "Azure ML" }, { name: "GCP Vertex AI" }, { name: "Databricks" }] },
  ],
  "data-engineering": [
    { name: "Data Pipelines", description: "Orchestrated ingestion and transformation with quality controls.", techs: [{ name: "Apache Airflow" }, { name: "dbt" }, { name: "Spark" }, { name: "Fivetran" }, { name: "Kafka" }] },
    { name: "Data Warehouses", description: "Centralized analytics platforms for enterprise reporting and features.", techs: [{ name: "Snowflake" }, { name: "BigQuery" }, { name: "Redshift" }, { name: "Databricks" }, { name: "Delta Lake" }] },
    { name: "Stream Processing", description: "Real-time event ingestion and stream processing topologies.", techs: [{ name: "Apache Kafka" }, { name: "Apache Flink" }, { name: "Spark Streaming" }, { name: "Confluent" }] },
    { name: "Data Quality", description: "Automated validation, lineage, and governance frameworks.", techs: [{ name: "Great Expectations" }, { name: "Monte Carlo" }, { name: "Soda" }, { name: "dbt Tests" }] },
  ],
  "cloud-infrastructure": [
    { name: "CI/CD", description: "Automated build, test, and release pipelines.", techs: [{ name: "GitHub Actions" }, { name: "GitLab CI/CD" }, { name: "Argo CD" }, { name: "Jenkins" }, { name: "Terraform" }] },
    { name: "Containers", description: "Container platforms for scalable application delivery.", techs: [{ name: "Docker" }, { name: "Kubernetes" }, { name: "Helm" }, { name: "ECS" }] },
    { name: "Application Stack", description: "Backend, frontend, and mobile technologies for product delivery.", techs: [{ name: "React" }, { name: "Node.js" }, { name: "Python" }, { name: "Kotlin" }, { name: "Flutter" }] },
    { name: "Observability", description: "Metrics, tracing, and alerting for production systems.", techs: [{ name: "Prometheus" }, { name: "Grafana" }, { name: "Datadog" }, { name: "OpenTelemetry" }] },
    { name: "Cloud", description: "Multi-cloud infrastructure for enterprise workloads.", techs: [{ name: "AWS" }, { name: "Azure" }, { name: "GCP" }, { name: "Cloudflare" }] },
  ],
};

export default coreTechData;
