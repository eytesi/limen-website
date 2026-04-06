"use client";

import { ReactNode } from "react";

interface PatternProps {
  pattern: "fabric-1" | "fabric-2" | "fabric-3" | "animal" | "geometric";
  children?: ReactNode;
  className?: string;
}

export function PatternBackground({
  pattern,
  children,
  className = "",
}: PatternProps) {
  const patternClass = {
    "fabric-1": "pattern-fabric-1",
    "fabric-2": "pattern-fabric-2",
    "fabric-3": "pattern-fabric-3",
    animal: "pattern-animal",
    geometric: "pattern-geometric-mix",
  }[pattern];

  return (
    <div className={`relative w-full ${patternClass} ${className}`}>
      {children}
    </div>
  );
}

export function PatternGrid({
  children,
}: {
  children: ReactNode;
}) {
  const patterns: Array<"fabric-1" | "fabric-2" | "fabric-3" | "animal" | "geometric"> = [
    "fabric-1",
    "fabric-2",
    "fabric-3",
    "animal",
    "geometric",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {children}
    </div>
  );
}
