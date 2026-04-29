import { getAllPosts } from "@/services/post";
import { NewsList } from "./NewsList";

export async function LatestNews() {
  const response = await getAllPosts({ page: "1", limit: "8" });

  const initialPosts = response?.success ? response.data : [];
  const initialMeta = response?.success ? response.meta : {
    total: 0,
    page: 1,
    limit: 8,
    totalPage: 0
  };

  return (
    <section className="space-y-6 py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border pb-6">
        <div className="space-y-1.5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Latest <span className="text-primary">News</span>
          </h2>
          <p className="text-sm text-muted-foreground">
            Recent publications and critical legal updates from our experts.
          </p>
        </div>
        <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest select-none">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Live Updates
        </div>
      </div>

      <NewsList initialPosts={initialPosts} initialMeta={initialMeta} />
    </section>
  );
}
