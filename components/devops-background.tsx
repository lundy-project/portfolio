import {
  SiAnsible,
  SiArgo,
  SiDocker,
  SiGrafana,
  SiHelm,
  SiIstio,
  SiJenkins,
  SiKubernetes,
  SiPrometheus,
  SiVault,
} from "@icons-pack/react-simple-icons";

type FloatingIcon = {
  Icon: React.ComponentType<{ className?: string }>;
  className: string;
  style: React.CSSProperties;
};

const floatingIcons: FloatingIcon[] = [
  {
    Icon: SiKubernetes,
    className: "left-[6%] top-[12%] size-14 sm:size-20",
    style: { animationDuration: "14s" },
  },
  {
    Icon: SiDocker,
    className: "left-[16%] top-[68%] size-12 sm:size-16",
    style: { animationDuration: "11s", animationDelay: "-3s" },
  },
  {
    Icon: SiJenkins,
    className: "left-[36%] top-[22%] size-10 sm:size-14",
    style: { animationDuration: "13s", animationDelay: "-6s" },
  },
  {
    Icon: SiArgo,
    className: "left-[30%] top-[80%] size-10 sm:size-12",
    style: { animationDuration: "12s", animationDelay: "-2s" },
  },
  {
    Icon: SiHelm,
    className: "left-[48%] top-[58%] size-10 sm:size-14",
    style: { animationDuration: "15s", animationDelay: "-8s" },
  },
  {
    Icon: SiPrometheus,
    className: "left-[58%] top-[10%] size-9 sm:size-12",
    style: { animationDuration: "10s", animationDelay: "-4s" },
  },
  {
    Icon: SiIstio,
    className: "left-[70%] top-[74%] size-10 sm:size-12",
    style: { animationDuration: "13s", animationDelay: "-9s" },
  },
  {
    Icon: SiVault,
    className: "left-[80%] top-[30%] size-9 sm:size-12",
    style: { animationDuration: "12s", animationDelay: "-5s" },
  },
  {
    Icon: SiGrafana,
    className: "left-[90%] top-[62%] size-10 sm:size-14",
    style: { animationDuration: "14s", animationDelay: "-7s" },
  },
  {
    Icon: SiAnsible,
    className: "left-[92%] top-[8%] size-9 sm:size-12",
    style: { animationDuration: "11s", animationDelay: "-1s" },
  },
];

export function DevopsBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {floatingIcons.map(({ Icon, className, style }, index) => (
        <span
          key={index}
          className={`absolute animate-devops-float text-primary opacity-[0.07] dark:opacity-[0.09] motion-reduce:animate-none ${className}`}
          style={style}
        >
          <Icon className="size-full" />
        </span>
      ))}
    </div>
  );
}
