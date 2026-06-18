"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  ExternalLink,
  X,
} from "lucide-react";

export function Footer() {
  const [showWeChat, setShowWeChat] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-16 md:mt-24 bg-linear-to-b from-primary/10 via-background to-background border-t border-primary/20">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
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
              A premier international Intellectual Property law firm protecting
              ideas and empowering brands with administrative precision.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/mentoripofficial/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mentorip/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://vm.tiktok.com/ZS9jqjHuUsnSP-PT32U/"
                target="_blank"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
              <button
                onClick={() => setShowWeChat(true)}
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-pointer"
                title="Scan WeChat QR Code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.7 4.69l-.7 2.31 2.6-1.37c.81.3 1.68.5 2.6.56l.02-.01c.22-.02.44-.04.66-.08-.15-.42-.24-.86-.24-1.32 0-2.79 2.68-5.08 6.39-5.43-.72-2.24-3.36-3.85-6.53-3.85zM8 7.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                  <path d="M22 14c0-3.31-3.36-6-7.5-6S7 10.69 7 14s3.36 6 7.5 6c.86 0 1.69-.12 2.45-.34l2.55 1.36-.7-2.31C19.92 17.56 21 15.89 21 14zM13 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm3 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
                </svg>
              </button>
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

          {/* Col 3: Practice Areas */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              Litigation
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "IP Litigation",
                  href: "/practice-areas/ip-litigation",
                },
                {
                  name: "Criminal Litigation",
                  href: "/practice-areas/criminal-litigation",
                },
                {
                  name: "Civil & Commercial Litigation",
                  href: "/practice-areas/civil-commercial-litigation",
                },
                {
                  name: "Disputes & Arbitration",
                  href: "/practice-areas/disputes-arbitration",
                },
                {
                  name: "Anti Counterfeiting",
                  href: "/practice-areas/anti-counterfeiting",
                },
                {
                  name: "Maritime & Admiralty Law",
                  href: "/practice-areas/maritime-admiralty-law",
                },
                {
                  name: "Insolvency and Bankruptcy",
                  href: "/practice-areas/insolvency-bankruptcy",
                },
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

          {/* Col 4: IP Resources */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              IP Resources
            </h4>
            <ul className="space-y-3">
              {[
                { name: "DPDT (Bangladesh)", url: "https://dpdt.gov.bd/" },
                { name: "WIPO (International)", url: "https://www.wipo.int/" },
                {
                  name: "USPTO (United States)",
                  url: "https://www.uspto.gov/",
                },
                { name: "IP India (India)", url: "https://ipindia.gov.in/" },
                {
                  name: "Copyright Office BD",
                  url: "https://copyrightoffice.gov.bd/",
                },
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

          {/* Col 5: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-foreground border-l-2 border-primary pl-3">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-muted-foreground leading-relaxed">
                  Suit#501, Concord Tower 113 Kazi Nazrul Islam Avenue,
                  Dhaka-1000 Bangladesh.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-muted-foreground leading-relaxed">
                  <span className="text-foreground font-bold block mb-0.5">
                    Court Office
                  </span>
                  Room#110 (old), Supreme Court Bar Association Building, Dhaka,
                  Bangladesh.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div className="flex flex-col gap-1.5">
                  <Link
                    href="tel:+8801760308093"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1760 308093
                  </Link>
                  <Link
                    href="tel:+880241032320"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Tel: 02-410 32 320
                  </Link>
                  <Link
                    href="tel:+8801733792305"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Cell: 01733792305
                  </Link>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <Link
                  href="mailto:info@mentorip.com"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
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
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">
              Created by
            </p>
            <span className="text-[10px] font-bold text-foreground uppercase tracking-[0.2em] group-hover:text-primary transition-colors relative">
              SmartEdge Technologies
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </span>
          </div>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showWeChat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setShowWeChat(false)}
        >
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowWeChat(false)}
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="text-center space-y-4">
              <h3 className="text-lg font-bold text-foreground">Scan to Connect on WeChat</h3>
              <p className="text-sm text-muted-foreground">Scan this QR code to add MENTOR IP on WeChat</p>
              <div className="relative w-56 h-56 mx-auto rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/wechat.jpeg"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Or search WeChat ID: <span className="font-mono font-semibold text-foreground">wxid_8cbrabldnseu22</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
