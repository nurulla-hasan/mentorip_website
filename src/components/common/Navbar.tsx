/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types/category.type";
import {
  Search,
  User,
  Home,
  Info,
  Users,
  Briefcase,
  Phone,
  Image as ImageIcon,
  Menu,
  LogOut,
  Moon,
  Sun,
} from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { CurrentUser } from "@/types/user.type";
import { getCurrentUser, logOut } from "@/services/auth";
import { getInitials } from "@/lib/utils";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { getAllPosts } from "@/services/post";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Our Clients", href: "/clients", icon: Users },
  { name: "Service & Practices", href: "/services", icon: Briefcase },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Team of Lawyers", href: "/team-of-lawyers", icon: Users },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
];

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

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setCurrentUser(currentUser);
    };
    const fetchPosts = async () => {
      const res = await getAllPosts({ limit: "100" });
      if (res?.success) {
        setAllPosts(res.data);
      }
    };

    fetchUser();
    fetchPosts();

    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchDialogOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const isLoggedIn = Boolean(currentUser);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-[1920px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Left: LOGO */}
        <div className="flex items-center gap-4">
          {mounted ? (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] flex flex-col">
                <SheetHeader className="border-b shrink-0">
                  <SheetTitle className="text-left font-bold text-primary">
                    MENTOR IP
                  </SheetTitle>
                </SheetHeader>
                <Tabs
                  defaultValue="menu"
                  className="w-full flex flex-col flex-1"
                >
                  <div className="px-4 pb-4 border-b shrink-0">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="menu">Navigation</TabsTrigger>
                      <TabsTrigger value="categories">Categories</TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="p-4">
                    <TabsContent
                      value="menu"
                      className="mt-0 flex flex-col space-y-1"
                    >
                      {navLinks.map((link) => {
                        const isActive =
                          link.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(link.href);
                        return (
                          <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                              isActive
                                ? "bg-primary/5 text-primary"
                                : "text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted"
                            }`}
                          >
                            <link.icon
                              className={`w-4 h-4 ${
                                isActive
                                  ? "text-primary"
                                  : "text-muted-foreground"
                              }`}
                            />
                            {link.name}
                          </Link>
                        );
                      })}
                      {isLoggedIn && (
                        <Link
                          href="/profile"
                          className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                            pathname === "/profile"
                              ? "bg-primary/5 text-primary"
                              : "text-foreground hover:text-primary dark:hover:text-primary hover:bg-muted"
                          }`}
                        >
                          <Avatar className="w-5 h-5">
                            <AvatarImage
                              src={currentUser?.image}
                              alt={currentUser?.image}
                            />
                            <AvatarFallback className="text-[8px]">
                              {getInitials(currentUser?.name || "")}
                            </AvatarFallback>
                          </Avatar>
                          Profile
                        </Link>
                      )}
                    </TabsContent>
                    <TabsContent value="categories">
                      <Sidebar initialCategories={initialCategories} />
                    </TabsContent>
                  </div>
                </Tabs>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
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

        {/* Center: Navigation Menu (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium flex items-center gap-1.5 px-3 py-2 rounded-md transition-all relative ${
                  isActive
                    ? "bg-primary/5 text-primary"
                    : "text-muted-foreground hover:text-primary dark:hover:text-primary hover:bg-muted"
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

        {/* Right: Search & User */}
        <div className="flex items-center justify-end space-x-2">
          {/* Search */}
          {/* Mobile Search Trigger */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchDialogOpen(true)}
            className="md:hidden rounded-full hover:bg-muted text-muted-foreground hover:text-primary"
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Search Trigger (Premium Command Palette) */}
          <button
            onClick={() => setSearchDialogOpen(true)}
            className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/20 text-xs font-semibold cursor-pointer relative group backdrop-blur-xs"
          >
            <Search className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
            <span className="tracking-wider text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-bold uppercase text-[10px]">Search</span>
            <span className="flex items-center justify-center bg-background/80 border border-border/50 text-[9px] font-bold px-1 py-0.5 rounded text-muted-foreground/80 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 font-mono">
              ⌘K
            </span>
          </button>

          <CommandDialog 
            open={searchDialogOpen} 
            onOpenChange={setSearchDialogOpen}
            className="bg-background/95 backdrop-blur-md border border-primary/20 shadow-2xl"
          >
            <CommandInput 
              placeholder="Search across all intellectual property assets..." 
              value={searchQuery}
              onValueChange={(v) => setSearchQuery(v)}
              className="font-medium tracking-wide placeholder:text-muted-foreground/60 focus:ring-primary/20"
            />
            <CommandList className="scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent p-2">
              <CommandEmpty className="py-6 text-center text-muted-foreground text-xs font-medium tracking-wide">
                No legal resources match your search.
              </CommandEmpty>
              
              {searchQuery.trim() !== "" && (
                <CommandGroup heading="Intellectual Property Articles">
                  {allPosts.map((post: any) => (
                    <CommandItem
                      key={post.slug}
                      value={post.title}
                      onSelect={() => {
                        router.push(`/category/${post.category?.slug || "all"}/${post.slug}`);
                        setSearchDialogOpen(false);
                      }}
                      className="flex items-center gap-3.5 p-2.5 cursor-pointer hover:bg-primary/5 rounded-xl transition-all duration-200 data-[selected=true]:bg-primary/10 group mb-1 border border-transparent hover:border-primary/10"
                    >
                      {post.coverImage && (
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-muted/50 border border-border/50">
                          <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      )}
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate tracking-wide leading-tight">
                          {post.title}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-black text-primary/80 uppercase tracking-widest bg-primary/5 px-1.5 py-0.5 rounded">
                            {post.category?.name || "Uncategorized"}
                          </span>
                          {post.readTime && (
                            <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest">
                              • {post.readTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </CommandDialog>
          {/* User Dropdown */}
          {mounted ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button type="button" aria-label="User menu">
                  <Avatar className="size-9 border">
                    <AvatarImage
                      src={currentUser?.image}
                      alt={currentUser?.name}
                    />
                    <AvatarFallback>
                      {getInitials(currentUser?.name || "User")}
                    </AvatarFallback>
                  </Avatar>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60" align="end">
                {isLoggedIn ? (
                  <>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold tracking-wider">
                          {currentUser?.name}
                        </p>
                        <p className="text-xs text-muted-foreground tracking-widest">
                          {currentUser?.email}
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer uppercase text-xs tracking-wider"
                    >
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 w-full"
                      >
                        <User className="text-primary w-4 h-4" />
                        <span>View Profile</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-semibold">
                          Welcome to MentorIP
                        </p>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                          Security for your Innovation
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer uppercase text-xs tracking-wider"
                    >
                      <Link href="/auth/login">
                        <LogOut className="rotate-180 text-primary" />
                        <span>Log In</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      asChild
                      className="cursor-pointer uppercase text-xs tracking-wider"
                    >
                      <Link href="/auth/register">
                        <Users className="text-primary" />
                        <span>Register Account</span>
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}

                <DropdownMenuSeparator />
                <div className="flex items-center justify-between px-2 py-1.5 focus:bg-accent focus:text-accent-foreground select-none">
                  <div className="flex items-center gap-2">
                    {theme === "dark" ? (
                      <Moon className="h-4 w-4 text-blue-400" />
                    ) : (
                      <Sun className="h-4 w-4 text-amber-500" />
                    )}
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Dark Mode
                    </span>
                  </div>
                  <Switch
                    className="scale-75"
                    checked={theme === "dark"}
                    onCheckedChange={(checked) =>
                      setTheme(checked ? "dark" : "light")
                    }
                  />
                </div>

                {isLoggedIn && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={async () => {
                        await logOut();
                        setCurrentUser(null);
                        router.refresh();
                      }}
                      className="text-red-500 focus:text-red-500 cursor-pointer font-bold text-xs uppercase tracking-[0.2em]"
                    >
                      <LogOut />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Avatar className="size-9 border">
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </header>
  );
}
