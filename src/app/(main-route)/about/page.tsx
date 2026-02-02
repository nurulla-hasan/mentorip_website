
import { 
  Users, 
  Gavel, 
  Globe2, 
  Zap, 
  ShieldCheck,
  Building2,
  BookOpen,
  MapPin,
  FileBadge,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { getWhoWeAre } from "@/services/about";

const timeline = [
  { year: "2000", title: "The Foundation", desc: "Founded under the name 'Law & Legal' by Dr. Qumrul Hossain, specializing in domestic pharmaceutical law." },
  { year: "2008", title: "Modern Era", desc: "Mr. Reagan joins the firm, introducing global IP standards and international vision." },
  { year: "2015", title: "Transformation", desc: "Acquired and rebranded as MentorIP Law Firm, shifting focus exclusively to Intellectual Property." },
  { year: "2024", title: "Present Day", desc: "Recognized as a premier international IP firm with liaison offices in 5+ countries." }
];

const offices = [
  { country: "Bangladesh", city: "Dhaka", type: "Headquarters", icon: MapPin },
  { country: "United Kingdom", city: "London", type: "Liaison Office", icon: Globe2 },
  { country: "UAE", city: "Dubai", type: "Liaison Office", icon: Zap },
  { country: "India", city: "Delhi", type: "Liaison Office", icon: Users },
  { country: "Pakistan", city: "Islamabad", type: "Liaison Office", icon: Globe2 },
  { country: "Afghanistan", city: "Kabul", type: "Liaison Office", icon: Globe2 },
  { country: "Nepal", city: "Kathmandu", type: "Liaison Office", icon: Globe2 },
  { country: "China", city: "Beijing", type: "Liaison Office", icon: Globe2 },
  { country: "Thailand", city: "Bangkok", type: "Liaison Office", icon: Globe2 },
  { country: "Malaysia", city: "Kuala Lumpur", type: "Liaison Office", icon: Globe2 },
  { country: "Singapore", city: "Singapore", type: "Liaison Office", icon: Globe2 },
  { country: "UK", city: "London", type: "Liaison Office", icon: Globe2 },
  { country: "EU", city: "Brussels", type: "Liaison Office", icon: Globe2 }
];

const practices = [
  { name: "TRADEMARKS", icon: ShieldCheck },
  { name: "PATENTS", icon: Zap },
  { name: "INDUSTRIAL DESIGNS", icon: FileBadge },
  { name: "COPYRIGHTS", icon: BookOpen },
  { name: "IP LITIGATION", icon: Gavel },
  { name: "BRAND PROTECTION", icon: ShieldCheck },
  { name: "LICENSING", icon: FileBadge },
  { name: "CORPORATE DOCUMENTATION", icon: Building2 },
  { name: "IP WATCH", icon: Globe2 }
];



export default async function AboutPage() {
  // Fetch dynamic data for "Who We Are" section
  const whoWeAreResponse = await getWhoWeAre();
  const whoWeAreData = whoWeAreResponse?.data || null;

  // Build stats array from API response
  const stats = whoWeAreData ? [
    { label: whoWeAreData.slot1Label, value: whoWeAreData.slot1Value },
    { label: whoWeAreData.slot2Label, value: whoWeAreData.slot2Value },
    { label: whoWeAreData.slot3Label, value: whoWeAreData.slot3Value },
    { label: whoWeAreData.slot4Label, value: whoWeAreData.slot4Value },
  ] : [
    { label: "Years of Experience", value: "25+" },
    { label: "Successful Cases", value: "10k+" },
    { label: "Global Associates", value: "350+" },
    { label: "Success Rate", value: "99%" },
  ];

  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative md:h-[500px] py-8 md:py-0 rounded-4xl md:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-linear(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8 md:space-y-10">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            The MentorIP Story
          </Badge>
          <h1 className="text-xl md:text-7xl font-black text-slate-900 dark:text-white md:tracking-tighter md:leading-[0.9] group-hover/hero:scale-[1.01] transition-transform duration-700">
            PROTECTING <span className="text-primary italic">IDEAS</span>.<br /> 
            EMPOWERING <span className="text-blue-600 dark:text-blue-400">BRANDS</span>.
          </h1>
          
        </div>
      </section>

      {/* Narrative Section - Dynamic "Who We Are" */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-8 space-y-10">
          <div className="space-y-4">
            <Badge variant="outline" className="text-primary border-primary/20 uppercase tracking-[0.3em] font-black text-[10px] px-4 py-1.5 rounded-full">
              WHO WE ARE
            </Badge>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              {whoWeAreData?.title}
            </h3>
          </div>
          
          <div className="relative border-y border-slate-200 dark:border-white/10 py-8">
            {/* Newspaper Style Callout / Badge */}
            {stats.slice(0, 1).map((stat, i) => (
              <div key={i} className="float-left mr-10 mb-6 relative group/stat flex flex-col items-center justify-center p-10 md:p-14 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 cursor-default shrink-0">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />
                
                <p className="text-6xl md:text-8xl font-serif italic font-black leading-none tracking-tighter">
                  {stat.value}
                </p>
                <div className="h-px w-20 bg-primary/40 my-6" />
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-center max-w-[150px] leading-tight opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-serif text-justify">
              {whoWeAreData?.subtitle}
            </p>
            <div className="clear-both" />
          </div>
        </div>

        <div className="lg:col-span-4 relative aspect-3/4 rounded-4xl md:rounded-[3rem] overflow-hidden group shadow-2xl border-4 border-white dark:border-slate-800">
           <Image
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
              alt="Legal Expertise"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-1000"
           />
           <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-900/40 to-transparent" />
        </div>
      </section>


      {/* Leadership Section - Newspaper Style */}
      <section className="space-y-12">
        {/* Newspaper Header */}
        <div className="space-y-6 border-b-2 border-slate-900 dark:border-white/20 pb-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-4">
                 <Badge variant="outline" className="border-primary/30 text-primary dark:text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                    OUR FOUNDER • EDITORIAL
                 </Badge>
                 <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
                   ARCHITECT OF GLOBAL<br />
                   <span className="text-primary dark:text-amber-400 font-serif italic text-3xl md:text-8xl">IP Strategy</span>
                 </h3>
              </div>
              <div className="hidden md:block text-right">
                 <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">PUBLISHED</p>
                 <p className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">JANUARY 2026 EDITION</p>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Image Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative group/leader">
              <div className="absolute -inset-1 bg-slate-900 dark:bg-white/10 rounded-2xl blur-sm opacity-10 group-hover/leader:opacity-20 transition-opacity" />
              <div className="aspect-3/4 bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl relative group/img">
                <Image
                  src="/Barrister Shaleh Akram Somrat.png"
                  alt="Barrister Shaleh Akram Somrat"
                  fill
                  unoptimized
                  className="object-cover group-hover/img:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent h-1/3" />
              </div>
              <div className="mt-6 space-y-2 border-l-4 border-primary pl-6 py-1">
                 <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-tight">Barrister Shaleh Akram</p>
                 <p className="text-[11px] text-primary dark:text-amber-400 font-black uppercase tracking-[0.2em]">Head of Chambers • Founder</p>
              </div>
            </div>
          </div>

          {/* Article/Biography Content */}
          <div className="lg:col-span-8">
            <div className="columns-1 md:columns-2 gap-10 space-y-6 md:space-y-0 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-justify">
              <p className="first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none mb-6">
                Barrister Shaleh Akram is the founder of MentorIP and is widely recognized for his profound expertise in Intellectual Property (IP) law. His interest in IP law began during his LL.M. in IP at the University of Dhaka, where he published a research paper titled “Use of Future IP Law Mechanisms as a Corporate Political Instrument.” A regular contributor to national newspapers, Barrister Akram has authored numerous articles on Intellectual Property law, including contributions to the prestigious Springer international journal. To date, he has published 14 articles in major national dailies.
              </p>
              <p className="mb-6">
                Notable among his recent publications is “Preventing Import-Export of Counterfeited Goods through Intellectual Property Mechanisms”, which appeared in The Daily Star on March 3, 2020. Other significant pieces include “Intellectual Property – The Next Corporate Mechanism” (The Daily Observer, November 12, 2015), “Brexit and its Aftermath – A Bangladesh Perspective” (The Daily Observer, August 18, 2016), “Are Software Patents Valid?” (The Daily Observer, January 19, 2017), and “Domain Name Disputes and Cybersquatting” (The Daily Star, May 21, 2019). He is also the author of “The Fundamentals of Legal Drafting and Conveyancing”, a book published by Shams Publications.
              </p>
              <p className="mb-6">
                With his extensive knowledge and experience in legal and corporate drafting, opinion writing, and agreement drafting, Barrister Akram is highly regarded in the field of Intellectual Property. He has successfully filed and registered numerous patents and has a proven track review in navigating the complex processes of Patent, Copyright, Trademark, and Design registrations, as well as in handling IP-related litigation.
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

      {/* Timeline Section */}
      <section className="space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR JOURNEY</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white transition-transform duration-700 hover:scale-105 inline-block">Milestones of Growth</h3>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
            {timeline.map((step, i) => (
              <div key={i} className="relative flex flex-col md:flex-row gap-8 items-start group/step">
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full bg-white dark:bg-slate-900 border-x border-slate-100 dark:border-slate-800 items-center justify-center z-10 shadow-sm transition-all duration-500 group-hover/step:border-primary group-hover/step:scale-110 group-hover/step:rotate-360">
                  <span className="text-xs font-black text-slate-400 group-hover/step:text-primary transition-colors">{step.year}</span>
                </div>
                
                <div className="md:ml-24 flex-1 p-8 rounded-4xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/50 hover:border-primary/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 group-hover/step:text-primary transition-colors">{step.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR NETWORK</h2>
             <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover:translate-x-2 transition-transform cursor-default">Global Presence</h3>
           </div>
           <p className="max-w-md text-slate-500 dark:text-slate-400 font-medium">
             Connecting with innovators across continents through our specialized international liaison offices.
           </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {offices.map((office, i) => (
             <Card key={i} className="group border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 space-y-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12">
                   <office.icon className="w-6 h-6 text-slate-400 group-hover:text-white" />
                </div>
                <div className="space-y-1">
                   <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">{office.country}</h4>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{office.city}</p>
                   <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] pt-2">{office.type}</p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="relative p-12 md:p-20 rounded-[3rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 overflow-hidden shadow-sm">
         <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
              style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="relative z-10 space-y-16">
           <div className="text-center space-y-4">
             <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 px-4 py-1.5 uppercase tracking-[0.3em] font-black text-[10px] rounded-full">
               CORE CAPABILITIES
             </Badge>
             <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
               Comprehensive IP Solutions
             </h3>
           </div>
 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {practices.map((practice, i) => (
               <div key={i} className="group/card relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-500 text-center flex flex-col items-center justify-center gap-6 min-h-[180px] shadow-sm hover:shadow-xl">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-100 transition-opacity">
                    <span className="text-3xl font-serif italic font-black text-slate-900 dark:text-white">{i + 1}</span>
                 </div>
                 
                 <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform duration-500">
                   <practice.icon className="w-6 h-6" />
                 </div>
                 
                 <p className="text-sm md:text-xl font-black text-slate-900 dark:text-white uppercase leading-tight max-w-[200px]">
                   {practice.name}
                 </p>
                 
                 <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity rounded-2xl" />
               </div>
             ))}
           </div>
         </div>
       </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/10 text-center space-y-8 relative overflow-hidden shadow-2xl group/cta">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover/cta:scale-[1.01] transition-transform">Need expert legal guidance?</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                  Whether you are protecting your innovation or launching a new business, we are here to help you navigate the legal landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                   <Link href="https://wa.me/8801760308093" target="_blank">
                      <Button size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn overflow-hidden relative">
                         <span className="relative z-10 flex items-center gap-2">Contact Us Now <Phone className="w-4 h-4" /></span>
                         <div className="absolute inset-0 bg-linear-to-r from-primary via-blue-600 to-primary bg-size-[200%_100%] animate-gradient-x opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      </Button>
                   </Link>
                </div>
            </div>
      </section>
    </div>
  );
}
