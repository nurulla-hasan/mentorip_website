import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  categorySlug: string;
  imageUrl?: string;
  tags?: string[];
  author?: string;
  date?: string;
  readTime?: string;
  baseHref?: string;
}

export function PostCard({
  title,
  excerpt,
  slug,
  categorySlug,
  imageUrl,
  tags = [],
  author = "MENTORIP, Bangladesh",
  date,
  readTime = "",
  baseHref = "category",
}: PostCardProps) {
  const rootPath = baseHref.startsWith('/') ? baseHref : `/${baseHref}`;
  return (
    <Link href={`${rootPath}/${categorySlug}/${slug}`}>
      <article className="group bg-card rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col">
        {imageUrl && (
          <div className="relative w-full h-40 bg-muted overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300 contrast-[0.95] brightness-[0.98]"
            />
            {readTime && (
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-semibold text-slate-500 flex items-center gap-1 border border-white/20">
                <Clock className="w-2.5 h-2.5" />
                {readTime}
              </div>
            )}
          </div>
        )}

        <div className="p-4 flex-1 flex flex-col">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {tags.slice(0, 1).map((tag, i) => (
                <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-primary/70">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors mb-2 line-clamp-2 leading-tight">
            {title}
          </h3>

          <p className="text-[12px] text-muted-foreground line-clamp-2 mb-4 flex-1 leading-relaxed">
            {excerpt}
          </p>

          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-3 border-t border-slate-50 dark:border-slate-800/50">
            <span className="font-medium truncate max-w-[120px]">{author}</span>
            {date && (
              <div className="flex items-center gap-1 opacity-70">
                <Calendar className="w-2.5 h-2.5" />
                <span>{date}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
