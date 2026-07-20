import {
  Boxes,
  GitBranch,
  Network,
  ServerCog,
  Shield,
  Waypoints,
  Code2,
} from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Cloud & Containers": Boxes,
  "CI/CD & GitOps": GitBranch,
  "Infrastructure & Automation": ServerCog,
  "CNI & Service Mesh": Waypoints,
  DevSecOps: Shield,
  Networking: Network,
  Programming: Code2,
};

export function Skills() {
  return (
    <Section id="skills" title="ls ./skills" subtitle="tools I run in production">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = icons[category.name] ?? Boxes;
          return (
            <Card key={category.name} className="gap-3">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Icon className="size-4 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="font-mono text-xs">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
