export const profile = {
  name: "Seab Lundy",
  initials: "SL",
  title: "DevOps Engineer",
  location: "Phnom Penh, Cambodia",
  email: "lundyseab@gmail.com",
  website: "https://www.lundy.work",
  telegram: "https://t.me/seablundy",
  github: "https://github.com/lundyseab",
  linkedin: "https://www.linkedin.com/in/lundy-seab",
  summary:
    "DevOps Engineer with experience designing and operating Kubernetes-based platforms, CI/CD pipelines, infrastructure automation, and DevSecOps practices. Experienced in building highly available, secure, and scalable enterprise infrastructure using Kubernetes, Jenkins, Argo CD, Ansible, HashiCorp Vault, Linux, and GitOps. Strong background in automation, networking, and cloud-native technologies with experience mentoring teams and delivering production-ready solutions.",
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud & Container Platforms",
    skills: ["Kubernetes (K8s, K3s)", "Docker", "AWS", "GCP", "DigitalOcean"],
  },
  {
    name: "CI/CD & GitOps",
    skills: ["Jenkins", "GitHub Actions", "ArgoCD", "Git"],
  },
  {
    name: "Infrastructure & Automation",
    skills: ["Ansible", "Linux Administration", "Bash", "HashiCorp Vault"],
  },
  {
    name: "Networking & Service Mesh",
    skills: ["Cilium", "Flannel", "Istio", "MikroTik", "UniFi", "VPN", "DNS"],
  },
  {
    name: "Security & DevSecOps",
    skills: [
      "SonarQube",
      "Trivy",
      "TruffleHog",
      "OWASP Dependency-Check",
      "Keycloak",
      "SSL/TLS",
    ],
  },
  {
    name: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    name: "Application Technologies",
    skills: [
      "Python",
      "Java",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Redis",
      "MinIO",
    ],
  },
];

export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  location: string;
  position: string;
  type: string;
  period: string;
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    company: "Korea Software HRD Center",
    location: "Phnom Penh",
    position: "Instructor, Server & Network Admin",
    type: "Full Time",
    period: "2024 — Present",
    roles: [
      {
        title: "DevOps Instructor · Automated PaaS Project",
        period: "2024",
        bullets: [
          "Led the development of a Kubernetes-based Platform-as-a-Service (PaaS), achieving Top 3 Project recognition.",
          "Designed CI/CD pipelines from git repo link upload to production-ready, using Jenkins, Kubernetes, and ArgoCD to automate application deployment.",
          "Automated SSL/TLS certificate provisioning, domain configuration, and Kubernetes application deployment.",
          "Mentored the project in collaboration with a local banking partner, guiding students through DevOps best practices.",
        ],
      },
      {
        title: "Servers & Network Administration",
        period: "Jul 2024 — Present",
        bullets: [
          "Designed and managed KSHRD's enterprise network using MikroTik routers and UniFi access points.",
          "Administered Linux servers hosting websites, internal services, VPNs, and Network File System (NFS).",
          "Maintained infrastructure reliability, system security, and service availability across the organization.",
          "Deployed and maintained production services supporting both administrative and technical departments.",
        ],
      },
      {
        title: "Cybersecurity Instructor · Hunesion Collaboration",
        period: "2025",
        bullets: [
          "Designed and delivered a cybersecurity training program focused on AI-assisted vulnerability assessment.",
          "Mentored students in integrating LLMs with SonarQube, Subfinder, and GoBuster to improve vulnerability detection, remediation suggestions, and payload generation.",
          "Collaborated with South Korean cybersecurity company Hunesion on course development and mentoring.",
        ],
      },
    ],
  },
  {
    company: "The University of Cambodia",
    location: "Phnom Penh",
    position: "IT Support",
    type: "Part-Time",
    period: "Nov 2023 — Mar 2024",
    roles: [
      {
        title: "IT Support",
        period: "Nov 2023 — Mar 2024",
        bullets: [
          "Responsible for setting up computer operating systems, networks, and software installation.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  org: string;
  year: string;
  featured: boolean;
  stack: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    name: "Kubernetes AI Cluster (K3s)",
    org: "Korea Software HRD Center",
    year: "2026",
    featured: true,
    stack: [
      "K3s",
      "Cilium",
      "Istio Ambient Mesh",
      "Prometheus",
      "Grafana",
      "ELK Stack",
    ],
    bullets: [
      "Designed and deployed a lightweight Kubernetes cluster using K3s to support AI workloads, internal services, and cloud-native applications.",
      "Implemented Cilium CNI for container networking.",
      "Configured Istio Ambient Mesh for secure service-to-service communication, traffic management, and mutual TLS without traditional sidecar proxies.",
      "Implemented monitoring with Prometheus, Grafana, and the ELK Stack.",
      "Applied DevOps and DevSecOps practices to improve infrastructure automation, security, scalability, and operational reliability.",
    ],
  },
  {
    name: "Enterprise Online Examination Platform",
    org: "Korea Software HRD Center",
    year: "2024",
    featured: true,
    stack: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Keycloak",
      "Docker",
      "Jenkins",
      "ArgoCD",
    ],
    bullets: [
      "Designed and deployed an online examination platform using Spring Boot, PostgreSQL, Redis, and MinIO following a modular RESTful architecture.",
      "Containerized the application using Docker and automated deployment with Jenkins, Kubernetes, and Argo CD through a GitOps workflow.",
      "Implemented Keycloak-based Single Sign-On (SSO), Spring Security, Redis session management, and object storage integration with MinIO for secure file management.",
      "Built scalable infrastructure supporting automated application deployment and TLS provisioning.",
    ],
  },
  {
    name: "Automated PaaS Platform",
    org: "Korea Software HRD Center",
    year: "2024",
    featured: false,
    stack: ["Kubernetes", "Jenkins", "ArgoCD", "cert-manager"],
    bullets: [
      "Kubernetes-based Platform-as-a-Service that turns a git repository link into a production-ready deployment — Top 3 Project recognition.",
      "End-to-end CI/CD pipeline with Jenkins and GitOps delivery via ArgoCD.",
      "Automated SSL/TLS certificate provisioning and domain configuration.",
      "Built in collaboration with a local banking partner.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    school: "CoST | The University of Cambodia",
    period: "2020 — 2023",
    detail: "GPA: 3.51 / 4.0",
  },
  {
    degree: "High School Diploma",
    school: "Preah Bat Norodom High School | Prey Veng",
    period: "2018 — 2019",
    detail: "",
  },
];

export const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Very Good" },
];
