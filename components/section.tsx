import { DevopsBackground } from "@/components/devops-background";
import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  subtitle,
  className,
  bgVariant = "a",
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  className?: string;
  bgVariant?: "a" | "b" | "sides";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-16 sm:py-20", className)}>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <DevopsBackground variant={bgVariant} />
        <div className="relative">
          <div className="mb-10">
            <h2 className="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-primary">$</span> {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 font-mono text-sm text-muted-foreground"># {subtitle}</p>
            ) : null}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
