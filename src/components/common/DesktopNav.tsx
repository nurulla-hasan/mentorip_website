/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { NavLink } from "@/constants/nav-links";

interface DesktopNavProps {
  navLinks: NavLink[];
  pathname: string;
  setPortalDialogOpen: (open: boolean) => void;
}

export function DesktopNav({
  navLinks,
  pathname,
  setPortalDialogOpen,
}: DesktopNavProps) {
  return (
    <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
      {navLinks.map((link) => {
        const isActive =
          link.href === "/"
            ? pathname === "/"
            : pathname.startsWith(link.href);

        if ((link as any).isCTA) {
          return (
            <button
              key={link.name}
              onClick={() => setPortalDialogOpen(true)}
              className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-bold transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 ml-2 cursor-pointer"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          );
        }

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-medium flex items-center gap-1.5 px-3 py-2 rounded-md transition-all relative ${
              isActive
                ? "bg-primary/5 text-primary"
                : "text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted"
            }`}
          >
            <link.icon
              className={`w-4 h-4 ${isActive ? "text-primary" : ""}`}
            />
            <span className="hidden xl:inline">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
