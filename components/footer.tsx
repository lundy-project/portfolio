import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 font-mono text-xs text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with Next.js — deployed like a
          pipeline.
        </p>
        <p className="flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-success" />
          status: all systems operational
        </p>
      </div>
    </footer>
  );
}
