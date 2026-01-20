/* eslint-disable @typescript-eslint/no-explicit-any */
import { 
  Users, 
  Award, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  FileText,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getTeamMembers } from "@/services/team";

interface TeamMember {
  name: string;
  designation: string;
  expertises: string[];
  image?: string;
}

interface Attorney {
  name: string;
  role: string;
  qualifications: string[];
  icon: any;
  image?: string;
}

const operations = [
  {
    name: "Mr. Yesin",
    role: "IP Operations Manager",
    desc: "Overseeing all day-to-day workflow, filing, and client relationships since 2018.",
    icon: Briefcase
  },
  {
    name: "Sajid Ahmed",
    role: "Team Leader, IP Enforcement",
    qualifications: ["LL.B. (Hon’s), University of London, UK"],
    icon: Award
  },
  {
    name: "Samiul Islam",
    role: "Associate",
    qualifications: ["LL.B. (Hon’s), University of Dhaka"],
    icon: Users
  }
];

const staff = [
  { name: "MD RAIHAN ALI", pos: "Office Executive - Patents, Designs & Trademarks" },
  { name: "MD HUMAYUN KABIR", pos: "Clerk – Patents, Designs & Trademarks" },
  { name: "MD RABBI SARKER", pos: "Clerk – Patents, Designs & Trademarks" },
  { name: "JAHANGIR ALOM", pos: "Clerk – High Court" },
  { name: "MD HAFIZUL ISLAM", pos: "Clerk – Judges Court" },
  { name: "MD SAFI", pos: "Messenger" },
  { name: "ROBIUL ISLAM", pos: "Messenger" }
];

