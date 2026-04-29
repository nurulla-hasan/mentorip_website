"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Separator } from "../ui/separator";
import { DynamicIcon } from "./DynamicIcon";
import type { Category } from "@/types/category.type";
import { sortCategories } from "@/lib/utils";

export function Sidebar({ initialCategories = [] }: { initialCategories?: Category[] }) {
  const pathname = usePathname();
  const categories = useMemo(() => sortCategories(initialCategories), [initialCategories]);

  const sidebarCategories = useMemo(() => {
    return [
      { name: "All Poast", iconName: "LayoutDashboard", slug: "" },
      ...categories.map((cat) => ({
        name: cat.name,
        iconName: cat.iconName,
        slug: cat.slug,
      })),
    ];
  }, [categories]);

  return (
    <aside className="w-full">
      <div className="px-4 mb-4">
        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Categories</h3>
      </div>
      <div className="flex flex-col space-y-1 mb-6 border-r pr-4">
        {sidebarCategories.map((cat, i) => {
            const href = cat.slug === "" ? "/" : `/category/${cat.slug}`;
            const isActive = cat.slug === "" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link 
                key={i} 
                href={href} 
                className={`text-base font-semibold py-2.5 px-4 rounded-md transition-all group flex items-center justify-between border-l-4 tracking-wider  ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold border-primary" 
                    : "text-muted-foreground hover:bg-primary/5 hover:text-primary border-transparent hover:border-primary"
                }`}
              >
                <div className="flex items-center gap-3 truncate pr-2">
                  <DynamicIcon 
                    name={cat.iconName} 
                    className={`w-4 h-4 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`} 
                  />
                  <span className="truncate">{cat.name}</span>
                </div>
              </Link>
            );
        })}
      </div>
      
      <Separator className="my-4 opacity-50" />
      {/* Footer Info */}
      <div className="px-4 text-[10px] text-muted-foreground space-y-1">
         <p className="font-bold">MENTOR IP APP v1.0</p>
         <p>&copy; MENTOR IP 2025</p>
      </div>
    </aside>
  );
}
