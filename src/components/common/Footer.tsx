"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 md:mt-24 bg-linear-to-b from-primary/10 via-background to-background border-t border-primary/20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.png"
                alt="MENTOR IP"
                width={180}
                height={45}
                className="h-10 w-auto dark:invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              A premier international Intellectual Property law firm protecting ideas and empowering brands with administrative precision.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/mentoripofficial/" target="_blank" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/in/mentorip/" target="_blank" className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Clients", href: "/clients" },
                { name: "Services", href: "/services" },
                { name: "Team of Lawyers", href: "/team-of-lawyers" },
                { name: "Gallery", href: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-all mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: IP Resources */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              IP Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "DPDT (Bangladesh)", url: "https://dpdt.gov.bd/" },
                { name: "WIPO (International)", url: "https://www.wipo.int/" },
                { name: "USPTO (United States)", url: "https://www.uspto.gov/" },
                { name: "IP India (India)", url: "https://ipindia.gov.in/" },
                { name: "Copyright Office BD", url: "https://copyrightoffice.gov.bd/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.url}
                    target="_blank"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-muted-foreground leading-relaxed">
                  Jiban Bima Bhaban (1st Floor), 121 Motijheel Commercial Area, Dhaka-1000, Bangladesh.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <Link href="tel:+8801760308093" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  +880 1760 308093
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <Link href="mailto:info@mentorip.com" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  info@mentorip.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
            &copy; {currentYear} MENTOR IP LAW FIRM. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2 group/credit cursor-pointer">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Created by</p>
            <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors relative">
              SmartEdge Technologies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
