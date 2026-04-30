import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCategoryBySlug } from "@/services/category";
import { CategoryCarousel } from "./CategoryCarousel";

interface CategorySectionProps {
  categorySlug: string;
}

export async function CategorySection({ categorySlug }: CategorySectionProps) {
  const response = await getCategoryBySlug(categorySlug, { limit: "10" });

  if (!response?.success || !response.data) return null;

  const category = response.data;
  const categoryPosts = category.posts || [];
  console.log(categoryPosts);

  return (
    <section className="py-12 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl font-bold text-foreground">
              {category.name}
            </h2>
          </div>
          <p className="text-md text-muted-foreground max-w-3xl">
            {category.description}
          </p>
        </div>
        <Link href={`/category/${categorySlug}`}>
          <Button variant="link">
            View {category.name}{" "}
            <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>

      {/* Carousel Layout */}
      <div>
        {categoryPosts.length > 0 ? (
          <CategoryCarousel
            posts={categoryPosts}
            categoryName={category.name}
            categorySlug={categorySlug}
          />
        ) : (
          <div className="w-full p-12 text-center bg-muted/50 rounded-2xl border-2 border-dashed border-border">
            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
              Coming soon: posts for {category.name}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
