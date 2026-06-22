/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { CurrentUser } from "@/types/user.type";
import type { Category } from "@/types/category.type";
import { getCurrentUser, logOut } from "@/services/auth";
import { getAllPosts } from "@/services/post";
import { navLinks } from "@/constants/nav-links";
import { MobileSheet } from "@/components/common/MobileSheet";
import { DesktopNav } from "@/components/common/DesktopNav";
import { SearchCommand } from "@/components/common/SearchCommand";
import { UserDropdown } from "@/components/common/UserDropdown";

export function Navbar({
  initialCategories = [],
}: {
  initialCategories?: Category[];
}) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [searchDialogOpen, setSearchDialogOpen] = useState(false);
  const [portalDialogOpen, setPortalDialogOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setCurrentUser(currentUser);
    };

    fetchUser();

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchDialogOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    setMounted(true);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Server-side search with debounce
  useEffect(() => {
    if (!searchQuery.trim()) {
      setAllPosts([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await getAllPosts({ searchTerm: searchQuery });
        if (res?.success) {
          setAllPosts(res.data);
        }
      } catch (error) {
        console.error("Search error:", error);
      } finally {
        setIsSearching(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const isLoggedIn = Boolean(currentUser);

  const handleLogout = async () => {
    await logOut();
    setCurrentUser(null);
    router.refresh();
  };

  const handleSelectPost = (slug: string) => {
    router.push(
      `/category/${allPosts.find((p: any) => p.slug === slug)?.category?.slug || "all"}/${slug}`,
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Left: LOGO + Mobile Sheet */}
        <div className="flex items-center gap-4">
          {mounted ? (
            <MobileSheet
              initialCategories={initialCategories}
              currentUser={currentUser}
              isLoggedIn={isLoggedIn}
              pathname={pathname}
              router={router}
              setCurrentUser={setCurrentUser}
              setPortalDialogOpen={setPortalDialogOpen}
              navLinks={navLinks}
            />
          ) : (
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon />
            </Button>
          )}

          <Link href="/" className="hidden lg:flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MENTOR IP"
              width={180}
              height={50}
              priority
              className="h-10 w-auto dark:invert"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <DesktopNav
          navLinks={navLinks}
          pathname={pathname}
          setPortalDialogOpen={setPortalDialogOpen}
        />

        {/* Right: Search & User */}
        <div className="flex items-center justify-end space-x-2">
          <SearchCommand
            searchDialogOpen={searchDialogOpen}
            setSearchDialogOpen={setSearchDialogOpen}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            allPosts={allPosts}
            isSearching={isSearching}
            onSelectPost={handleSelectPost}
          />

          <UserDropdown
            currentUser={currentUser}
            isLoggedIn={isLoggedIn}
            mounted={mounted}
            theme={theme}
            setTheme={setTheme}
            onLogout={handleLogout}
          />
        </div>
      </div>

      {/* Client Portal Dialog */}
      <Dialog open={portalDialogOpen} onOpenChange={setPortalDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-black text-primary tracking-tight">
              Access Client Portal
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed pt-2 space-y-3 text-foreground">
              <span className="block">
                For a complete view of your IP portfolio—and for details on how to renew all IP rights through one login in just a few clicks—please access the Client Portal.
              </span>
              <span className="block">
                Please use this link for a full overview of your IP portfolio and renewal instructions:
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end pt-2">
            <a
              href="https://app.mentorip.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="font-bold tracking-wider">
                Access Client Portal
                <ChevronRight/>
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
