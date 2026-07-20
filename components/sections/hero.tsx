import { MapPin, Send } from "lucide-react";

import { DevopsBackground } from "@/components/devops-background";
import { InteractiveTerminal } from "@/components/interactive-terminal";
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
      <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_minmax(0,420px)] lg:items-center">
        <DevopsBackground />
        <div className="relative flex flex-col items-start gap-6">
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
            </Button>
          </div>
        </div>

        <div className="relative">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
