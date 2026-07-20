import { MapPin, Send } from "lucide-react";

import { ProfilePhoto } from "@/components/profile-photo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const statusBadges = [
  { label: "k8s: Running", color: "bg-success" },
  { label: "ci/cd: Passing", color: "bg-success" },
  { label: "gitops: Synced", color: "bg-success" },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center">
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <ProfilePhoto />
            <div>
              <p className="font-mono text-sm text-primary">$ whoami</p>
              <h1 className="mt-1 text-4xl font-bold tracking-tight sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 font-mono text-lg text-muted-foreground">
                {profile.title}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                {profile.location}
              </p>
            </div>
          </div>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {statusBadges.map((badge) => (
              <Badge key={badge.label} variant="secondary" className="gap-1.5 font-mono">
                <span className={`inline-block size-2 rounded-full ${badge.color}`} />
                {badge.label}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={profile.telegram} target="_blank" rel="noreferrer">
                <Send className="size-4" /> Contact Me
              </a>
            </Button>          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-border/60 bg-terminal shadow-xl">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 font-mono text-xs text-white/50">
              lundy@k3s-cluster: ~
            </span>
          </div>
          <div className="space-y-2 p-4 font-mono text-xs leading-relaxed text-terminal-foreground sm:text-sm">
            <p>
              <span className="text-white/50">$</span> kubectl get engineer lundy -o yaml
            </p>
            <p className="text-white/80">apiVersion: career/v1</p>
            <p className="text-white/80">kind: DevOpsEngineer</p>
            <p className="text-white/80">spec:</p>
            <p className="pl-4 text-white/80">
              platform: <span className="text-terminal-foreground">[k8s, k3s, docker]</span>
            </p>
            <p className="pl-4 text-white/80">
              cicd: <span className="text-terminal-foreground">[jenkins, argocd, github-actions]</span>
            </p>
            <p className="pl-4 text-white/80">
              security: <span className="text-terminal-foreground">[vault, trivy, sonarqube]</span>
            </p>
            <p className="text-white/80">status:</p>
            <p className="pl-4 text-white/80">
              phase: <span className="text-success">Running</span>
            </p>
            <p className="pl-4 text-white/80">
              ready: <span className="text-success">true</span>
            </p>
            <p>
              <span className="text-white/50">$</span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-terminal-foreground align-middle" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
