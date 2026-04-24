import { getAllPosts } from "@/services/post";
import { getAllCategories } from "@/services/category";
import { LatestNews } from "./LatestNews";
import { CategorySection } from "./CategorySections";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Clock, MoveRight } from "lucide-react";
import Image from "next/image";
import { format } from "date-fns";
import { NewsletterSection } from "./NewsletterSection";

export async function MainDashboardContent() {
  const response = await getAllPosts({ page: "1", limit: "5" });
  const allPosts = response?.success ? response.data : [];

  const catResponse = await getAllCategories();
  const allCategories = catResponse?.success ? catResponse.data : [];

  const heroPost = allPosts[0];
  const widePost = allPosts[1];
  const sidePosts = allPosts.slice(2, 5);

  return (
    <div className="space-y-12 focus:outline-none">
      {/* Top Hero Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Main Hero Section - Takes up 2 columns */}
        <div className="xl:col-span-2 space-y-">
          {heroPost ? (
            <Link href={`/category/${heroPost.category?.slug}/${heroPost.slug}`}>
              <Card className="px-6 rounded-4xl group cursor-pointer">
                {/* Visual Header */}
                <div className="relative aspect-video w-full rounded-4xl overflow-hidden shadow-2xl shadow-primary/10">
                  {heroPost.coverImage ? (
                    <>
                      <Image 
                        src={heroPost.coverImage} 
                        alt={heroPost.title} 
                        fill 
                        priority
                        sizes="(max-width: 1280px) 100vw, 66vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/80 to-primary/60" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-primary)_/0.4,transparent_50%)]" />
                    </>
                  )}
                  
                  <div className="absolute top-10 left-10 opacity-10 rotate-12 pointer-events-none">
                    <div className="w-32 h-32 border-16 border-foreground rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-foreground rounded-sm" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-foreground p-12 text-center select-none">
                    
                    <Badge className="absolute bottom-8 right-8 bg-muted/40 hover:bg-muted/60 text-primary-foreground backdrop-blur-xl border-foreground/10 px-3 py-1 text-[10px] font-bold">
                      <Clock className="w-3 h-3 mr-1.5 opacity-70" /> {heroPost.readTime?.split(' ')[0]} min read
                    </Badge>
                  </div>
                </div>

                <CardContent className="px-0">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors tracking-wider">
                      {heroPost.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm  mb-6 line-clamp-2 font-medium">
                    {heroPost.subtitle}
                  </p>
                  <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground gap-4">
                    <span className="text-muted-foreground/80 dark:text-muted-foreground">By MENTORiP</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span>{format(new Date(heroPost.createdAt || "2026-01-20T10:00:00Z"), "MMM d, yyyy")}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    <span className="text-primary tracking-widest">{heroPost.category?.name}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card className="relative aspect-video w-full rounded-4xl overflow-hidden border-0 shadow-2xl shadow-primary/5 bg-muted flex flex-col items-center justify-center text-center p-12">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_/0.05,transparent_70%)]" />
               <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] opacity-40">Coming Soon</Badge>
                <h2 className="text-4xl font-black text-muted-foreground uppercase tracking-tighter max-w-md">
                 New Featured Research is in Progress
               </h2>
                <div className="mt-8 flex items-center gap-2 text-muted-foreground/30 font-bold uppercase tracking-widest text-[10px]">
                 <span>Follow our updates</span>
                 <MoveRight className="w-3 h-3" />
               </div>
            </Card>
          )}

          {/* Wide Featured Post */}
          {widePost ? (
            <Link href={`/category/${widePost.category?.slug}/${widePost.slug}`} className="block group mt-6">
              <Card className="border-0 bg-muted/30 hover:bg-muted/50 transition-all duration-500 rounded-4xl overflow-hidden">
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 aspect-video relative rounded-2xl overflow-hidden shadow-lg bg-muted">
                      {widePost.coverImage && (
                        <Image 
                          src={widePost.coverImage} 
                          alt={widePost.title} 
                          fill 
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      )}
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground border-0 text-[8px] font-black uppercase">
                        Spotlight
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{widePost.category?.name}</span>
                         <span className="w-1 h-1 rounded-full bg-border" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            {format(new Date(widePost.createdAt || "2026-01-20T10:00:00Z"), "MMMM yyyy")}
                         </span>
                      </div>
                       <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors tracking-wider">
                        {widePost.title}
                      </h3>
                       <p className="text-muted-foreground text-sm line-clamp-2 font-medium">
                        {widePost.subtitle}
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2">
                           <div className="w-6 h-6 p-1 border rounded-full bg-muted flex items-center justify-center">
                            <Image src="/favicon.ico" alt="M" width={10} height={10} className="w-auto h-auto opacity-50 dark:invert" />
                          </div>
                           <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest">MENTORIP</span>
                        </div>
                         <Badge variant="outline" className="text-[8px] font-black border-border text-muted-foreground">
                          {widePost.readTime?.split(' ')[0]} min read
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
              <div className="h-48 rounded-4xl border-2 border-dashed border-border flex items-center justify-center bg-muted/30">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">Additional content spotlighting soon</p>
             </div>
          )}
        </div>

        {/* Side Posts List */}
        <div className="flex flex-col gap-6">
          {[0, 1, 2].map((index) => {
            const post = sidePosts[index];
            if (post) {
              return (
                <Link key={post.slug} href={`/category/${post.category?.slug}/${post.slug}`} className="block group">
                   <Card className="relative h-full border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-muted/30">
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                           <div className="w-20 h-20 rounded-2xl shrink-0 relative overflow-hidden flex items-center justify-center border-2 border-background shadow-sm transition-transform duration-500 group-hover:scale-105 bg-muted">
                             {post.coverImage ? (
                               <Image 
                                 src={post.coverImage} 
                                 alt={post.title} 
                                 fill 
                                 sizes="80px"
                                 className="object-cover" 
                               />
                             ) : (
                               <div className="text-center font-black leading-[0.8] text-primary/20">
                                 <span className="text-[10px]">MENTOR</span>
                               </div>
                             )}
                          </div>
                          <div className="space-y-1">
                             <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-border text-muted-foreground">
                              Latest Post
                            </Badge>
                            <p className="text-[9px] font-black text-primary/80 uppercase tracking-widest">
                              {post.category?.name}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                           <h3 className="text-sm font-semibold text-foreground tracking-wider group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                           <p className="text-sm text-muted-foreground">
                            {post.subtitle}
                          </p>
                          
                           <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:animate-pulse" />
                               <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                 {format(new Date(post.createdAt || "2026-01-20T10:00:00Z"), "MMM d")}
                               </p>
                            </div>
                             <Badge variant="secondary" className="text-[9px] font-black px-2 py-0.5 border-0 rounded-lg bg-muted text-muted-foreground">
                               {post.readTime?.split(' ')[0]} min read
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            }

            // Side Coming Soon placeholder
            return (
               <Card key={`side-soon-${index}`} className="relative shadow-none bg-muted/20 rounded-3xl overflow-hidden border-2 border-dashed border-border p-6 flex flex-col justify-center min-h-40">
                <div className="space-y-2 opacity-50">
                   <div className="w-12 h-1 bg-border rounded-full" />
                  <p className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-[0.2em]">Update Loading...</p>
                  <div className="h-10 w-full bg-muted rounded-lg mt-4" />
                </div>
              </Card>
            );
          })}
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
