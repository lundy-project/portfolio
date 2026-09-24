export const profile = {
  name: "Seab Lundy",
  initials: "SL",
  title: "DevOps Engineer",
  location: "Phnom Penh, Cambodia",
  email: "seablundy@gmail.com",
  website: "https://www.lundy.work",
  telegram: "https://t.me/seablundy",
  github: "https://github.com/lundyseab",
  linkedin: "https://www.linkedin.com/in/lundy-seab",
  summary:
    "DevOps Engineer (2+ years) with DevSecOps knowledge and experience designing and operating Kubernetes-based platforms, CI/CD pipelines, and secure cloud-native environments. Working according to organizational policies, standards, and procedures, committed to long-term growth while delivering reliable and scalable enterprise infrastructure. Skilled in Kubernetes, Jenkins, Argo CD, Ansible, HashiCorp Vault, and GitOps, with a strong background in automation, networking, and mentoring teams to deliver production-ready solutions.",
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Cloud & Container Platforms",
    skills: ["Kubernetes (K8s)", "Docker", "AWS", "GCP", "DigitalOcean"],
  },
  {
    name: "CI/CD & GitOps",
    skills: ["Jenkins", "GitHub Actions", "Argo CD", "Git"],
  },
  {
    name: "Infrastructure & Automation",
    skills: ["Ansible", "Linux Administration", "Bash", "HashiCorp Vault"],
  },
  {
    name: "Networking & Service Mesh",
    skills: ["Cilium", "Istio Service Mesh", "MikroTik", "UniFi", "VPN", "DNS"],
  },
  {
    name: "Security & DevSecOps",
    skills: [
      "SonarQube",
      "Trivy",
      "Gitleaks",
      "JFrog",
      "OWASP Dependency-Check",
      "Keycloak",
      "PKI",
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
      "Java",
      "Python",
      "Bash",
      "PostgreSQL",
      "Redis",
      "MinIO",
      "Spring Boot",
      "REST APIs",
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
    position: "DevOps Engineer, Instructor & Network Admin",
    type: "Full Time",
    period: "2024 — 2026",
    roles: [
      {
        title: "DevOps Engineer & Network Administration",
        period: "Jan 2024 — Jul 2026",
        bullets: [
          "Design CI/CD and maintained production services supporting both administrative and technical departments.",
          "Designed and managed KSHRD's enterprise network using MikroTik routers and UniFi access points.",
          "Administered Linux servers hosting websites, internal services, VPNs, and Network File System (NFS).",
          "Maintained infrastructure High Availability (HA), and reliability across the organization.",
        ],
      },
      {
        title: "DevOps Instructor · Automated PaaS Project",
        period: "2024",
        bullets: [
          "Led the development of a Kubernetes-based Platform-as-a-Service (PaaS), achieving Top 3 Project recognition.",
          "Designed and implemented CI/CD pipelines using Jenkins, Kubernetes, and Argo CD, automating application delivery from source-code repositories to production environments. Automated PKI, SSL/TLS certificate provisioning, domain configuration, and Kubernetes application deployment.",
          "Mentored students in collaboration with a local banking partner, guiding them in Kubernetes, CI/CD, and GitOps workflow.",
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
    type: "Internship",
    period: "Nov 2023 — Mar 2024",
    roles: [
      {
        title: "IT Support",
        period: "Nov 2023 — Mar 2024",
        bullets: [
          "Responsible for setup computer operating system, network, and application installation.",
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
    name: "AI on Kubernetes Cluster",
    org: "Korea Software HRD Center",
    year: "2026",
    featured: true,
    stack: ["Kubernetes", "Cilium", "Istio Service Mesh", "Prometheus", "Grafana"],
    bullets: [
      "Designed and deployed a lightweight Kubernetes cluster to support AI workloads, internal services, and cloud-native applications.",
      "Implemented Cilium CNI for container networking.",
      "Configured Istio Service Mesh to provide secure service-to-service communication, traffic management, and mutual TLS.",
      "Implemented monitoring with Prometheus, and Grafana.",
      "Applied DevOps and DevSecOps practices to improve infrastructure automation, security, scalability, and operational reliability.",
    ],
  },
  {
    name: "Online Examination Platform (Spring Boot)",
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
      "CI/CD",
    ],
    bullets: [
      "Designed and deployed an online examination platform using Spring Boot, PostgreSQL, Redis, and MinIO following a modular RESTful architecture.",
      "Containerized the application using Docker and automated deployment through CI/CD pipeline.",
      "Implemented Keycloak-based Single Sign-On (SSO), Spring Security, Redis session management, and object storage integration with MinIO for secure file management.",
      "Emulated Spring Boot Code Executor using containerized code execution.",
    ],
  },
  {
    name: "Automated PaaS Platform",
    org: "Korea Software HRD Center",
    year: "2024",
    featured: false,
    stack: ["Kubernetes", "Jenkins", "Argo CD", "PKI", "cert-manager"],
    bullets: [
      "Kubernetes-based Platform-as-a-Service that automates application delivery from source-code repositories to production environments — Top 3 Project recognition.",
      "CI/CD pipelines built with Jenkins, Kubernetes, and Argo CD.",
      "Automated PKI, SSL/TLS certificate provisioning, domain configuration, and Kubernetes application deployment.",
      "Built in collaboration with a local banking partner.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology (IT)",
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
