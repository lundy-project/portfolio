import { Building2 } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="git log --experience" subtitle="where I've shipped">
      <div className="relative space-y-8 before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-border sm:before:left-[9px]">
        {experiences.map((job) => (
          <div key={job.company} className="relative pl-8 sm:pl-10">
            <span className="absolute left-0 top-1.5 flex size-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:size-5">
              <span className="size-1.5 rounded-full bg-primary" />
            </span>
            <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">{job.position}</h3>
              <Badge variant="outline" className="font-mono text-xs">
                {job.type}
              </Badge>
              <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
            </div>
            <p className="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Building2 className="size-3.5" />
              {job.company} · {job.location}
            </p>
            <div className="space-y-4">
              {job.roles.map((role) => (
                <Card key={role.title} className="gap-3">
                  <CardHeader>
                    <CardTitle className="flex flex-wrap items-center justify-between gap-2 text-sm">
                      <span>{role.title}</span>
                      <span className="font-mono text-xs font-normal text-muted-foreground">
                        {role.period}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {role.bullets.map((bullet) => (
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
          </div>
        ))}
      </div>
    </Section>
  );
}
