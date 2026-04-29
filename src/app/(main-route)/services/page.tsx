"use client";

import { 
  ShieldCheck, 
  Zap, 
  Scale, 
  Shapes, 
  ArrowRight,
  Phone,
  LayoutGrid,
  Search,
  BookOpen,
  Globe2,
  Lock,
  Target,
  FileText,
  Activity,
  Award,
//   ChevronRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const serviceCategories = [
  {
    title: "TRADEMARK",
    desc: "We provide comprehensive trademark services that cover every aspect of intellectual property protection for your brand.",
    icon: ShieldCheck,
    color: "primary"
  },
  {
    title: "PATENT",
    desc: "We specialize in securing and protecting patent rights for inventions, offering a broad range of services.",
    icon: Zap,
    color: "primary"
  },
  {
    title: "INDUSTRIAL DESIGN",
    desc: "We offer specialized services to protect the visual appearance of your products through industrial design registration.",
    icon: Shapes,
    color: "primary"
  },
  {
    title: "COPYRIGHT",
    desc: "Our copyright services provide robust protection for your original works and creations.",
    icon: BookOpen,
    color: "primary"
  },
  {
    title: "IP LITIGATION & ENFORCEMENTS",
    desc: "Trademark infringement in Bangladesh occurs when an individual or entity utilizes a trademark that is either identical or confusingly similar to a registered trademark without the owner’s consent.",
    icon: Scale,
    color: "primary"
  },
  {
    title: "GEOGRAPHICAL INDICATION",
    desc: "We provide a range of services to protect products that have specific geographic origins, ensuring their uniqueness.",
    icon: Globe2,
    color: "primary"
  },
  {
    title: "IP DUE DILIGENCE",
    desc: "We offer strategic intellectual property due diligence services to assist clients with informed decision-making.",
    icon: Target,
    color: "primary"
  },
  {
    title: "FREEDOM TO OPERATE (FTO)",
    desc: "Our Freedom to Operate (FTO) services ensure that your business can commercialize products without infringing third-party intellectual property rights.",
    icon: Lock,
    color: "primary"
  }
];

const processes = [
  { step: "01", icon: Search, title: "Assessment", desc: "Thorough check of IP uniqueness/viability." },
  { step: "02", icon: FileText, title: "Application", desc: "Precision filing with the respective authorities." },
  { step: "03", icon: Activity, title: "Monitoring", desc: "Constant tracking of legal status and objections." },
  { step: "04", icon: Award, title: "Certification", desc: "Securing the final registration and protection." }
];

