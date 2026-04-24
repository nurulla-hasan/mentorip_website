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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-black text-foreground tracking-tight">{category.name}</h2>
            <div className="w-2 h-2 rounded-full bg-green-500 mb-1" />
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl leading-relaxed font-medium">
            {category.description}
          </p>
        </div>
        <Link href={`/category/${categorySlug}`}>
          <Button variant="outline" size="sm" className="rounded-full border-border font-bold text-[10px] uppercase tracking-widest h-9 px-5 group">
            View {category.name} <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="relative group">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoryPosts.length > 0 ? (
            categoryPosts.slice(0, 4).map((post) => (
              <Link 
                key={post.slug} 
                href={`/category/${categorySlug}/${post.slug}`}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                   {post.coverImage ? (
                     <Image 
                       src={post.coverImage} 
                       alt={post.title} 
                       fill 
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                       className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-black text-2xl uppercase opacity-20">
                        {category.name}
                     </div>
                   )}
                   <Badge className="absolute bottom-2 right-2 bg-black/60 text-[9px] h-4 px-1 border-0">{post.readTime}</Badge>
                </div>
                <div className="space-y-3 p-4">
                   <div className="flex items-center gap-2">
                       <div className="w-5 h-5 rounded-full bg-muted border border-border flex items-center justify-center">
                          <Image src="/next.svg" alt="Icon" width={10} height={10} className="w-auto h-auto opacity-50 dark:invert" />
                       </div>
                       <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Admin</span>
                   </div>
                    <h3 className="font-bold text-sm text-foreground leading-tight line-clamp-2 h-10 group-hover:text-primary transition-colors">
                      {post.title}
                   </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                       <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">
                        {format(new Date(category.createdAt || "2026-01-20T10:00:00Z"), "MMM d, yyyy")}
                      </span>
                      <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                   </div>
                </div>
              </Link>
            ))
          ) : (
             <div className="w-full p-12 text-center bg-muted/50 rounded-2xl border-2 border-dashed border-border">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Coming soon: posts for {category.name}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
