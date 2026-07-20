import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiGrafana,
  SiHelm,
  SiIstio,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPrometheus,
  SiVault,
} from "@icons-pack/react-simple-icons";

type FloatingIcon = {
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
  style: React.CSSProperties;
};

// This layer is rendered inside each section's centered content box, so negative
// left/right offsets push icons out into the side gutters (which only exist on
// xl+ screens — the layer is hidden below that). Offsets and sizes are varied to
// scatter icons in a loose zig-zag rather than a straight column, and must stay
// within the ~128px xl gutter including the float animation's ±14px drift.
// In-content positions (e.g. left-[55%]) sit over opaque cards or layout gaps,
// never over bare text.
const layouts: Record<string, FloatingIcon[]> = {
  hero: [
    { Icon: SiKubernetes, className: "-left-24 top-[8%] size-14", style: { animationDuration: "14s" } },
    { Icon: SiDocker, className: "-left-14 top-[48%] size-11", style: { animationDuration: "11s", animationDelay: "-3s" } },
    { Icon: SiHelm, className: "-left-21 bottom-[10%] size-9", style: { animationDuration: "15s", animationDelay: "-8s" } },
    { Icon: SiArgo, className: "left-[55%] top-[16%] size-9", style: { animationDuration: "12s", animationDelay: "-2s" } },
    { Icon: SiIstio, className: "-right-23 top-[14%] size-12", style: { animationDuration: "13s", animationDelay: "-9s" } },
    { Icon: SiVault, className: "-right-12 top-[52%] size-9", style: { animationDuration: "12s", animationDelay: "-5s" } },
    { Icon: SiGrafana, className: "-right-19 bottom-[8%] size-11", style: { animationDuration: "14s", animationDelay: "-7s" } },
  ],
  a: [
    { Icon: SiDocker, className: "-left-20 top-[24%] size-12", style: { animationDuration: "12s", animationDelay: "-2s" } },
    { Icon: SiKubernetes, className: "-left-11 bottom-[16%] size-9", style: { animationDuration: "14s", animationDelay: "-6s" } },
    { Icon: SiArgo, className: "left-[40%] top-[52%] size-10", style: { animationDuration: "11s", animationDelay: "-4s" } },
    { Icon: SiLinux, className: "-right-17 top-[18%] size-11", style: { animationDuration: "12s", animationDelay: "-1s" } },
    { Icon: SiPrometheus, className: "-right-24 bottom-[26%] size-9", style: { animationDuration: "10s", animationDelay: "-8s" } },
  ],
  b: [
    { Icon: SiJenkins, className: "-left-15 top-[30%] size-10", style: { animationDuration: "13s", animationDelay: "-3s" } },
    { Icon: SiHelm, className: "-left-23 bottom-[14%] size-12", style: { animationDuration: "15s", animationDelay: "-7s" } },
    { Icon: SiGrafana, className: "left-[50%] top-[58%] size-11", style: { animationDuration: "14s", animationDelay: "-2s" } },
    { Icon: SiKubernetes, className: "-right-21 top-[12%] size-12", style: { animationDuration: "14s" } },
    { Icon: SiAnsible, className: "-right-11 bottom-[22%] size-9", style: { animationDuration: "11s", animationDelay: "-6s" } },
  ],
  sides: [
    { Icon: SiKubernetes, className: "-left-19 top-[10%] size-12", style: { animationDuration: "14s", animationDelay: "-2s" } },
    { Icon: SiDocker, className: "-left-24 bottom-[12%] size-10", style: { animationDuration: "11s", animationDelay: "-4s" } },
    { Icon: SiJenkins, className: "-right-14 top-[22%] size-10", style: { animationDuration: "13s", animationDelay: "-1s" } },
    { Icon: SiIstio, className: "-right-22 bottom-[10%] size-12", style: { animationDuration: "13s", animationDelay: "-5s" } },
  ],
};

// Small-screen hero icons live in the section's top/bottom padding strips —
// the only text-free zones once the gutters collapse. Kept faint and few.
const heroMobile: FloatingIcon[] = [
  { Icon: SiKubernetes, className: "right-2 top-2 size-10", style: { animationDuration: "14s" } },
  { Icon: SiDocker, className: "left-2 bottom-2 size-9", style: { animationDuration: "11s", animationDelay: "-3s" } },
  { Icon: SiJenkins, className: "right-8 bottom-1 size-8", style: { animationDuration: "13s", animationDelay: "-6s" } },
];

function IconLayer({
  icons,
  className,
  opacityClass,
}: {
  icons: FloatingIcon[];
  className: string;
  opacityClass: string;
}) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {icons.map(({ Icon, className: iconClassName, style }, index) => (
        <span
          key={index}
          className={`absolute animate-devops-float text-primary motion-reduce:animate-none ${opacityClass} ${iconClassName}`}
          style={style}
        >
          <Icon className="size-full" />
        </span>
      ))}
    </div>
  );
}

export function DevopsBackground({
  variant = "hero",
}: {
  variant?: keyof typeof layouts;
}) {
  const icons = layouts[variant] ?? layouts.hero;
  return (
    <>
      <IconLayer
        icons={icons}
        className="hidden xl:block"
        opacityClass="opacity-[0.08] dark:opacity-10"
      />
      {variant === "hero" ? (
        <IconLayer
          icons={heroMobile}
          className="xl:hidden"
          opacityClass="opacity-[0.06] dark:opacity-[0.08]"
        />
      ) : null}
    </>
  );
}