export default function ServicesPage() {
  return (
    <div className="pb-16 space-y-16">
      {/* Compact Page Header */}
      <section className="py-8 border-b border-border/50 mb-4">
        <div className="flex flex-col items-start space-y-3 max-w-4xl">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1 uppercase tracking-widest font-bold text-[10px] rounded-full">
            Expertise & Solutions
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
            Comprehensive <span className="text-primary">Intellectual Property</span> Services.
          </h1>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl">
            Boutique administrative precision and global standards protecting your most valuable corporate assets.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
           <div className="space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">OUR CAPABILITIES</h2>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">World-Class Service Suite</h3>
           </div>
           <p className="max-w-md text-muted-foreground font-medium">
             From domestic startups to multinational giants, we provide end-to-end legal and IP lifecycle management.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {serviceCategories.map((cat, i) => (
             <Card key={i} className="group border border-border bg-card rounded-[2.5rem] p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden flex flex-col justify-between cursor-pointer">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-1000" />
                
                <div className="relative space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                        <cat.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary-foreground" />
                      </div>
                      <LayoutGrid className="w-4 h-4 text-border" />
                   </div>

                   <div className="space-y-3">
                      <h4 className="text-lg font-black text-foreground group-hover:text-primary transition-colors">{cat.title}</h4>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed">
                         {cat.desc}
                      </p>
                   </div>
                </div>

                <div className="relative pt-6 mt-6 border-t border-border flex items-center justify-between group/link">
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">View More</span>
                   <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover/link:bg-primary transition-colors">
                      <ArrowRight className="w-3 h-3 text-muted-foreground group-hover/link:text-primary-foreground transition-transform group-hover/link:translate-x-0.5" />
                   </div>
                </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-muted rounded-[3rem] p-12 lg:p-20 border border-border shadow-2xl relative overflow-hidden group/process">
         <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
         
         <div className="relative max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">HOW WE WORK</h2>
              <h3 className="text-3xl md:text-4xl font-black text-foreground">Our Methodical Approach</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {processes.map((p, i) => (
                 <div key={i} className="relative group/step text-center space-y-6">
                    <div className="w-24 h-24 bg-card rounded-4xl border border-border flex items-center justify-center mx-auto shadow-xl group-hover/step:border-primary transition-all duration-500 relative z-10">
                       <p.icon className="w-8 h-8 text-primary" />
                       <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-primary-foreground shadow-lg">
                          {p.step}
                       </div>
                    </div>
                    {i < 3 && <div className="hidden md:block absolute top-12 left-[60%] w-[90%] h-0.5 bg-linear-to-r from-primary/30 via-primary/10 to-transparent z-0" />}
                    <div className="space-y-2">
                       <h5 className="text-lg font-black text-foreground uppercase group-hover/step:text-primary transition-colors">{p.title}</h5>
                       <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest leading-relaxed px-4 opacity-80 group-hover/step:opacity-100 transition-opacity">{p.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Detailed Services Spotlight */}
      <section className="space-y-8">
         <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-10 lg:p-14 bg-card rounded-[3rem] border border-border shadow-2xl space-y-8 group hover:border-primary/50 hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100" />
               <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
                     <Globe2 className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                     <Badge className="bg-primary/10 text-primary border-0 uppercase tracking-widest text-xs font-black px-4 py-1.5">Strategic Edge</Badge>
                     <h4 className="text-3xl font-black text-foreground">Global IP Liaison Office</h4>
                     <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                        With direct liaison offices in the UK, UAE, Thailand, Malaysia, and India, we provide seamless outbound filing and brand management across multiple jurisdictions under a single coordination point.
                     </p>
                  </div>
               </div>
            </div>

            <div className="p-10 lg:p-14 bg-muted rounded-[3rem] border border-border shadow-2xl space-y-8 group relative overflow-hidden hover:border-primary/50 hover:shadow-primary/5 transition-all duration-500">
               <div className="absolute top-0 right-0 w-1 h-full bg-primary transition-all duration-500 opacity-0 group-hover:opacity-100" />
               <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors" />
               <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                  <div className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center shrink-0">
                     <Lock className="w-12 h-12 text-primary" />
                  </div>
                  <div className="space-y-4 text-center md:text-left">
                     <Badge variant="outline" className="border-primary/40 text-primary uppercase tracking-widest text-xs font-black px-4 py-1.5">Privacy & Precision</Badge>
                     <h4 className="text-3xl font-black text-foreground">Full-Spectrum Confidentiality</h4>
                     <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                        All our legal opinions and administrative appeals are handled with boutique-level attention to detail, ensuring complete security of your intellectual property assets and corporate secrets.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto">
         <div className="bg-muted p-10 md:p-16 rounded-[3rem] border border-border text-center space-y-8 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] group/cta">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <h4 className="text-2xl md:text-4xl font-black text-foreground uppercase">Ready to Secure Your Innovation?</h4>
            <p className="text-muted-foreground font-medium text-lg max-w-2xl mx-auto">
               Protect your inventions, brands, and creative outputs with a team that values precision. Contact our experts today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] shadow-lg active:scale-95 group/btn-cta overflow-hidden relative">
                      <span className="relative z-10 flex items-center gap-2">Book Consultation <Phone className="w-4 h-4" /></span>
                      <div className="absolute inset-0 bg-linear-to-r from-primary to-primary opacity-0 group-hover/btn-cta:opacity-100 transition-opacity" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg" className="rounded-full px-10 py-7 font-black text-xs uppercase tracking-[0.2em] border-border bg-transparent text-foreground hover:bg-muted active:scale-95 transition-all">
                      View Portfolio
                  </Button>
                </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
