"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3"
      aria-label="Slash Infotech home"
    >
      <Image
        src="/images/log.png"
        alt="Slash Infotech logo"
        width={180}
        height={50}
        priority
        className="h-10 w-auto"
      />
      <p className="text-xl slash-font text-slate-800">SLASH INFOTECH</p>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 16);
      setHidden(current > last && current > 120);
      last = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -96 : 0 }}
      transition={{ duration: 0.28 }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition",
          scrolled
            ? "border-white/60 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
            : "border-transparent bg-white/70 backdrop-blur-md",
        )}
      >
        <Logo />
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-[#2563EB]/10 hover:text-[#2563EB]",
                pathname === link.href && "bg-[#2563EB]/10 text-[#2563EB]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-md bg-[#2563EB] px-4 py-2 text-sm font-bold text-white shadow-[0_0_22px_rgba(37,99,235,0.25)] transition hover:bg-[#1A56DB] lg:inline-flex"
        >
          Start Project
        </Link>
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-[#1E2A3A] lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <MobileMenu pathname={pathname} onClose={() => setOpen(false)} />
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

function MobileMenu({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#111827]/70 backdrop-blur-sm lg:hidden"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-2xl"
      >
        <div className="flex items-center justify-between">
          <Logo />
          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-200"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <div className="mt-8 grid gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "rounded-md px-4 py-3 font-semibold text-slate-700",
                pathname === link.href && "bg-[#2563EB]/10 text-[#2563EB]",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-auto text-sm leading-6 text-slate-500">
          {siteConfig.tagline}
        </p>
      </motion.div>
    </motion.div>
  );
}
