import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";

import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { education, languages } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" title="cat ./education" subtitle="degrees and languages">
      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((entry) => (
          <Card key={entry.degree} className="gap-3">
            <CardHeader>
              <CardTitle className="flex items-start gap-2 text-base">
                <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" />
                {entry.degree}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>{entry.school}</p>
              <p className="font-mono text-xs">{entry.period}</p>
              {entry.detail ? <p className="font-medium text-foreground">{entry.detail}</p> : null}
            </CardContent>
          </Card>
        ))}
        <Card className="gap-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <LanguagesIcon className="size-4 text-primary" />
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {languages.map((language) => (
              <Badge key={language.name} variant="secondary" className="font-mono text-xs">
                {language.name} · {language.level}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
