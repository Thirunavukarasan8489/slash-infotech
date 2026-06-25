import Image from "next/image";
import Link from "next/link";
import { Code2, Globe2, Mail, Share2 } from "lucide-react";
import { navLinks, services, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image src="/images/logo-white.png" alt="Slash Infotech logo" width={210} height={58} className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{siteConfig.tagline}</p>
          <div className="mt-5 flex gap-3">
            {[Globe2, Code2, Share2, Mail].map((Icon, index) => <a key={index} href="mailto:hello@slashinfotech.co.uk" aria-label="Slash Infotech social link" className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white/70 transition hover:border-[#2563EB] hover:text-white"><Icon size={16} /></a>)}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">{services.map((service) => <Link key={service.slug} href={`/services/${service.slug}`} className="hover:text-white">{service.title}</Link>)}</div>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">{navLinks.slice(1).map((link) => <Link key={link.href} href={link.href} className="hover:text-white">{link.label}</Link>)}<Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link href="/terms" className="hover:text-white">Terms</Link><Link href="/cookies" className="hover:text-white">Cookies</Link></div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm leading-7 text-white/65"><span>{siteConfig.address}</span><a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a><a href={`tel:${siteConfig.phone}`} className="hover:text-white">{siteConfig.phone}</a></div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">Copyright 2026 Slash Infotech. All rights reserved.</div>
    </footer>
  );
}


