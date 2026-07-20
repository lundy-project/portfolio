"use client";

import { useState } from "react";
import { Menu, Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/lib/data";

const navLinks = [
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu" className="md:hidden">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-mono text-sm">
            <Terminal className="size-4 text-primary" />
            ~/<span className="text-primary">lundy</span>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 font-mono text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              ./{link.label}
            </a>
          ))}
          <Button asChild className="mt-3 font-mono text-xs">
            <a
              href={profile.telegram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              hire --me
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
