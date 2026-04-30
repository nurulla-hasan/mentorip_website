/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import Autoplay from "embla-carousel-autoplay";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface CategoryCarouselProps {
  posts: any[];
  categoryName: string;
  categorySlug: string;
}

export function CategoryCarousel({
  posts,
  categoryName,
  categorySlug,
}: CategoryCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
        
      }}
    >
      <CarouselContent className="-ml-4">
        {posts.map((post) => (
          <CarouselItem
            key={post.slug}
            className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <Link
              href={`/category/${categorySlug}/${post.slug}`}
              className="group bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden h-full flex flex-col"
            >
              <div className="relative w-full h-40 bg-muted overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover contrast-[0.95] brightness-[0.98]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-bold text-2xl uppercase opacity-20">
                    {categoryName}
                  </div>
                )}
                {post.readTime && (
                  <Badge
                    variant="secondary"
                    className="absolute top-2 right-2 text-[10px]"
                  >
                    {post.readTime.split(" ")[0]} min read
                  </Badge>
                )}
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  <span className="text-[10px] font-medium uppercase tracking-widest text-primary">
                    {categoryName}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 tracking-wider">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1 leading-relaxed">
                  {post.subtitle}
                </p>
                <div className="flex items-center justify-between gap-2 text-[10px] text-muted-foreground pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/favicon.ico"
                      alt="M"
                      width={25}
                      height={25}
                      className="object-cover rounded-full p-1 border"
                    />
                    <span className="font-medium truncate max-w-[120px]">
                      MENTORIP
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      {format(
                        new Date(post.createdAt || "2026-01-20T10:00:00Z"),
                        "MMM dd, yyyy"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {posts.map((_, index) => (
          <button
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? "w-8 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
