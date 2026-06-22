/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { Menu, Briefcase, ChevronRight, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sidebar } from "@/components/common/Sidebar";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { getInitials } from "@/lib/utils";
import { logOut } from "@/services/auth";
import type { CurrentUser } from "@/types/user.type";
import type { Category } from "@/types/category.type";
import type { NavLink } from "@/constants/nav-links";

interface MobileSheetProps {
  initialCategories: Category[];
  currentUser: CurrentUser | null;
  isLoggedIn: boolean;
  pathname: string;
  router: ReturnType<typeof import("next/navigation").useRouter>;
  setCurrentUser: (user: CurrentUser | null) => void;
  setPortalDialogOpen: (open: boolean) => void;
  navLinks: NavLink[];
}

export function MobileSheet({
  initialCategories,
  currentUser,
  isLoggedIn,
  pathname,
  router,
  setCurrentUser,
  setPortalDialogOpen,
  navLinks,
}: MobileSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] flex flex-col p-0 gap-0"
      >
        <SheetHeader className="p-4 border-b shrink-0 text-left">
          <SheetTitle className="text-left font-bold text-primary">
            MENTOR IP
          </SheetTitle>
          {/* Language Switcher hidden temporarily */}
          {/* <div className="mt-2">
            <LanguageSwitcher />
          </div> */}
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="menu" className="w-full flex flex-col">
            <div className="px-4 py-3 border-b sticky top-0 bg-background z-10">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="menu">Navigation</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
              </TabsList>
            </div>

            <div className="p-2">
              <TabsContent
                value="menu"
                className="mt-0 flex flex-col space-y-1"
              >
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
                        className="flex items-center justify-between gap-3 w-full px-4 py-2 text-sm font-bold rounded-md bg-primary text-primary-foreground shadow-lg shadow-primary/20 mt-4 mb-2 transition-transform active:scale-95 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-4 h-4" />
                          {link.name}
                        </div>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted"
                      }`}
                    >
                      <link.icon
                        className={`w-4 h-4 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      {link.name}
                    </Link>
                  );
                })}
              </TabsContent>
              <TabsContent value="categories">
                <Sidebar initialCategories={initialCategories} />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Mobile Sidebar Footer: User Profile/Auth Section */}
        <div className="shrink-0 border-t p-4 bg-muted/20">
          {isLoggedIn ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-background border shadow-sm transition-all hover:border-primary/30">
                <Avatar className="w-10 h-10 border-2 border-primary/10 shadow-sm">
                  <AvatarImage
                    src={currentUser?.image}
                    alt={currentUser?.name}
                  />
                  <AvatarFallback className="bg-primary/5 text-primary font-bold text-xs">
                    {getInitials(currentUser?.name || "")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-bold text-foreground truncate tracking-tight uppercase">
                    {currentUser?.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate font-medium">
                    {currentUser?.email}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="rounded-xl text-[10px] font-bold uppercase tracking-widest border-primary/10 hover:bg-primary/5 h-10 transition-all active:scale-95"
                >
                  <Link href="/profile">
                    <User className="w-3.5 h-3.5 mr-1.5 text-primary" />
                    Profile
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={async () => {
                    await logOut();
                    setCurrentUser(null);
                    router.refresh();
                  }}
                  className="rounded-xl text-[10px] font-bold uppercase tracking-widest text-destructive hover:bg-destructive/10 h-10 transition-all active:scale-95"
                >
                  <LogOut className="w-3.5 h-3.5 mr-1.5" />
                  Log Out
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Button
                asChild
                className="w-full rounded-xl font-bold uppercase tracking-widest text-[10px] h-11 shadow-lg shadow-primary/20 transition-all active:scale-95"
              >
                <Link href="/auth/login">Login to Account</Link>
              </Button>
              <Button
                variant="ghost"
                asChild
                className="w-full rounded-xl font-bold uppercase tracking-widest text-[10px] h-11 transition-all active:scale-95"
              >
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
