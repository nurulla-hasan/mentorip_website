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
        <div className="xl:col-span-2 space-y-8">
          {heroPost ? (
            <Link href={`/category/${heroPost.category?.slug}/${heroPost.slug}`}>
              <Card className="pt-0 group overflow-hidden border-0 bg-transparent shadow-none cursor-pointer">
                {/* Visual Header */}
                <div className="relative aspect-video w-full rounded-4xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  {heroPost.coverImage ? (
                    <>
                      <Image 
                        src={heroPost.coverImage} 
                        alt={heroPost.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-linear-to-br from-blue-700 via-blue-600 to-sky-500" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.4),transparent_50%)]" />
                    </>
                  )}
                  
                  <div className="absolute top-10 left-10 opacity-10 rotate-12 pointer-events-none">
                    <div className="w-32 h-32 border-16 border-white rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-white rounded-sm" />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-12 text-center select-none">
                    
                    <Badge className="absolute bottom-8 right-8 bg-black/40 hover:bg-black/60 text-white backdrop-blur-xl border-white/10 px-3 py-1 text-[10px] font-bold">
                      <Clock className="w-3 h-3 mr-1.5 opacity-70" /> {heroPost.readTime} read
                    </Badge>
                  </div>
                </div>

                <CardContent className="px-0 pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight tracking-tight">
                      {heroPost.title}
                    </h2>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6 line-clamp-2 font-medium">
                    {heroPost.subtitle}
                  </p>
                  <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 gap-4">
                    <span className="text-slate-500 dark:text-slate-300">By Admin</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <span>{format(new Date(heroPost.createdAt || "2026-01-20T10:00:00Z"), "MMM d, yyyy")}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-800" />
                    <span className="text-primary tracking-widest">{heroPost.category?.name}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <Card className="relative aspect-video w-full rounded-4xl overflow-hidden border-0 shadow-2xl shadow-blue-500/5 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center text-center p-12">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05),transparent_70%)]" />
               <Badge variant="outline" className="mb-6 uppercase tracking-[0.3em] font-black text-[10px] opacity-40">Coming Soon</Badge>
               <h2 className="text-4xl font-black text-slate-200 dark:text-slate-800 uppercase tracking-tighter max-w-md">
                 New Featured Research is in Progress
               </h2>
               <div className="mt-8 flex items-center gap-2 text-slate-300 dark:text-slate-700 font-bold uppercase tracking-widest text-[10px]">
                 <span>Follow our updates</span>
                 <MoveRight className="w-3 h-3" />
               </div>
            </Card>
          )}

          {/* Wide Featured Post */}
          {widePost ? (
            <Link href={`/category/${widePost.category?.slug}/${widePost.slug}`} className="block group">
              <Card className="border-0 bg-slate-500/5 dark:bg-slate-400/5 hover:bg-slate-500/10 dark:hover:bg-slate-400/10 transition-all duration-500 rounded-4xl overflow-hidden">
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/3 aspect-video relative rounded-2xl overflow-hidden shadow-lg bg-slate-200 dark:bg-slate-800">
                      {widePost.coverImage && (
                        <Image 
                          src={widePost.coverImage} 
                          alt={widePost.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                      )}
                      <Badge className="absolute top-3 left-3 bg-primary text-white border-0 text-[8px] font-black uppercase">
                        Spotlight
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{widePost.category?.name}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                            {format(new Date(widePost.createdAt || "2026-01-20T10:00:00Z"), "MMMM yyyy")}
                         </span>
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                        {widePost.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2 leading-relaxed font-medium">
                        {widePost.subtitle}
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                            <Image src="/next.svg" alt="M" width={10} height={10} className="opacity-50 dark:invert" />
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">MENTORIP</span>
                        </div>
                        <Badge variant="outline" className="text-[8px] font-black border-slate-200 dark:border-slate-800 text-slate-400">
                          {widePost.readTime} read
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ) : (
             <div className="h-48 rounded-4xl border-2 border-dashed border-slate-100 dark:border-slate-900 flex items-center justify-center bg-slate-50/30 dark:bg-slate-900/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 dark:text-slate-700">Additional content spotlighting soon</p>
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
                  <Card className="relative h-full border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-slate-500/5 dark:bg-slate-400/5">
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-20 h-20 rounded-2xl shrink-0 relative overflow-hidden flex items-center justify-center border-2 border-white/50 dark:border-slate-800/50 shadow-sm transition-transform duration-500 group-hover:scale-105 bg-slate-200 dark:bg-slate-800">
                             {post.coverImage ? (
                               <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                             ) : (
                               <div className="text-center font-black leading-[0.8] text-primary/20">
                                 <span className="text-[10px]">MENTOR</span>
                               </div>
                             )}
                          </div>
                          <div className="space-y-1">
                            <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest border-slate-200 dark:border-slate-800 text-slate-400">
                              Latest Post
                            </Badge>
                            <p className="text-[9px] font-black text-primary/80 uppercase tracking-widest">
                              {post.category?.name}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-sm font-black tracking-tight text-slate-800 dark:text-slate-100 leading-[1.2] group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-sm">
                            {post.subtitle}
                          </p>
                          
                          <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between mt-auto">
                            <div className="flex items-center gap-2">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:animate-pulse" />
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                 {format(new Date(post.createdAt || "2026-01-20T10:00:00Z"), "MMM d")}
                               </p>
                            </div>
                            <Badge variant="secondary" className="text-[9px] font-black px-2 py-0.5 border-0 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                              {post.readTime} read
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
              <Card key={`side-soon-${index}`} className="relative shadow-none bg-slate-50/50 dark:bg-slate-900/20 rounded-3xl overflow-hidden border-2 border-dashed border-slate-100 dark:border-slate-800/50 p-6 flex flex-col justify-center min-h-[160px]">
                <div className="space-y-2 opacity-50">
                  <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
                  <p className="text-[9px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.2em]">Update Loading...</p>
                  <div className="h-10 w-full bg-slate-100 dark:bg-slate-900 rounded-lg mt-4" />
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Latest News Section */}
      <LatestNews />
      
      {/* Newsletter Section */}
      {/* <NewsletterSection /> */}

      {/* Category Specific Sections */}
      <div className="space-y-4">
        {allCategories.slice(0, 5).map((category) => (
          <CategorySection key={category._id} categorySlug={category.slug} />
        ))}
      </div>
    </div>
  );
}
