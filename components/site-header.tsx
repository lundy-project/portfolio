import Link from "next/link";
import { Terminal } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <Terminal className="size-4 text-primary" />
          <span>
            ~/<span className="text-primary">lundy</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <a href={link.href} className="font-mono text-xs text-muted-foreground hover:text-foreground">
                ./{link.label}
              </a>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" asChild className="hidden font-mono text-xs sm:inline-flex">
            <a href={profile.telegram} target="_blank" rel="noreferrer">
              hire --me
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
