import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "outline" | "light";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  const styles = {
    primary: "bg-[#2563EB] text-white shadow-[0_0_28px_rgba(37,99,235,0.28)] hover:bg-[#1A56DB]",
    outline: "border border-white/30 bg-white/5 text-white hover:border-[#2563EB] hover:bg-[#2563EB]/15",
    light: "bg-white text-[#111827] hover:bg-[#F3F4F6]",
  };

  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-md px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}

