"use client"

import { cn } from "@/lib/utils"

interface ShineBorderProps {
  shineColor?: string
  className?: string
}

export function ShineBorder({ shineColor = "white", className }: ShineBorderProps) {
  const colorClass = shineColor === "white" ? "text-white" : "text-black"
  
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[border:1px_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:absolute after:aspect-square after:w-[150%] after:animate-shine-pulse",
        "after:bg-gradient-to-r after:from-transparent after:via-current after:to-transparent",
        "after:opacity-0",
        colorClass,
        className
      )}
    />
  )
}
