/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/services/post";
import type { PostDetail } from "@/types/post.type";
import { format } from "date-fns";

interface NewsListProps {
  initialPosts: PostDetail[];
  initialMeta: {
    total: number;
    page: number;
    limit: number;
    totalPage: number;
  };
}

export function NewsList({ initialPosts, initialMeta }: NewsListProps) {
  const [posts, setPosts] = useState<PostDetail[]>(initialPosts);
  const [meta, setMeta] = useState(initialMeta);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (loading || meta.page >= meta.totalPage) return;

    setLoading(true);
    try {
      const nextPage = meta.page + 1;
      const response = await getAllPosts({ 
        page: nextPage.toString(), 
        limit: meta.limit.toString() 
      });

      if (response.success) {
        setPosts((prev) => [...prev, ...response.data]);
        setMeta(response.meta);
      }
    } catch (error) {
      console.error("Failed to load more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const hasMore = meta.page < meta.totalPage;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/category/${post.category?.slug}/${post.slug}`}
            className="group flex flex-col bg-card rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
          >
            {/* Image Container with Badge */}
            <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
              {post.coverImage ? (
                <Image 
                  src={post.coverImage} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-400">
                  <Image src="/next.svg" alt="No Image" width={40} height={40} className="opacity-20 dark:invert" />
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <Badge className="absolute bottom-2 right-2 bg-black/60 hover:bg-black/80 text-[10px] h-5 px-1.5 backdrop-blur-md border-0 text-white font-medium">
                <Clock className="w-2.5 h-2.5 mr-1" /> {post.readTime || "2 min"}
              </Badge>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-slate-50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800 flex items-center justify-center">
                  <Image src="/next.svg" alt="IP" width={12} height={12} className="opacity-70 dark:invert" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                  Admin
                </span>
              </div>

              <h3 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 leading-tight mb-4 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                {post.title}
              </h3>

              <div className="pt-4 border-t border-slate-50 dark:border-slate-800/50 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5 italic font-medium lowercase first-letter:uppercase">
                  <Calendar className="w-3 h-3" /> 
                  {(post as any).createdAt ? format(new Date((post as any).createdAt), "MMM d, yyyy") : "Jan 20, 2026"}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-primary/70">{post.category?.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {hasMore ? (
        <div className="flex justify-center pt-6">
          <Button 
            onClick={handleLoadMore}
            disabled={loading}
            variant="outline" 
            className="h-10 px-8 rounded-full border-slate-200 dark:border-slate-800 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all flex items-center gap-2"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? "Loading..." : "Load More Posts"}
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center pt-10 pb-4 space-y-2 opacity-50">
           <div className="h-px w-20 bg-slate-200 dark:bg-slate-800" />
           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
             You&apos;ve reached the end of the list
           </p>
        </div>
      )}
    </>
  );
}
