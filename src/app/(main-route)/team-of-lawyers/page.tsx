/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Users, 
  ShieldCheck, 
  // Sparkles,
  Briefcase,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { getTeamMembers } from "@/services/team";
import { JoinTeamCTA } from "@/components/team/JoinTeamCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | MentorIP - Elite Attorneys & IP Specialists",
  description: "Meet the collaborative team of elite attorneys, specialists, and support staff at MentorIP, dedicated to protecting your intellectual interests globally.",
  keywords: ["MentorIP Team", "IP Attorneys Bangladesh", "Legal Specialists", "IP Law Experts"],
};
import { Key } from "react";

interface TeamMember {
  name: string;
  designation: string;
  expertises: string[];
  image?: string;
  type: string;
}

interface Attorney {
  name: string;
  role: string;
  qualifications: string[];
  icon: any;
  image?: string;
}

export default async function TeamOfLawyers() {
  const teamRes = await getTeamMembers();
  const teamData = teamRes?.success ? teamRes.data : [];

  const attorneys: Attorney[] = teamData
    .filter((member: TeamMember) => member.type === "Attorneys & Specialities")
    .map((member: TeamMember) => ({
      name: member.name,
      role: member.designation,
      qualifications: member.expertises || [],
      icon: ShieldCheck,
      image: member.image
    }));

  const operationsMembers = teamData
    .filter((member: TeamMember) => member.type === "Operations & Research Team")
    .map((member: TeamMember) => ({
      name: member.name,
      role: member.designation,
      qualifications: member.expertises || [],
      icon: Briefcase,
      image: member.image
    }));

  const staffMembers = teamData
    .filter((member: TeamMember) => member.type === "Office Staffs")
    .map((member: TeamMember) => ({
      name: member.name,
      pos: member.designation,
      image: member.image,
      expertise: member.expertises || []
    }));

  return (
    <div className="pb-16 space-y-16">
      {/* Compact Page Header */}
      <section className="py-8 border-b border-border/50 mb-4">
        <div className="flex flex-col items-start space-y-3 max-w-4xl">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest font-bold text-[10px] rounded-full">
            Our Elite Team
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Specialists and Support Staff Protecting <span className="text-primary">Your IP</span>.
          </h1>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl">
            A collaborative ecosystem of specialized IP attorneys operating globally with boutique legal precision.
          </p>
        </div>
      </section>

      {/* Head of Chambers Spotlight - Newspaper Style */}
      <section className="space-y-8">
        {/* Newspaper Header */}
        <div className="space-y-6 border-b-2 border-foreground/20 pb-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-4">
                 <Badge variant="outline" className="border-primary/30 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                    LEADERSHIP • FEATURE
                 </Badge>
                 <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-[0.85]">
                   ARCHITECTING THE FUTURE OF<br />
                   <span className="text-primary text-3xl md:text-5xl">IP Law in Bangladesh</span>
                 </h3>
              </div>
              <div className="hidden md:block text-right">
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">PUBLISHED</p>
                 <p className="text-sm font-bold text-foreground uppercase">JANUARY 2026 EDITION</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Image Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group/leader">
              <div className="absolute -inset-1 bg-foreground dark:bg-primary/10 rounded-2xl blur-sm opacity-10 group-hover/leader:opacity-20 transition-opacity" />
              <div className="aspect-3/4 bg-muted rounded-2xl overflow-hidden border-4 border-border shadow-xl relative group/img">
                <Image 
                  src="/Barrister Shaleh Akram Somrat.png" 
                  alt="Barrister Shaleh Akram Somrat"
                  fill
                  // unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-background/80 via-background/40 to-transparent h-1/3" />
              </div>
              <div className="mt-6 space-y-2 border-l-4 border-primary pl-6 py-1">
                 <p className="text-xl font-bold text-foreground uppercase leading-tight">Barrister Shaleh Akram</p>
                 <p className="text-[11px] text-primary font-bold uppercase tracking-[0.2em]">Head of Chambers • Founder</p>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-10 space-y-6 md:space-y-0 text-sm md:text-base text-muted-foreground leading-relaxed font-medium text-justify">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none mb-6">
                Barrister Shaleh Akram is the founder of MentorIP and is widely recognized for his profound expertise in Intellectual Property (IP) law. His interest in IP law began during his LL.M. in IP at the University of Dhaka, where he published a research paper titled “Use of Future IP Law Mechanisms as a Corporate Political Instrument.” A regular contributor to national newspapers, Barrister Akram has authored numerous articles on Intellectual Property law, including contributions to the prestigious Springer international journal. To date, he has published 14 articles in major national dailies.
              </p>
              <p className="mb-6">
                Notable among his recent publications is “Preventing Import-Export of Counterfeited Goods through Intellectual Property Mechanisms”, which appeared in The Daily Star on March 3, 2020. Other significant pieces include “Intellectual Property – The Next Corporate Mechanism” (The Daily Observer, November 12, 2015), “Brexit and its Aftermath – A Bangladesh Perspective” (The Daily Observer, August 18, 2016), “Are Software Patents Valid?” (The Daily Observer, January 19, 2017), and “Domain Name Disputes and Cybersquatting” (The Daily Star, May 21, 2019). He is also the author of “The Fundamentals of Legal Drafting and Conveyancing”, a book published by Shams Publications.
              </p>
              <p className="mb-6">
                With his extensive knowledge and experience in legal and corporate drafting, opinion writing, and agreement drafting, Barrister Akram is highly regarded in the field of Intellectual Property. He has successfully filed and registered numerous patents and has a proven track record in navigating the complex processes of Patent, Copyright, Trademark, and Design registrations, as well as in handling IP-related litigation.
              </p>
              <p className="mb-6">
                One of his landmark achievements was his handling of a complex Patent Appeal that challenged traditional practices of the Patent Office. The case involved an International Patent Application (Patent No. 1OO6093) filed by a Japanese national, which had been rejected due to the expiration of the statutory 21-month filing period under the Patents and Designs Act, 1911. Despite this, MentorIP took on the case, filing an administrative appeal. After extensive hearings on legal points, the appeal was successful, leading to the unprecedented acceptance of the patent, making it the first case where the Patent Department relaxed its strict time limits.
              </p>
              <p>
                Barrister Akram is also trusted by numerous multinational companies (MNCs) operating in Bangladesh for his expertise in Intellectual Property Rights (IPR) protection. One of his most praised contributions was his work in safeguarding the copyrights of the well-known coconut oil brand “Parachute”. By orchestrating a raid on a secret counterfeit factory, he helped confiscate large quantities of counterfeit goods and successfully had deceptive copyright applications canceled, saving the company billions. His efforts were widely recognized and appreciated by Marico (Bangladesh) Limited.
              </p>
            </div>
          </div> 
        </div>
      </section>
 
      {/* Attorneys Grid */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">LEGAL EXPERTS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">Attorneys & Specialists</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground font-medium text-sm">
            Our elite wing of legal practitioners ensuring effective representation in all matters related to intellectual property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {attorneys.map((member: Attorney, i: number) => (
             <Card key={i} className="py-0 group border-border bg-card rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden relative flex flex-col h-full">
                <div className="relative aspect-3/4 w-full overflow-hidden bg-muted">
                   {member.image ? (
                     <Image 
                       src={member.image} 
                       alt={member.name} 
                       fill 
                       unoptimized
                       className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center">
                       <member.icon className="w-20 h-20 text-muted-foreground/20 group-hover:text-primary/20 transition-colors duration-500" />
                     </div>
                   )}
                   <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-5 pt-0 space-y-4 flex-1 flex flex-col">
                   <div className="space-y-2 relative z-10">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{member.name}</h4>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{member.role}</p>
                   </div>
                   <Separator className="bg-border" />
                   <p className="text-sm text-muted-foreground font-medium leading-relaxed relative z-10 flex-1">
                      {member.qualifications.join(", ")}
                   </p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Operations & Research */}
      <section className="bg-muted rounded-3xl p-8 lg:p-12 text-foreground relative overflow-hidden group/ops shadow-sm dark:shadow-3xl border border-border">
         <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full" />
         
         <div className="relative space-y-6">
            <div className="text-center space-y-2">
               <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">WINGS</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-foreground">Operations & Research Team</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {operationsMembers.map((member: Attorney, i: Key | null | undefined) => (
                 <div key={i} className="group/card p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:bg-muted shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center transition-all relative overflow-hidden">
                          {member.image ? (
                            <Image 
                              src={member.image} 
                              alt={member.name} 
                              fill 
                              unoptimized
                              className="object-cover" 
                            />
                          ) : (
                            <member.icon className="w-6 h-6 text-primary" />
                          )}
                       </div>
                       <div>
                          <p className="font-bold text-lg text-foreground">{member.name}</p>
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{member.role}</p>
                       </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed line-clamp-3">
                      {member.qualifications.join(", ")}
                    </p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Office Executives & Clerks */}
      <section className="space-y-8">
         <div className="flex items-end justify-between">
            <div className="space-y-2">
               <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">SUPPORT SYSTEM</h2>
               <h3 className="text-3xl md:text-4xl font-bold text-foreground">Office Staffs</h3>
            </div>
            <p className="max-w-md text-muted-foreground font-medium text-right hidden md:block">
              The backbone of our firm, ensuring precision in documentation and seamless administrative excellence.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {staffMembers.map((s: { name: string; pos: string; image?: string; expertise: string[] }, i: number) => (
               <div key={i} className="flex flex-col p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-xl transition-all group cursor-default overflow-hidden relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-muted shrink-0 border border-border transition-transform">
                      {s.image ? (
                        <Image 
                          src={s.image} 
                          alt={s.name} 
                          fill 
                          unoptimized
                          className="object-cover" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-foreground uppercase group-hover:text-primary transition-colors truncate">{s.name}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5 truncate">{s.pos}</p>
                    </div>
                  </div>
                  
                  {s.expertise && s.expertise.length > 0 && (
                    <div className="pt-3 border-t border-border">
                      <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">
                        {s.expertise.join(", ")}
                      </p>
                    </div>
                  )}
               </div>
            ))}
         </div>
      </section>

      {/* Join the Team CTA */}
      <JoinTeamCTA />
    </div>
  );
}
