
import { Metadata } from "next";
import { getAllPosts } from "@/services/post";
import { getAllCategories } from "@/services/category";
import { LatestNews } from "@/components/home/LatestNews";
import { CategorySection } from "@/components/home/CategorySections";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { sortCategories } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "MentorIP | Global Intellectual Property Law Firm in Bangladesh",
  description: "MentorIP is a leading international IP law firm specializing in Trademarks, Patents, Copyrights, and Industrial Designs with global liaison offices.",
  keywords: ["Intellectual Property", "IP Law Firm", "Bangladesh", "Trademarks", "Patents", "Copyright", "MentorIP", "Legal Services"],
  openGraph: {
    title: "MentorIP | Global Intellectual Property Law Firm",
    description: "Protecting ideas and empowering brands with world-class IP legal services.",
    type: "website",
    siteName: "MentorIP",
  },
  twitter: {
    card: "summary_large_image",
    title: "MentorIP | Global Intellectual Property Law Firm",
    description: "Protecting ideas and empowering brands with world-class IP legal services.",
  }
};

export default async function Home() {
  const response = await getAllPosts({ page: "1", limit: "5", isFeatured: "true" });
  const allPosts = response?.success ? response.data : [];

  const catResponse = await getAllCategories();
  const allCategories = catResponse?.success ? sortCategories(catResponse.data) : [];

  const heroPost = allPosts[0];
  const widePost = allPosts[1];
  const sidePosts = allPosts.slice(2, 5);

  return (
    <div className="space-y-12 focus:outline-none">
      {/* Mobile/Tablet Hero Section (Full-bleed Hero) */}
      <div className="xl:hidden -mx-4 -mt-4 md:-mx-8 md:-mt-8 px-6 py-12 bg-linear-to-b from-primary/15 via-primary/5 to-transparent flex flex-col gap-5 relative overflow-hidden border-b border-primary/20">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full -mr-10 -mt-10 blur-2xl" />
        
        <span className="text-primary font-bold text-xs md:text-sm uppercase tracking-widest">
          Welcome to MentorIP
        </span>
        <h1 className="text-2xl md:text-4xl font-black text-foreground leading-tight tracking-wide uppercase">
          Protecting your <span className="text-primary">Ideas</span>. Empowering your <span className="text-primary">Brands</span>.
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed max-w-xl">
          Premier international Intellectual Property law firm. We secure your innovations, trademarks, and creative works globally with boutique precision.
        </p>
        <div className="flex gap-3 mt-2 max-w-md">
          <Link href="/contact" className="flex-1">
            <Button className="w-full">
              Get Started
            </Button>
          </Link>
          <Link href="/services" className="flex-1">
            <Button variant="outline" className="w-full">
              Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Hero Section - Takes up 2 columns */}
        <div className="xl:col-span-2 space-y-6">
          {!response?.success ? (
            <div className="p-6 rounded-2xl border border-destructive/20 bg-destructive/5 text-destructive flex flex-col justify-center items-center gap-3 text-center min-h-[300px]">
              <div className="w-2 h-2 rounded-full bg-destructive animate-ping" />
              <p className="text-sm font-semibold uppercase tracking-widest">
                Error loading featured post.
              </p>
            </div>
          ) : heroPost ? (
            <Link
              href={`/category/${heroPost.category?.slug}/${heroPost.slug}`}
            >
              <Card className="rounded-2xl group cursor-pointer p-4 gap-4 overflow-hidden">
                {/* Visual Header */}
                <div className="relative aspect-16/10 md:aspect-24/8 w-full rounded-xl overflow-hidden shadow-xl shadow-primary/10">
                  {heroPost.coverImage ? (
                    <>
                      <Image
                        src={heroPost.coverImage}
                        alt={heroPost.title}
                        fill
                        priority
                        sizes="(max-width: 1280px) 100vw, 66vw"
                        className="object-cover"
                      />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/80 to-primary/60" />
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at top right, var(--color-primary) / 0.4, transparent 50%)",
                        }}
                      />
                    </>
                  )}

                  <div className="absolute top-6 left-6 opacity-10 rotate-12 pointer-events-none">
                    <div className="w-24 h-24 border-12 border-foreground rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-foreground rounded-sm" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-6 text-center select-none">
                    <Badge className="absolute bottom-4 right-4 bg-background/80 hover:bg-background/90 text-foreground backdrop-blur-md border border-border/50 px-2 py-0.5 text-[10px] font-bold">
                      <Clock className="w-3.5 h-3.5 mr-1 text-muted-foreground" />{" "}
                      {heroPost.readTime?.split(" ")[0]} min read
                    </Badge>
                  </div>
                </div>

                <CardContent className="px-1 py-1 gap-2.5 flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors tracking-wider line-clamp-2 max-w-3xl">
                      {heroPost.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm line-clamp-3 font-medium leading-relaxed max-w-2xl">
                    {heroPost.subtitle}
                  </p>
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground gap-3 mt-1">
                    <span className="text-muted-foreground/80 dark:text-muted-foreground">
                      By MENTORiP
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>
                      {format(
                        new Date(heroPost.createdAt || "2026-01-20T10:00:00Z"),
                        "MMM d, yyyy",
                      )}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-primary tracking-widest">
                      {heroPost.category?.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : null}

          {/* Wide Featured Post */}
          {!response?.success ? (
            <div className="mt-4 p-4 rounded-2xl border border-destructive/20 bg-destructive/5 text-destructive flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-destructive animate-ping" />
              <p className="text-xs font-semibold uppercase tracking-widest">
                Error loading wide featured post.
              </p>
            </div>
          ) : widePost ? (
            <Link
              href={`/category/${widePost.category?.slug}/${widePost.slug}`}
              className="block group mt-4"
            >
              <Card className="rounded-2xl p-3 overflow-hidden hover:bg-muted/50 transition-all duration-500 gap-0">
                <CardContent className="px-1 py-0">
                  <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="w-full md:w-2/6 aspect-16/10 relative rounded-xl overflow-hidden shadow-md bg-muted">
                      {widePost.coverImage && (
                        <Image
                          src={widePost.coverImage}
                          alt={widePost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 25vw"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                          {widePost.category?.name}
                        </span>
                        <div className="w-px h-3 bg-muted-foreground/30" />
                        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                          {format(
                            new Date( 
                              widePost.createdAt || "2026-01-20T10:00:00Z",
                            ),
                            "MMM dd, yyyy",
                          )}
                        </p>
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-foreground tracking-wider group-hover:text-primary transition-colors line-clamp-2">
                        {widePost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed mt-1">
                        {widePost.subtitle}
                      </p>
                      <div className="flex items-center gap-3 pt-1">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 p-1 border rounded-full bg-muted flex items-center justify-center">
                            <Image
                              src="/favicon.ico"
                              alt="M"
                              width={10}
                              height={10}
                              className="w-auto h-auto"
                            />
                          </div>
                          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            MENTORIP
                          </span>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-[10px] font-semibold border-border text-muted-foreground px-2 py-0.5"
                        >
                          {widePost.readTime?.split(" ")[0]} min read
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : null}
        </div>

        {/* Side Posts List */}
        <div className="flex flex-col justify-between h-full gap-6">
          {!response?.success ? (
            <div className="flex-1 p-6 rounded-2xl border border-destructive/20 bg-destructive/5 text-destructive flex flex-col justify-center items-center gap-3 text-center">
              <div className="w-2 h-2 rounded-full bg-destructive animate-ping" />
              <p className="text-xs font-semibold uppercase tracking-widest">
                Error loading side posts.
              </p>
            </div>
          ) : (
            [0, 1, 2].map((index) => {
              const post = sidePosts[index];
              if (!post) return null;
              return (
                <Link
                  key={post.slug}
                  href={`/category/${post.category?.slug}/${post.slug}`}
                  className="flex flex-col flex-1 group"
                >
                  <Card className="relative flex-1 transition-all duration-500 rounded-2xl overflow-hidden p-5 flex flex-col justify-between">
                    <CardContent className="p-0 flex flex-col justify-between h-full gap-4">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-20 h-20 rounded-2xl shrink-0 relative overflow-hidden flex items-center justify-center border-2 border-background shadow-sm bg-muted">
                            {post.coverImage ? (
                              <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                priority
                                sizes="80px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="text-center font-bold leading-[0.8] text-primary/20">
                                <span className="text-[12px]">MENTOR</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1 space-y-1.5">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">
                              {post.category?.name}
                            </p>
                            <h3 className="text-base md:text-lg font-semibold text-foreground tracking-wider group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed mt-1">
                          {post.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                            {format(
                              new Date(
                                post.createdAt || "2026-01-20T10:00:00Z",
                              ),
                              "MMM dd, yyyy",
                            )}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-[10px] font-bold px-2 py-0.5 border-0 rounded-lg bg-muted text-muted-foreground"
                        >
                          {post.readTime?.split(" ")[0]} min read
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })
          )}
        </div>
      </div>

      {/* Latest News Section */}
      <LatestNews />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Category Specific Sections */}
      <div className="space-y-4">
        {allCategories.map((category) => (
          <CategorySection key={category._id} categorySlug={category.slug} />
        ))}
      </div>
    </div>
  );
}
