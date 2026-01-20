import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug } from "@/services/category";
import { format } from "date-fns";

interface CategorySectionProps {
  categorySlug: string;
}

export async function CategorySection({ categorySlug }: CategorySectionProps) {
  const response = await getCategoryBySlug(categorySlug, { limit: "10" });
  
  if (!response?.success || !response.data) return null;
  
  const category = response.data;
  const categoryPosts = category.posts || [];

  return (
    <section className="py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{category.name}</h2>
            <div className="w-2 h-2 rounded-full bg-green-500 mb-1" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed font-medium">
            {category.description}
          </p>
        </div>
        <Link href={`/category/${categorySlug}`}>
          <Button variant="outline" size="sm" className="rounded-full border-slate-200 dark:border-slate-800 font-bold text-[10px] uppercase tracking-widest h-9 px-5 group">
            View {category.name} <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Horizontal List */}
      <div className="relative group/scroll">
        <div className="flex overflow-x-auto gap-4 pb-6 no-scrollbar snap-x scroll-smooth">
          {categoryPosts.length > 0 ? (
            categoryPosts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/category/${categorySlug}/${post.slug}`}
                className="shrink-0 w-[340px] snap-start group bg-card rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                   {post.coverImage ? (
                     <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-slate-200 dark:text-slate-800 font-black text-2xl uppercase opacity-20">
                        {category.name}
                     </div>
                   )}
                   <Badge className="absolute bottom-2 right-2 bg-black/60 text-[9px] h-4 px-1 border-0">{post.readTime || "5 min read"}</Badge>
                </div>
                <div className="space-y-3 p-4">
                   <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-slate-50 dark:bg-slate-800 border flex items-center justify-center">
                         <Image src="/next.svg" alt="Icon" width={10} height={10} className="opacity-50 dark:invert" />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Admin</span>
                   </div>
                   <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight line-clamp-2 h-10 group-hover:text-primary transition-colors">
                      {post.title}
                   </h3>
                   <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-800/50">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        {format(new Date(category.createdAt || "2026-01-20T10:00:00Z"), "MMM d, yyyy")}
                      </span>
                      <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                   </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="w-full p-12 text-center bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-dashed border-slate-100 dark:border-slate-800">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Coming soon: posts for {category.name}</p>
            </div>
          )}
        </div>
        
        {/* Right Gradient/Arrow hint for scroll */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-12 bg-linear-to-l from-white dark:from-slate-950 to-transparent pointer-events-none opacity-0 group-hover/scroll:opacity-100 transition-opacity" />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border shadow-lg flex items-center justify-center opacity-0 group-hover/scroll:opacity-100 transition-opacity translate-x-4 group-hover/scroll:translate-x-0 pointer-events-none">
           <ChevronRight className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </section>
  );
}
