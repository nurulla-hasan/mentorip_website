// import { NewsletterBox } from "@/components/category/NewsletterBox";
import { processHtmlForToc } from "@/components/tools/toc-utils";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/category/ShareButton";
import { Clock, ChevronRight } from "lucide-react";
import TableOfContents from "@/components/category/TableOfContents";
import { getPostBySlug } from "@/services/post";
import { Metadata } from "next";
import { NewsletterBox } from "@/components/category/NewsletterBox";
import PostViewTracker from "@/components/category/PostViewTracker";
import Link from "next/link";

const BASE_URL = "https://mentorip.com";

// Helper: strip HTML tags and trim to length
function safeDescription(html: string, maxLen = 160): string {
  return html.replace(/<[^>]*>/g, "").trim().substring(0, maxLen);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string; slug: string }>;
}): Promise<Metadata> {
  const { slug, categorySlug } = await params;
  const res = await getPostBySlug(slug);

  if (!res?.success || !res?.data) {
    return {
      title: "Post Not Found",
      description: "The requested article could not be found. Explore our library of IP law resources, insights, and expert guidance.",
    };
  }

  const post = res.data;
  const description =
    post.subtitle ||
    (post.content ? safeDescription(post.content) : "") ||
    "Read more about Intellectual Property Law at MentorIP.";

  const canonicalUrl = `${BASE_URL}/category/${categorySlug}/${slug}`;
  const ogImage = post.coverImage
    ? [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }]
    : [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: "MentorIP" }];

  return {
    title: `${post.title} | ${post.category?.name || "Article"}`,
    description,
    keywords: [
      ...(post.tag || []),
      post.category?.name,
      "MentorIP",
      "IP Law",
      "Intellectual Property",
      "Bangladesh",
    ].filter(Boolean),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.title}`,
      description,
      url: canonicalUrl,
      siteName: "MENTOR IP",
      images: ogImage,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: ["MENTOR IP"],
      section: post.category?.name,
      tags: post.tag,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title}`,
      description,
      images: post.coverImage ? [post.coverImage] : [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function DynamicPostPage({
  params,
}: {
  params: Promise<{ categorySlug: string; slug: string }>;
}) {
  const { slug, categorySlug } = await params;
  const res = await getPostBySlug(slug);
  if (!res?.success || !res?.data) {
    notFound();
  }
  const post = res.data;

  const { processedHtml, toc } = processHtmlForToc(post.content || "");

  const canonicalUrl = `${BASE_URL}/category/${categorySlug}/${slug}`;
  const description =
    post.subtitle ||
    (post.content ? safeDescription(post.content) : "") ||
    "Read more about Intellectual Property Law at MentorIP.";

  // Article JSON-LD structured data
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    url: canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    image: post.coverImage
      ? { "@type": "ImageObject", url: post.coverImage }
      : { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
    author: {
      "@type": "Organization",
      name: "MENTOR IP",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "MENTOR IP",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    keywords: (post.tag || []).join(", "),
    articleSection: post.category?.name,
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <PostViewTracker postId={post._id} />

      <header className="max-w-7xl mx-auto">
        {/* Breadcrumb / Category backlink */}
        {post.category?.slug && (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li>
                <Link
                  href={`/category/${post.category.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.category.name}
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
              <li className="text-foreground truncate max-w-[200px]" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>
        )}

        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-lg md:text-2xl font-bold text-foreground">
              {post.title}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground">
              <span className="font-medium">in {post.category?.name}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {(post.readTime || "").split(" ")[0]} min read
              </span>
            </div>
          </div>
          <ShareButton title={post.title} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {(post.tag || []).map((tag: string) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted px-2.5 py-1 text-[11px] font-bold text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="flex flex-col lg:flex-row gap-6 items-start max-w-7xl mx-auto">
        <article className="flex-1 min-w-0">
          <div
            className="prose prose-slate dark:prose-invert prose-headings:scroll-mt-24 max-w-none mx-auto md:pb-[650px] prose-h1:text-xl prose-h1:md:text-3xl prose-h1:font-bold"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
        </article>

        <aside className="w-full lg:w-[320px] shrink-0 space-y-6 sticky top-24">
          <div className="space-y-6">
            {toc.length > 0 && (
              <div className="hidden sm:block">
                <TableOfContents toc={toc} />
              </div>
            )}
            <NewsletterBox />
          </div>
        </aside>
      </div>
    </div>
  );
}
