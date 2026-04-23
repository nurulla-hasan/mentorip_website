
import { 
  Users, 
  Globe2, 
  ShieldCheck, 
  Cpu,
  Car,
  ShoppingBag,
  ShoppingBasket,
  Stethoscope,
  Hotel,
  Monitor,
  Factory,
  MapPin,
  ChevronRight,
  Sparkles,
  Award,
  BarChart3,
  LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { getClientele, getWeServe, getJurisdictions, getClients } from "@/services/client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Global Reach | MentorIP",
  description: "MentorIP represents a prestigious global clientele across various industries including Tech, Fashion, Pharma, and more in multiple jurisdictions.",
  keywords: ["MentorIP Clients", "Global IP Jurisdictions", "Industries We Serve", "IP Law Partnerships"],
};

interface Client {
  _id: string;
  name: string;
  websiteUrl: string;
  logoUrl: string;
}

// Icon mapping for industries - maps string names to icon components
const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Car,
  ShoppingBag,
  ShoppingBasket,
  Stethoscope,
  Hotel,
  Monitor,
  Factory,
  Users,
  Globe2,
  ShieldCheck,
  BarChart3,
  Award,
};



export default async function ClientsPage() {
  // Fetch all dynamic data
  const clienteleResponse = await getClientele();
  const weServeResponse = await getWeServe();
  const jurisdictionsResponse = await getJurisdictions();
  const clientsResponse = await getClients();

  const clienteleData = clienteleResponse?.data || null;
  const weServeData = weServeResponse?.data || null;
  const jurisdictionsData = jurisdictionsResponse?.data || null;
  const clientsData = Array.isArray(clientsResponse?.data) ? (clientsResponse.data as Client[]) : [];

  // Build industries array from weServe API (supports up to 8 cards)
  const industries = weServeData ? [
    weServeData.card1Title && {
      name: weServeData.card1Title,
      icon: iconMap[weServeData.card1IconName] || Cpu,
      desc: weServeData.card1Description,
    },
    weServeData.card2Title && {
      name: weServeData.card2Title,
      icon: iconMap[weServeData.card2IconName] || Car,
      desc: weServeData.card2Description,
    },
    weServeData.card3Title && {
      name: weServeData.card3Title,
      icon: iconMap[weServeData.card3IconName] || ShoppingBag,
      desc: weServeData.card3Description,
    },
    weServeData.card4Title && {
      name: weServeData.card4Title,
      icon: iconMap[weServeData.card4IconName] || ShoppingBasket,
      desc: weServeData.card4Description,
    },
    weServeData.card5Title && {
      name: weServeData.card5Title,
      icon: iconMap[weServeData.card5IconName] || Stethoscope,
      desc: weServeData.card5Description,
    },
    weServeData.card6Title && {
      name: weServeData.card6Title,
      icon: iconMap[weServeData.card6IconName] || Hotel,
      desc: weServeData.card6Description,
    },
    weServeData.card7Title && {
      name: weServeData.card7Title,
      icon: iconMap[weServeData.card7IconName] || Monitor,
      desc: weServeData.card7Description,
    },
    weServeData.card8Title && {
      name: weServeData.card8Title,
      icon: iconMap[weServeData.card8IconName] || Factory,
      desc: weServeData.card8Description,
    },
  ].filter(Boolean) : [
    { name: "Consumer Electronics", icon: Cpu, desc: "Protecting next-gen tech and hardware innovations." },
    { name: "Automotive", icon: Car, desc: "Securing designs and trademarks for global mobility leaders." },
    { name: "Fashion", icon: ShoppingBag, desc: "Empowering luxury and retail brands against counterfeiting." },
    { name: "FMCG", icon: ShoppingBasket, desc: "Safeguarding consumer brand identities across markets." },
    { name: "Pharmaceuticals", icon: Stethoscope, desc: "Specialized IP support for healthcare and life sciences." },
    { name: "Hospitality", icon: Hotel, desc: "Brand management for international hotels and resorts." },
    { name: "Media & Tech", icon: Monitor, desc: "Digital assets and content copyright protection." },
    { name: "Industrial Manufacturing", icon: Factory, desc: "Patent and industrial design security for creators." },
  ];

  // Get jurisdictions from API
  const trademarkJurisdictions = jurisdictionsData?.countries || [
    "Bangladesh", "India", "Pakistan", "Afghanistan", "Nepal", "China", "Thailand", "Malaysia", "Singapore", "UAE", "UK", "EU"
  ];
  return (
    <div className="pb-20 space-y-24">
      {/* Hero Section */}
      <section className="relative md:h-[500px] py-8 md:py-0 rounded-4xl md:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 group/hero shadow-2xl">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
           <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent dark:from-blue-600/20 dark:via-slate-900 dark:to-slate-900" />
           <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                style={{ backgroundImage: 'radial-linear(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="absolute inset-0 opacity-0 group-hover/hero:opacity-20 transition-opacity duration-1000 bg-[radial-linear(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_50%)]" />
        </div>
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto space-y-8 md:space-y-10">
          <Badge className="bg-primary/10 dark:bg-primary/20 text-primary border-primary/20 backdrop-blur-md px-5 py-2 uppercase tracking-[0.3em] font-black text-xs rounded-full">
            Global Partnerships <Sparkles className="w-3 h-3 ml-2" />
          </Badge>
          <h1 className="text-xl md:text-7xl font-black text-slate-900 dark:text-white md:tracking-tighter md:leading-[0.9] group-hover/hero:scale-[1.02] transition-transform duration-700">
            TRUSTED BY <span className="text-primary italic">THOUSANDS</span>,<br /> 
            VALUED BY <span className="text-blue-600 dark:text-blue-400">GLOBAL LEADERS</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-2xl">
            &quot;Your innovation is our priority. Join the elite circle of clients who trust MentorIP.&quot;
          </p>
        </div>
      </section>

      {/* Impact & Narrative Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-slate-900 dark:border-white/20 pb-10">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary dark:text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 OUR CLIENTELE • EDITORIAL
              </Badge>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
                A DIVERSE PORTFOLIO OF<br />
                <span className="text-primary font-serif italic text-3xl md:text-7xl">Global Excellence</span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
               <div className="lg:col-span-7 space-y-8">
                 <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                   {clienteleData?.subtitle || "MentorIP proudly represents a diverse and prestigious global clientele — from breakthrough innovators to some of the world's most recognizable brands. Our commitment to precision and confidentiality has made us the preferred partner for complex IP matters across borders."}
                 </p>
               </div>

             <div className="lg:col-span-5 border-l-2 border-slate-900 dark:border-white/20 pl-10 hidden lg:block">
                <p className="text-xs font-black text-slate-900 dark:text-white flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-primary" /> BOUTIQUE LEGAL PRECISION
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed">
                  &quot;In the world of Intellectual Property, your assets are as valuable as the protection they receive. Our firm ensures that every trademark, patent, and copyright is handled with the highest level of administrative scrutiny and global legal standards.&quot;
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Client Logos Grid - Dynamic */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-900 dark:border-white/20 pb-8">
           <div className="space-y-2">
              <Badge variant="outline" className="border-primary/30 text-primary dark:text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 PARTNERSHIPS • GLOBAL
              </Badge>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter">
                 Mejor<br />
                <span className="text-primary font-serif italic text-3xl md:text-7xl">Global Partners</span>
              </h3>
           </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
           {clientsData?.map((client) => (
             <a 
               key={client._id} 
               href={client.websiteUrl} 
               target="_blank" 
               rel="noopener noreferrer"
               className="group/client relative aspect-video flex items-center justify-center p-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 hover:border-primary/40 hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 overflow-hidden"
             >
                <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-500 scale-90 group-hover/client:scale-100">
                   {client.logoUrl && (
                     <Image 
                       src={client.logoUrl} 
                       alt={client.name} 
                       fill
                       className="rounded-xl"
                       unoptimized
                     />
                   )}
                </div>
                {/* Subtle Name Reveal */}
                <div className="absolute inset-x-0 bottom-0 py-1 bg-slate-900/5 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 opacity-0 group-hover/client:opacity-100 transition-opacity">
                   <p className="text-[8px] font-black text-center text-slate-500 uppercase tracking-widest">{client.name}</p>
                </div>
             </a>
           ))}
        </div>
      </section>

      {/* Industries Grid */}
      <section className="space-y-16">
        <div className="text-center space-y-4 group/sec">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">SECTORS</h2>
          <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover/sec:scale-105 transition-transform duration-700">{weServeData?.title || "Industries We Serve"}</h3>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            {weServeData?.subtitle || "Cross-industry expertise tailored to the unique challenges of each sector."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {industries.map((item, i) => (
             <Card key={i} className="group border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900/50 rounded-[2.5rem] p-8 space-y-6 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative z-10">
                   <item.icon className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-2 relative z-10">
                   <h4 className="text-lg font-black text-slate-900 dark:text-white tracking-tight group-hover:text-primary transition-colors">{item.name}</h4>
                   <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium transition-opacity">{item.desc}</p>
                </div>
             </Card>
           ))}
        </div>
      </section>

      <section className="space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-2 border-slate-900 dark:border-white/20 pb-12">
           <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary dark:text-amber-400 font-black uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 GLOBAL REGISTRY • JURISDICTIONS
              </Badge>
              <h3 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase">
                STRATEGIC<br />
                <span className="text-primary font-serif italic text-4xl md:text-8xl normal-case">Global Reach</span>
              </h3>
           </div>
           <p className="max-w-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
             Providing high-standard legal solutions across key growth markets in Asia and Europe.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-12">
             <div className="space-y-8">
                <div className="flex items-center gap-4 text-slate-900 dark:text-white">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-primary" />
                   </div>
                   <h4 className="text-xl font-black uppercase tracking-tight">Mainstream IP Hubs</h4>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12">
                   {trademarkJurisdictions.map((city: string) => (
                      <div key={city} className="group/item space-y-3 relative">
                         <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover/item:h-full transition-all duration-300" />
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">REGISTRY</p>
                         <p className="text-lg font-black text-slate-900 dark:text-white group-hover/item:text-primary transition-colors leading-none">{city}</p>
                      </div>
                   ))}
                </div>
             </div>

             <div className="pt-12 border-t border-slate-100 dark:border-white/5">
                <div className="p-8 rounded-4xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 group/pat">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-white dark:bg-slate-900 shadow-xl flex items-center justify-center group-hover/pat:rotate-12 transition-transform">
                         <ShieldCheck className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                         <h5 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Patent & Design Hub</h5>
                         <p className="text-xs font-bold text-primary dark:text-amber-400 uppercase tracking-widest">Exclusively in Bangladesh</p>
                      </div>
                   </div>
                   <p className="text-sm text-slate-500 dark:text-slate-400 font-medium max-w-xs text-center md:text-right">
                      Our specialized patent cell operates with direct administrative access within the Bangladesh jurisdiction.
                   </p>
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 relative group/visual hidden lg:block">
             <div className="sticky top-24 aspect-3/4 bg-slate-900 rounded-4xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-transparent to-blue-600/40 mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-10 space-y-4 text-white z-10">
                   <MapPin className="w-10 h-10 text-primary animate-bounce" />
                   <h5 className="text-3xl font-black leading-tight tracking-tighter uppercase">Direct Support<br />Worldwide</h5>
                   <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Cross-Border Excellence</p>
                </div>
                <Image 
                   src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                   alt="Global Connectivity"
                   fill
                   className="object-cover opacity-50 grayscale group-hover/visual:grayscale-0 group-hover/visual:scale-110 transition-all duration-1000"
                />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto">
         <div className="bg-slate-50 dark:bg-slate-900 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-white/5 text-center space-y-8 relative overflow-hidden shadow-2xl group/cta">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover/cta:scale-105 transition-transform duration-500">Protect Your Brand Locally & Globally</h4>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                Join our prestigious circle of global clients. Let us secure your intellectual interests with precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link href="https://wa.me/8801760308093" target="_blank">
                   <Button size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn-main overflow-hidden relative w-full sm:w-auto">
                       <span className="relative z-10 flex items-center gap-2">Get Expert Advice <ChevronRight className="w-4 h-4 group-hover/btn-main:translate-x-1 transition-transform" /></span>
                       <div className="absolute inset-0 bg-linear-to-r from-primary via-blue-600 to-primary bg-size-[200%_100%] animate-gradient-x opacity-0 group-hover/btn-main:opacity-100 transition-opacity" />
                   </Button>
                </Link>
                <Link href="mailto:info@mentorip.com">
                   <Button variant="outline" size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] border-slate-200 dark:border-white/20 bg-transparent text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 active:scale-95 transition-all w-full sm:w-auto">
                       Email Us
                   </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
