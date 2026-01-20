
import { 
  Users, 
  Gavel, 
  Globe2, 
  Zap, 
  ArrowRight,
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
  { country: "India", city: "Delhi", type: "Liaison Office", icon: Users }
];

const practices = [
  { name: "Trademark Law", icon: ShieldCheck },
  { name: "Patent Filing", icon: Zap },
  { name: "Copyright Law", icon: BookOpen },
  { name: "IP Litigation", icon: Gavel },
  { name: "Corporate Law", icon: Building2 },
  { name: "Enforcement", icon: FileBadge }
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
      <section className="relative h-[500px] rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-10">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            The MentorIP Story
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] group-hover/hero:scale-[1.01] transition-transform duration-700">
            PROTECTING <span className="text-primary italic">IDEAS</span>.<br /> 
            EMPOWERING <span className="text-blue-600 dark:text-blue-400">BRANDS</span>.
          </h1>
          <div className="flex gap-6 pt-4">
             <div className="flex flex-col items-center group/stat">
                <span className="text-3xl font-black text-slate-900 dark:text-white group-hover/stat:text-primary transition-colors">25+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Years</span>
             </div>
             <Separator orientation="vertical" className="h-10 bg-slate-200 dark:bg-white/10" />
             <div className="flex flex-col items-center group/stat">
                <span className="text-3xl font-black text-slate-900 dark:text-white group-hover/stat:text-primary transition-colors">7,000+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Clients</span>
             </div>
             <Separator orientation="vertical" className="h-10 bg-slate-200 dark:bg-white/10" />
             <div className="flex flex-col items-center group/stat">
                <span className="text-3xl font-black text-slate-900 dark:text-white group-hover/stat:text-primary transition-colors">350+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">Associates</span>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section - Dynamic "Who We Are" */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">
              WHO WE ARE
            </h2>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
              {whoWeAreData?.title}
            </h3>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
            {whoWeAreData?.subtitle}
          </p>
          <div className="grid grid-cols-2 gap-6">
             {stats.map((stat, i) => (
               <Card key={i} className="border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-4xl p-8 space-y-2 group hover:bg-primary hover:border-primary transition-all duration-500 shadow-sm hover:shadow-primary/20 hover:-translate-y-1">
                 <p className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-white tracking-tighter transition-colors">{stat.value}</p>
                 <p className="text-xs font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-white/80 transition-colors">{stat.label}</p>
               </Card>
             ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-[3rem] overflow-hidden group shadow-2xl">
           <Image 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000" 
              alt="Legal Expertise" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-1000" 
           />
           <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity" />
        </div>
      </section>


      {/* Leadership Section */}
      <section className="space-y-16">
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2 relative p-4 group/leader">
            <div className="absolute -inset-1 bg-linear-to-tr from-primary to-blue-600 rounded-[2.6rem] blur opacity-20 group-hover/leader:opacity-40 transition-opacity" />
            <div className="aspect-4/5 bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-700/50 shadow-2xl relative group/img">
              <Image 
                src="/Barrister Shaleh Akram Somrat.png" 
                alt="Barrister Shaleh Akram Somrat"
                fill
                className="object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 dark:from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center bg-white/60 dark:bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-xl group-hover/img:translate-y-[-5px] transition-transform">
                 <p className="text-slate-900 dark:text-white font-black text-base tracking-tight uppercase">Barrister Shaleh Akram Somrat</p>
                 <p className="text-xs text-primary dark:text-amber-400 font-bold uppercase tracking-[0.2em] mt-1.5">Head of Chambers, MentorIP</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 space-y-8 px-6 lg:px-0">
            <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary dark:text-amber-400">OUR FOUNDER</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                Architect of Global <br />
                <span className="text-primary dark:text-amber-400 font-serif italic text-5xl">IP Strategy</span>
              </h3>
            </div>
            
            <div className="space-y-6 text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              <p>
                Barrister Shaleh Akram Somrat is the founder of MentorIP and is widely recognized for his profound expertise in Intellectual Property (IP) law. A regular contributor to national newspapers and the prestigious <span className="text-slate-900 dark:text-slate-200">Springer international journal</span>, he has authored numerous articles and the book <span className="italic">“The Fundamentals of Legal Drafting and Conveyancing.”</span>
              </p>
              <p>
                With over a decade of experience, he has a proven track record in navigating complex processes of Patent, Copyright, and Trademark registrations, as well as handling high-stakes IP litigation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm group/card hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all">
                 <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center shrink-0 group-hover/card:bg-primary group-hover/card:rotate-12 transition-all">
                    <Zap className="w-5 h-5 text-primary group-hover/card:text-white" />
                 </div>
                 <div>
                    <p className="text-slate-900 dark:text-white font-bold group-hover/card:text-primary transition-colors">Landmark Patent Victory</p>
                    <p className="text-xs text-slate-500 mt-1">First-ever successful appeal leading to Patent Office relaxation of strict time limits.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm group/card hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-lg hover:-translate-y-1 transition-all">
                 <div className="w-10 h-10 rounded-full bg-amber-400/10 dark:bg-amber-400/20 flex items-center justify-center shrink-0 group-hover/card:bg-amber-400 group-hover/card:-rotate-12 transition-all">
                    <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-400 group-hover/card:text-white" />
                 </div>
                 <div>
                    <p className="text-slate-900 dark:text-white font-bold group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors">IPR Enforcement</p>
                    <p className="text-xs text-slate-500 mt-1">Orchestrated landmark raids protecting global brands like &quot;Parachute&quot; from counterfeiting.</p>
                 </div>
              </div>
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
                    <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 italic group-hover/step:text-primary transition-colors">{step.title}</h4>
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
           <p className="max-w-md text-slate-500 dark:text-slate-400 font-medium italic">
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
                   <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight italic">{office.country}</h4>
                   <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{office.city}</p>
                   <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em] pt-2">{office.type}</p>
                </div>
                <Separator className="bg-slate-100 dark:bg-slate-800" />
                <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest cursor-pointer hover:gap-3 transition-all">
                   <span>Get Directions</span>
                   <ArrowRight className="w-3 h-3" />
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Practice Areas */}
      <section className="bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-20 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group/practices">
         <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-linear(#000_1px,transparent_1px)] bg-size-[30px_30px]" />
         <div className="max-w-4xl mx-auto space-y-16 relative z-10">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">CORE CAPABILITIES</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover/practices:scale-105 transition-transform duration-700">Comprehensive IP Solutions</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
               {practices.map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-4 p-8 rounded-4xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary hover:shadow-xl hover:-translate-y-1 transition-all group/item cursor-pointer">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover/item:bg-primary transition-all duration-500 group-hover/item:rotate-[-10deg]">
                       <item.icon className="w-6 h-6 text-slate-400 group-hover/item:text-white" />
                    </div>
                    <p className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight group-hover/item:text-primary transition-colors italic">{item.name}</p>
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
                <p className="text-slate-600 dark:text-slate-400 font-medium italic text-lg max-w-2xl mx-auto">
                  Whether you are protecting your innovation or launching a new business, we are here to help you navigate the legal landscape.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                   <Button size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn overflow-hidden relative">
                      <span className="relative z-10 flex items-center gap-2">Contact Us Now <Phone className="w-4 h-4" /></span>
                      <div className="absolute inset-0 bg-linear-to-r from-primary via-blue-600 to-primary bg-size-[200%_100%] animate-gradient-x opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                   </Button>
                   <Button variant="outline" size="lg" className="rounded-full px-8 py-6 font-black text-xs uppercase tracking-[0.2em] border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all">
                      <BookOpen className="w-4 h-4 mr-2" />
                      View Portfolio
                   </Button>
                </div>
            </div>
      </section>
    </div>
  );
}
