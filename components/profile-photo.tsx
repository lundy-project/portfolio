"use client";

import { useState } from "react";
import Image from "next/image";

import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProfilePhoto({ className }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={cn(
        "relative size-36 shrink-0 overflow-hidden rounded-full border-4 border-primary/20 bg-secondary shadow-lg sm:size-44",
        className
      )}
    >
      {failed ? (
        <div className="flex size-full items-center justify-center font-mono text-4xl font-bold text-primary">
          {profile.initials}
        </div>
      ) : (
        <Image
          src="/profile.jpg"
          alt={profile.name}
          fill
          sizes="176px"
          priority
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