export default async function TeamOfLawyers() {
  const teamRes = await getTeamMembers();
  const teamData = teamRes?.success ? teamRes.data : [];

  const attorneys: Attorney[] = teamData.length > 0 ? teamData.map((member: TeamMember) => ({
    name: member.name,
    role: member.designation,
    qualifications: member.expertises || [],
    icon: ShieldCheck, // Default icon since API doesn't provide one
    image: member.image
  })) : [
    {
      name: "M Nafis Manjoor Baree",
      role: "Head of IP Documentation Wing",
      qualifications: ["Barrister-at-Law (Lincoln’s Inn)", "Advocate, District & Session Judges’ Court", "Accredited Mediator, UK", "LLM in Int. Banking & Finance Law, UK"],
      icon: FileText
    },
    {
      name: "Kazi Mehedi Al Amin Shuvo",
      role: "Senior Patent & Design Attorney",
      qualifications: ["Advocate, Supreme Court of Bangladesh", "LL.B.(Hon's), University of Dhaka", "LL.M. (First class), University of Dhaka"],
      icon: Zap
    },
    {
      name: "Ayesha Akhter",
      role: "Senior Trademark Attorney",
      qualifications: ["Advocate, Supreme Court of Bangladesh", "LL.B.(Hon's), University of Dhaka", "LL.M. (First class), University of Dhaka"],
      icon: ShieldCheck
    }
  ];

  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-linear(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-linear(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-6">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            Our Professionals <Sparkles className="w-3 h-3 ml-2" />
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]">
            THE <span className="text-primary italic">EXPERTISE</span><br /> 
            BEHIND <span className="text-blue-600 dark:text-blue-400">MENTORIP</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl italic">
            &quot;A collaborative team of elite attorneys, specialists, and support staff dedicated to your intellectual interests.&quot;
          </p>
        </div>
      </section>

      {/* Head of Chambers Spotlight */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-16 border border-slate-100 dark:border-white/5 shadow-sm group/head">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="relative group/img max-w-sm mx-auto w-full">
               <div className="absolute -inset-2 bg-linear-to-tr from-primary to-blue-600 rounded-[2.5rem] blur opacity-10 group-hover/head:opacity-30 transition-opacity" />
               <div className="aspect-4/5 bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative">
                  <Image 
                    src="/Barrister Shaleh Akram Somrat.png" 
                    alt="Barrister Shaleh Akram Somrat"
                    fill
                    className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-center text-white">
                     <p className="font-black text-xl uppercase tracking-tight">Shaleh Akram Somrat</p>
                     <p className="text-[10px] text-primary font-bold uppercase tracking-[0.3em] mt-1">Head of Chambers</p>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
               <div className="space-y-4">
                  <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">LEADERSHIP</h2>
                  <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                    Architecting the Future of <br />
                    <span className="text-primary font-serif italic text-5xl">IP Law in Bangladesh</span>
                  </h3>
               </div>
               <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium italic">
                 &quot;With a proven track record in navigating the complex processes of Patent, Copyright, and Trademark registrations, Barrister Akram is highly regarded for his landmark achievements in the field.&quot;
               </p>
               <div className="flex gap-4">
                  <Button variant="outline" className="rounded-full h-12 px-6 font-black text-[10px] uppercase tracking-widest border-slate-200 dark:border-white/10">Full Profile</Button>
                  <Button className="rounded-full h-12 px-6 font-black text-[10px] uppercase tracking-widest shadow-lg">Contact Head</Button>
               </div>
            </div>
         </div>
      </section>
 
      {/* Attorneys Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">LEGAL EXPERTS</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white transition-transform hover:scale-105">Attorneys & Specialists</h3>
          <p className="max-w-2xl mx-auto text-slate-500 font-medium italic text-sm">
            Our elite wing of legal practitioners ensuring effective representation in all matters related to intellectual property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
           {attorneys.map((member: Attorney, i: number) => (
             <Card key={i} className="py-0 group border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/50 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col h-full">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-50 dark:bg-slate-800">
                   {member.image ? (
                     <Image 
                       src={member.image} 
                       alt={member.name} 
                       fill 
                       className="object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center">
                       <member.icon className="w-20 h-20 text-slate-200 dark:text-slate-700 group-hover:text-primary/20 transition-colors duration-500" />
                     </div>
                   )}
                   <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 pt-0 space-y-6 flex-1 flex flex-col">
                   <div className="space-y-2 relative z-10">
                      <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight italic group-hover:text-primary transition-colors">{member.name}</h4>
                      <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{member.role}</p>
                   </div>
                   <Separator className="bg-slate-100 dark:bg-white/5" />
                   <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed relative z-10 flex-1 italic">
                      {member.qualifications.join(", ")}
                   </p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Operations & Research */}
      <section className="bg-slate-50 dark:bg-black rounded-[3rem] p-12 lg:p-20 text-slate-900 dark:text-white relative overflow-hidden group/ops shadow-sm dark:shadow-3xl border border-slate-100 dark:border-white/5">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] bg-[radial-linear(circle_at_center,#000_1px,transparent_0)] dark:bg-[radial-linear(circle_at_center,white_1px,transparent_0)] bg-size-[30px_30px]" />
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full" />
         
         <div className="relative space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">WINGS</h2>
               <h3 className="text-4xl font-black italic text-slate-900 dark:text-white transition-transform group-hover/ops:scale-105 duration-700">Operations & Research Team</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {operations.map((member, i) => (
                 <div key={i} className="group/card p-8 rounded-4xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all hover:bg-white/50 dark:hover:bg-white/10 shadow-sm hover:shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover/card:scale-110 group-hover/card:rotate-12 transition-all">
                          <member.icon className="w-6 h-6 text-primary" />
                       </div>
                       <div>
                          <p className="font-black italic text-lg text-slate-900 dark:text-white">{member.name}</p>
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{member.role}</p>
                       </div>
                    </div>
                    {member.qualifications ? (
                       <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic line-clamp-3">
                         {member.qualifications.join(", ")}
                       </p>
                    ) : (
                       <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">{"desc" in member ? member.desc : ""}</p>
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Office Executives & Clerks */}
      <section className="space-y-12">
         <div className="flex items-end justify-between">
            <div className="space-y-4">
               <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">SUPPORT SYSTEM</h2>
               <h3 className="text-4xl font-black text-slate-900 dark:text-white">Office Staffs</h3>
            </div>
            <p className="max-w-md text-slate-500 font-medium italic text-right hidden md:block">
              The backbone of our firm, ensuring precision in documentation and seamless administrative excellence.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {staff.map((s, i) => (
               <div key={i} className="flex flex-col p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 hover:border-primary/20 hover:bg-white dark:hover:bg-slate-800 transition-all group cursor-default">
                  <p className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">{s.name}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.pos}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Join the Team CTA */}
      <section className="max-w-4xl mx-auto">
         <div className="bg-slate-50 dark:bg-slate-950 p-12 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center space-y-8 shadow-2xl relative overflow-hidden group/cta">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-blue-600 to-primary animate-linear-x opacity-50" />
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Interested in joining our wing?</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg">
              We are always looking for passionate legal professionals and IP specialists to expand our global reach.
            </p>
            <Button size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-xl group/btn overflow-hidden relative">
               <span className="relative z-10 flex items-center gap-2">Send Your CV <ArrowRight className="w-4 h-4" /></span>
               <div className="absolute inset-0 bg-linear-to-r from-primary via-blue-600 to-primary bg-size-[200%_100%] animate-linear-x opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </Button>
         </div>
      </section>
    </div>
  );
}
