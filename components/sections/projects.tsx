import { FolderGit2, Star } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" title="cat ./projects" subtitle="things I've built and run">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.name}
            className={project.featured ? "border-primary/40" : undefined}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FolderGit2 className="size-4.5 text-primary" />
                {project.name}
                {project.featured ? (
                  <Badge className="ml-auto gap-1 font-mono text-xs">
                    <Star className="size-3" /> featured
                  </Badge>
                ) : null}
              </CardTitle>
              <CardDescription className="font-mono text-xs">
                {project.org} · {project.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="font-mono text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-0.5 shrink-0 font-mono text-primary">›</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
