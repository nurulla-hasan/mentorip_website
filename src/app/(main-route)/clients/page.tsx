
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
  // Sparkles,
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
    <div className="pb-16 space-y-16">
      {/* Compact Page Header */}
      <section className="pt-0 pb-8 border-b border-border/50 mb-10">
        <div className="flex flex-col items-start space-y-3 max-w-4xl">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest font-bold text-[10px] rounded-full">
            Global Partnerships
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Trusted by Innovators & <span className="text-primary">Global Leaders</span>.
          </h1>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl">
            Boutique corporate security protecting multinational and domestic brands across multiple jurisdictions.
          </p>
        </div>
      </section>

      {/* Impact & Narrative Section */}
      <section>
        <div className="lg:col-span-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-foreground dark:border-border pb-10">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 OUR CLIENTELE • EDITORIAL
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                {clienteleData?.title || (
                  <>A Diverse Portfolio of <span className="text-primary">Global Excellence</span></>
                )}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
               <div className="lg:col-span-7 space-y-8">
                 <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                   {clienteleData?.subtitle || "MentorIP proudly represents a diverse and prestigious global clientele — from breakthrough innovators to some of the world's most recognizable brands. Our commitment to precision and confidentiality has made us the preferred partner for complex IP matters across borders."}
                 </p>
               </div>

             <div className="lg:col-span-5 border-l-2 border-foreground dark:border-border pl-10 hidden lg:block">
                <p className="text-xs font-bold text-foreground flex items-center gap-2 mb-6">
                  <ShieldCheck className="w-4 h-4 text-primary" /> BOUTIQUE LEGAL PRECISION
                </p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                  &quot;In the world of Intellectual Property, your assets are as valuable as the protection they receive. Our firm ensures that every trademark, patent, and copyright is handled with the highest level of administrative scrutiny and global legal standards.&quot;
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Dynamic Statistics Grid */}
      {clienteleData && (
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {clienteleData.stat1Value && clienteleData.stat1Title && (
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/50 shadow-2xs flex flex-col justify-center items-center text-center space-y-2 group hover:bg-muted/80 hover:border-primary/20 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform">
                {clienteleData.stat1Value}
              </span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                {clienteleData.stat1Title}
              </span>
            </div>
          )}

          {clienteleData.stat2Value && clienteleData.stat2Title && (
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/50 shadow-2xs flex flex-col justify-center items-center text-center space-y-2 group hover:bg-muted/80 hover:border-primary/20 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform">
                {clienteleData.stat2Value}
              </span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                {clienteleData.stat2Title}
              </span>
            </div>
          )}

          {clienteleData.stat3Value && clienteleData.stat3Title && (
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/50 shadow-2xs flex flex-col justify-center items-center text-center space-y-2 group hover:bg-muted/80 hover:border-primary/20 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform">
                {clienteleData.stat3Value}
              </span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                {clienteleData.stat3Title}
              </span>
            </div>
          )}

          {clienteleData.stat4Value && clienteleData.stat4Title && (
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/50 shadow-2xs flex flex-col justify-center items-center text-center space-y-2 group hover:bg-muted/80 hover:border-primary/20 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight group-hover:scale-105 transition-transform">
                {clienteleData.stat4Value}
              </span>
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                {clienteleData.stat4Title}
              </span>
            </div>
          )}
        </section>
      )}



      {/* Client Logos Grid - Dynamic */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-foreground dark:border-border pb-8">
           <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 PARTNERSHIPS • GLOBAL
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Major <span className="text-primary">Global Partners</span>
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
               className="group/client relative aspect-video flex items-center justify-center p-1 rounded-xl bg-background border border-border hover:border-primary/40 hover:bg-muted transition-all duration-300 overflow-hidden"
             >
                <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-500 scale-90 group-hover/client:scale-100 bg-white rounded-lg">
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
                <div className="absolute inset-x-0 bottom-0 py-1 bg-foreground/5 border-t border-border opacity-0 group-hover/client:opacity-100 transition-opacity">
                   <p className="text-[8px] font-bold text-center text-muted-foreground uppercase tracking-widest">{client.name}</p>
                </div>
             </a>
           ))}
        </div>
      </section>



      {/* Industries Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-2 group/sec">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-primary">SECTORS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">{weServeData?.title || "Industries We Serve"}</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
            {weServeData?.subtitle || "Cross-industry expertise tailored to the unique challenges of each sector."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {industries.map((item, i) => (
             <Card key={i} className="group border border-border bg-card rounded-2xl p-5 space-y-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-pointer overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700" />
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary transition-all duration-500 relative z-10">
                   <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="space-y-2 relative z-10">
                   <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                   <p className="text-sm text-muted-foreground leading-relaxed font-medium transition-opacity">{item.desc}</p>
                </div>
             </Card>
           ))}
        </div>
      </section>



      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 border-b-2 border-foreground dark:border-border pb-12">
           <div className="space-y-4">
              <Badge variant="outline" className="border-primary/30 text-primary font-bold uppercase tracking-[0.3em] text-[10px] px-4 py-1.5 rounded-full">
                 GLOBAL REGISTRY • JURISDICTIONS
              </Badge>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground uppercase">
                {jurisdictionsData?.title || (
                  <>Global <span className="text-primary normal-case">Trademark Registry</span></>
                )}
              </h3>
           </div>
           <p className="max-w-xs text-muted-foreground font-bold uppercase tracking-widest text-[11px]">
             {jurisdictionsData?.subtitle || "Providing high-standard legal solutions across key growth markets in Asia and Europe."}
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-6">
             <div className="space-y-8">
                <div className="flex items-center gap-4 text-foreground">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-primary" />
                   </div>
                   <h4 className="text-xl font-bold uppercase">Mainstream IP Hubs</h4>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12">
                   {trademarkJurisdictions.map((city: string) => (
                      <div key={city} className="group/item space-y-3 relative">
                         <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary group-hover/item:h-full transition-all duration-300" />
                         <p className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">REGISTRY</p>
                         <p className="text-lg font-bold text-foreground group-hover/item:text-primary transition-colors">{city}</p>
                      </div>
                   ))}
                </div>
             </div>

             <div className="pt-12 border-t border-border">
                <div className="p-6 rounded-3xl bg-muted border border-border flex flex-col md:flex-row items-center justify-between gap-8">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-3xl bg-background shadow-xl flex items-center justify-center">
                         <ShieldCheck className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                         <h5 className="text-lg font-bold text-foreground uppercase">Patent & Design Hub</h5>
                         <p className="text-xs font-bold text-primary uppercase tracking-widest">Exclusively in Bangladesh</p>
                      </div>
                   </div>
                   <p className="text-sm text-muted-foreground font-medium max-w-xs text-center md:text-right">
                      Our specialized patent cell operates with direct administrative access within the Bangladesh jurisdiction.
                   </p>
                </div>
             </div>
          </div>

          <div className="lg:col-span-4 relative group/visual hidden lg:block">
             <div className="sticky top-24 aspect-3/4 bg-background rounded-3xl overflow-hidden shadow-2xl border-4 border-border">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-transparent to-primary/40 mix-blend-overlay" />
                <div className="absolute inset-x-0 bottom-0 p-10 space-y-4 text-primary-foreground z-10">
                   <MapPin className="w-10 h-10 text-primary animate-bounce" />
                   <h5 className="text-3xl font-bold uppercase">Direct Support Worldwide</h5>
                   <p className="text-xs font-bold text-primary-foreground/60 uppercase tracking-widest">Cross-Border Excellence</p>
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
         <div className="bg-muted p-6 md:p-10 rounded-3xl border border-border text-center space-y-6 relative overflow-hidden shadow-xl group/cta">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <h4 className="text-2xl md:text-3xl font-bold text-foreground uppercase">Protect Your Brand Locally & Globally</h4>
            <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
                Join our prestigious circle of global clients. Let us secure your intellectual interests with precision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2">
                <Link href="https://wa.me/8801760308093" target="_blank">
                   <Button size="lg" className="rounded-full px-8 py-5 font-bold text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn-main overflow-hidden relative w-full sm:w-auto">
                       <span className="relative z-10 flex items-center gap-2">Get Expert Advice <ChevronRight className="w-4 h-4 group-hover/btn-main:translate-x-1 transition-transform" /></span>
                       <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary bg-size-[200%_100%] animate-gradient-x opacity-0 group-hover/btn-main:opacity-100 transition-opacity" />
                   </Button>
                </Link>
                <Link href="mailto:info@mentorip.com">
                   <Button variant="outline" size="lg" className="rounded-full px-8 py-5 font-bold text-xs uppercase tracking-[0.2em] border-border bg-transparent text-foreground hover:bg-muted active:scale-95 transition-all w-full sm:w-auto">
                       Email Us
                   </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
