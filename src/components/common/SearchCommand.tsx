/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
// import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";

interface SearchCommandProps {
  searchDialogOpen: boolean;
  setSearchDialogOpen: (open: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  allPosts: any[];
  isSearching: boolean;
  onSelectPost: (slug: string) => void;
}

export function SearchCommand({
  searchDialogOpen,
  setSearchDialogOpen,
  searchQuery,
  setSearchQuery,
  allPosts,
  isSearching,
  onSelectPost,
}: SearchCommandProps) {
  return (
    <>
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
        className="hidden md:flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/20 text-xs font-semibold cursor-pointer relative group backdrop-blur-xs"
      >
        <Search className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
        <span className="tracking-wider text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-bold uppercase text-[10px]">
          Search
        </span>
        <span className="flex items-center justify-center bg-background/80 border border-border/50 text-[9px] font-bold px-1 py-0.5 rounded text-muted-foreground/80 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 font-mono">
          ⌘K
        </span>
      </button>

      {/* Language Switcher hidden temporarily */}
      {/* <div>
        <LanguageSwitcher />
      </div> */}

      <CommandDialog
          open={searchDialogOpen}
          onOpenChange={setSearchDialogOpen}
        >
          <CommandInput
            placeholder="Search across all intellectual property assets..."
            value={searchQuery}
            onValueChange={(v) => setSearchQuery(v)}
            className="font-medium tracking-wide placeholder:text-muted-foreground/60 focus:ring-primary/20"
          />
          <CommandList className="scrollbar-thin scrollbar-thumb-primary/10 scrollbar-track-transparent p-2">
            {isSearching ? (
              <div className="py-6 text-center text-muted-foreground text-xs font-medium tracking-wide flex items-center justify-center gap-2">
                <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                Searching assets...
              </div>
            ) : (
              <CommandEmpty className="py-6 text-center text-muted-foreground text-xs font-medium tracking-wide">
                No legal resources match your search.
              </CommandEmpty>
            )}

            {!isSearching && searchQuery.trim() !== "" && (
              <CommandGroup heading="Intellectual Property Articles">
                {allPosts.map((post: any) => (
                  <CommandItem
                    key={post.slug}
                    value={post.title}
                    onSelect={() => {
                      onSelectPost(post.slug);
                      setSearchDialogOpen(false);
                    }}
                    className="flex items-center gap-3.5 p-2.5 cursor-pointer hover:bg-primary/5 rounded-lg transition-all duration-200 data-[selected=true]:bg-primary/10 group mb-1 border border-transparent hover:border-primary/10"
                  >
                    {post.coverImage && (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-muted/50 border border-border/50">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate tracking-wide leading-tight">
                        {post.title}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-primary/80 uppercase tracking-widest bg-primary/5 px-1.5 py-0.5 rounded">
                          {post.category?.name || "Uncategorized"}
                        </span>
                        {post.readTime && (
                          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
                            • {post.readTime.split(" ")[0]} Min read
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
    </>
  );
}
