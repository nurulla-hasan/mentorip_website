import {
  Phone,
  ExternalLink,
  ChevronRight,
  Zap,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlobalPresenceCarousel } from "@/components/about/GlobalPresenceCarousel";
import { PracticeAreasCarousel } from "@/components/about/PracticeAreasCarousel";
import Image from "next/image";
import Link from "next/link";
import { getWhoWeAre } from "@/services/about";
import fs from "fs";
import path from "path";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | MentorIP - Our Story & Global Expertise",
  description:
    "Discover MentorIP's history, leadership under Barrister Shaleh Akram, and our international network of liaison offices protecting IP rights globally since 2000.",
  keywords: [
    "About MentorIP",
    "IP Law History Bangladesh",
    "Barrister Shaleh Akram",
    "Intellectual Property Experts Bangladesh",
    "Global IP Network",
    "IP Law Firm History",
  ],
  openGraph: {
    title: "About MentorIP | Our Story & Global IP Expertise",
    description:
      "25+ years of protecting ideas and empowering brands globally. Meet our founder Barrister Shaleh Akram.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MentorIP | Our Story & Global IP Expertise",
    description:
      "25+ years of protecting ideas and empowering brands globally.",
  },
};

const timeline = [
  {
    year: "2011",
    title: "Foundation",
    desc: "Barrister Shaleh Akram Somrat started mentorIP. His IP passion traces back to an LL.M. paper at Dhaka University: “Use of Future IP Law Mechanisms as a Corporate Political Instrument.” Unusual title, unusual thinker.",
  },
  {
    year: "2015",
    title: "Modern Era",
    desc: "He pushed for global IP standards. Started writing for newspapers and Springer International. Topics ranged from Brexit to software patents. Fourteen articles so far. Not a huge number, but the range impresses more than the count.",
  },
  {
    year: "2018",
    title: "Transformation",
    desc: "Acquired and rebranded as MentorIP Law Firm—now pure IP focus. He also wrote a book: “The Fundamentals of Legal Drafting and Conveyancing.” Practical, not just theory.",
  },
  {
    year: "2024",
    title: "Present",
    desc: "Liaison offices in 5+ countries. Akram handles patents, litigation, and MNC trust.",
  },
];

export default async function AboutPage() {
  // Fetch dynamic data for "Who We Are" section
  const whoWeAreResponse = await getWhoWeAre();
  const whoWeAreData = whoWeAreResponse?.data || null;

  // Build stats array from API response
  const stats = whoWeAreData
    ? [
        { label: whoWeAreData.slot1Label, value: whoWeAreData.slot1Value },
        { label: whoWeAreData.slot2Label, value: whoWeAreData.slot2Value },
        { label: whoWeAreData.slot3Label, value: whoWeAreData.slot3Value },
        { label: whoWeAreData.slot4Label, value: whoWeAreData.slot4Value },
      ]
    : [
        { label: "Years of Experience", value: "25+" },
        { label: "Successful Cases", value: "10k+" },
        { label: "Global Associates", value: "350+" },
        { label: "Success Rate", value: "99%" },
      ];

  const resourceList = [
    {
      name: "DPDT",
      full: "Department of Patents, Designs and Trademarks",
      url: "https://dpdt.gov.bd/",
      logo: "/resources/dpdt.png"
    },
    {
      name: "Copyright Office",
      full: "Copyright Office Bangladesh",
      url: "https://copyrightoffice.gov.bd/",
      logo: "/resources/copyright.png"
    },
    {
      name: "Bangladesh Customs",
      full: "IPR Enforcement",
      url: "https://bangladeshcustoms.gov.bd/",
      logo: "/resources/customs.png"
    },
    {
      name: "Supreme Court",
      full: "Bangladesh Supreme Court",
      url: "https://supremecourt.gov.bd/",
      logo: "/resources/supremecourt.png"
    },
    {
      name: "WIPO",
      full: "World Intellectual Property Organization",
      url: "https://www.wipo.int/portal/en/index.html",
      logo: "/resources/wipo.png"
    },
    {
      name: "EPO",
      full: "European Patent Office",
      url: "https://www.epo.org/en",
      logo: "/resources/epo.png"
    },
    {
      name: "EUIPO",
      full: "European Union Intellectual Property Office",
      url: "https://www.euipo.europa.eu/en",
      logo: "/resources/euipo.png"
    },
    {
      name: "USPTO",
      full: "US Patent and Trademark Office",
      url: "https://www.uspto.gov/",
      logo: "/resources/uspto.png"
    },
    {
      name: "IP India",
      full: "Indian Patent Office/Registry",
      url: "https://ipindia.gov.in/",
      logo: "/resources/ipindia.png"
    },
    {
      name: "INTA",
      full: "International Trademark Association",
      url: "https://www.inta.org/",
      logo: "/resources/inta.png"
    },
  ];

  return (
    <div className="pb-16 space-y-16">
      {/* Compact Page Header */}
      <section className="pb-4 border-b border-border/50 mb-4">
        <div className="flex flex-col items-start space-y-3 max-w-4xl">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest font-bold text-[10px] rounded-full">
            The MentorIP Story
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Protecting <span className="text-primary italic">Ideas</span>. Empowering <span className="text-primary">Brands</span>.
          </h1>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl">
            Discover MentorIP&apos;s history, global expertise, and our commitment to administrative precision in IP law.
          </p>
        </div>
      </section>

      {/* Narrative Section - Dynamic "Who We Are" */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="text-primary border-primary/20 uppercase tracking-[0.3em] font-bold text-[10px] px-4 py-1.5 rounded-full"
            >
              WHO WE ARE
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-[1.1]">
              {whoWeAreData?.title}
            </h3>
          </div>

          <div className="relative border-y border-border py-6">
            {/* Newspaper Style Callout / Badge */}
            {stats.slice(0, 1).map((stat, i) => (
              <div
                key={i}
                className="float-left mr-6 mb-4 relative group/stat flex flex-col items-center justify-center p-6 md:p-8 bg-card text-foreground border border-border rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default shrink-0"
              >
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

                <p className="text-4xl md:text-6xl font-bold leading-none">
                  {stat.value}
                </p>
                <div className="h-px w-20 bg-primary/40 my-6" />
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-center max-w-[150px] leading-tight opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}

            <div className="space-y-6">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-medium text-justify">
                {whoWeAreData?.subtitle}
              </p>

              <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
                <h4 className="text-xl font-bold text-primary flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" /> Client Portals
                </h4>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  For a complete view of your IP portfolio—and for details on
                  how to renew all IP rights through one login in just a few
                  clicks—please access the <strong>Client Portal</strong>.
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  Please use this link for a full overview of your IP portfolio
                  and renewal instructions:
                </p>
                <Link
                  href="https://app.mentorip.com/login"
                  target="_blank"
                  className="block"
                >
                  <Button className="mt-2 font-bold group">
                    Access Client Portal{" "}
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <p className="text-xs text-primary bg-primary/5 p-2 rounded-lg inline-block">
                  Portal Link: https://app.mentorip.com/login
                </p>
                <p className="text-xs text-muted-foreground pt-2 font-medium">
                  If you have any questions, do not hesitate to reach out to
                  your usual contact at MentorIP or by emailing
                  info@mentorip.com
                </p>
              </div>
            </div>
            <div className="clear-both" />
          </div>
        </div>

        <div className="lg:col-span-4 relative aspect-3/4 rounded-3xl overflow-hidden group shadow-2xl border-4 border-background flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
            alt="Legal Expertise"
            fill
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background/40 to-transparent" />
        </div>
      </section>

      {/* Leadership Section - Newspaper Style */}
      <section className="space-y-6">
        {/* Newspaper Header */}
        <div className="space-y-2 border-b-2 border-foreground/20 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full"
              >
                OUR FOUNDER • EDITORIAL
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Architect of Global <span className="text-primary">IP Strategy</span>
              </h3>
            </div>
            <div className="hidden md:block text-right">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                PUBLISHED
              </p>
              <p className="text-sm font-bold text-foreground uppercase">
                JANUARY 2026 EDITION
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Image Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="relative group/leader">
              {/* <div className="absolute -inset-1 bg-foreground dark:bg-foreground/10 rounded-2xl blur-sm opacity-10 group-hover/leader:opacity-20 transition-opacity" /> */}
              <div className="aspect-3/4 bg-muted rounded-2xl overflow-hidden border-4 border-border shadow-xl relative group/img">
                <Image
                  src="/Barrister Shaleh Akram Somrat.png"
                  alt="Barrister Shaleh Akram Somrat"
                  fill
                  // unoptimized
                  className="object-cover"
                />
                {/* <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/80 via-foreground/40 to-transparent h-1/3" /> */}
              </div>
              <div className="mt-6 space-y-2 border-l-4 border-primary pl-6 py-1">
                <p className="text-xl font-bold text-foreground uppercase leading-tight">
                  Barrister Shaleh Akram
                </p>
                <p className="text-[11px] text-primary font-bold uppercase tracking-[0.2em]">
                  Head of Chambers • Founder
                </p>
              </div>
            </div>
          </div>

          {/* Article/Biography Content */}
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-10 space-y-6 md:space-y-0 text-sm md:text-base text-muted-foreground leading-relaxed font-medium text-justify">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none mb-6">
                Barrister Shaleh Akram is the founder of MentorIP and is widely
                recognized for his profound expertise in Intellectual Property
                (IP) law. His interest in IP law began during his LL.M. in IP at
                the University of Dhaka, where he published a research paper
                titled “Use of Future IP Law Mechanisms as a Corporate Political
                Instrument.” A regular contributor to national newspapers,
                Barrister Akram has authored numerous articles on Intellectual
                Property law, including contributions to the prestigious
                Springer international journal. To date, he has published 14
                articles in major national dailies.
              </p>
              <p className="mb-6">
                Notable among his recent publications is “Preventing
                Import-Export of Counterfeited Goods through Intellectual
                Property Mechanisms”, which appeared in The Daily Star on March
                3, 2020. Other significant pieces include “Intellectual Property
                – The Next Corporate Mechanism” (The Daily Observer, November
                12, 2015), “Brexit and its Aftermath – A Bangladesh Perspective”
                (The Daily Observer, August 18, 2016), “Are Software Patents
                Valid?” (The Daily Observer, January 19, 2017), and “Domain Name
                Disputes and Cybersquatting” (The Daily Star, May 21, 2019). He
                is also the author of “The Fundamentals of Legal Drafting and
                Conveyancing”, a book published by Shams Publications.
              </p>
              <p className="mb-6">
                With his extensive knowledge and experience in legal and
                corporate drafting, opinion writing, and agreement drafting,
                Barrister Akram is highly regarded in the field of Intellectual
                Property. He has successfully filed and registered numerous
                patents and has a proven track review in navigating the complex
                processes of Patent, Copyright, Trademark, and Design
                registrations, as well as in handling IP-related litigation.
              </p>
              <p className="mb-6">
                One of his landmark achievements was his handling of a complex
                Patent Appeal that challenged traditional practices of the
                Patent Office. The case involved an International Patent
                Application (Patent No. 1OO6093) filed by a Japanese national,
                which had been rejected due to the expiration of the statutory
                21-month filing period under the Patents and Designs Act, 1911.
                Despite this, MentorIP took on the case, filing an
                administrative appeal. After extensive hearings on legal points,
                the appeal was successful, leading to the unprecedented
                acceptance of the patent, making it the first case where the
                Patent Department relaxed its strict time limits.
              </p>
              <p>
                Barrister Akram is also trusted by numerous multinational
                companies (MNCs) operating in Bangladesh for his expertise in
                Intellectual Property Rights (IPR) protection. One of his most
                praised contributions was his work in safeguarding the
                copyrights of the well-known coconut oil brand “Parachute”. By
                orchestrating a raid on a secret counterfeit factory, he helped
                confiscate large quantities of counterfeit goods and
                successfully had deceptive copyright applications canceled,
                saving the company billions. His efforts were widely recognized
                and appreciated by Marico (Bangladesh) Limited.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            OUR JOURNEY
          </h2>
          <h3 className="text-3xl font-bold text-foreground inline-block">Milestones of Growth</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col md:flex-row gap-8 items-start group/step"
            >
              <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-card border-x border-border items-center justify-center z-10 shadow-sm transition-all duration-500 group-hover/step:border-primary">
                <span className="text-xs font-bold text-muted-foreground group-hover/step:text-primary transition-colors">
                  {step.year}
                </span>
              </div>

              <div className="md:ml-24 flex-1 p-6 rounded-3xl bg-muted border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 shadow-sm hover:shadow-xl">
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover/step:text-primary transition-colors">
                  {step.title}
                </h4>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Landmark Wins Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.3em] font-bold text-[10px] px-4 py-1.5 rounded-full">
            OUR ACHIEVEMENTS
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Landmark <span className="text-primary">Wins</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">Extraordinary legal battles that defined our commitment to justice.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 rounded-3xl bg-muted border border-border space-y-6 hover:shadow-xl transition-all duration-500 group">
             <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Zap className="w-7 h-7" />
             </div>
             <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">Patent No. 1OO6093</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Rejected for missing a 21-month deadline under an old 1911 Act. MentorIP appealed. The Patent Department bent its own rules—first time ever.
                </p>
             </div>
          </div>

          <div className="p-8 rounded-3xl bg-muted border border-border space-y-6 hover:shadow-xl transition-all duration-500 group">
             <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <Shield className="w-7 h-7" />
             </div>
             <div className="space-y-3">
                <h4 className="text-xl font-bold text-foreground">Parachute Oil Raid</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  Shut down a secret counterfeit factory for Marico. Billions saved. Marico thanked them publicly.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
              OUR NETWORK
            </h2>
            <h3 className="text-3xl font-bold text-foreground cursor-default">Global Presence</h3>
          </div>
          <p className="max-w-md text-muted-foreground font-medium">
            Connecting with innovators across continents through our specialized
            international liaison offices.
          </p>
        </div>

        <GlobalPresenceCarousel />
      </section>

      {/* Practice Areas */}
      <section className="relative p-8 md:p-12 rounded-3xl bg-muted border border-border overflow-hidden shadow-sm">
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-[0.3em] font-bold text-[10px] rounded-full">
              CORE CAPABILITIES
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive IP Solutions
            </h3>
          </div>

          <PracticeAreasCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-muted p-6 md:p-10 rounded-3xl border border-border text-center space-y-6 relative overflow-hidden shadow-2xl group/cta">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
          <h4 className="text-2xl md:text-3xl font-bold text-foreground uppercase">Need expert legal guidance?</h4>
          <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
            Whether you are protecting your innovation or launching a new
            business, we are here to help you navigate the legal landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link href="https://wa.me/8801760308093" target="_blank">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us Now <Phone className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary bg-size-[200%_100%] animate-gradient-x opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* Important Resources Section */}
      <section id="resources" className="space-y-6">
        <div className="text-center space-y-2">
          <Badge
            variant="outline"
            className="border-primary/30 text-primary uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full"
          >
            RESOURCES • USEFUL LINKS
          </Badge>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Important{" "}
            <span className="text-primary">Resources</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            Quick access to official intellectual property departments and
            international organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {resourceList.map((link, i) => {
            const logoPath = path.join(process.cwd(), "public", link.logo);
            const hasLogo = fs.existsSync(logoPath);
            
            return (
              <Link
                key={i}
                href={link.url}
                target="_blank"
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between relative overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -mr-10 -mt-10 group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-1000" />
                
                <div className="relative space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-muted overflow-hidden flex items-center justify-center border border-border group-hover:border-primary/30 transition-all duration-500">
                     {hasLogo ? (
                       <div className="relative w-full h-full p-2 bg-white">
                          <Image 
                            src={link.logo} 
                            alt={link.name}
                            fill
                            className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                       </div>
                     ) : (
                       <span className="text-xs font-black text-foreground group-hover:text-primary transition-colors">
                          {link.name.substring(0, 3).toUpperCase()}
                       </span>
                     )}
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                        {link.name}
                      </h4>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider leading-relaxed">
                      {link.full}
                    </p>
                  </div>
                </div>
                
                <div className="relative mt-4 pt-3 border-t border-border/50 flex items-center gap-1.5 text-[9px] font-bold text-primary">
                  <span className="uppercase tracking-widest">Visit Portal</span> 
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
