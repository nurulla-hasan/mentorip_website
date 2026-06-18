

export const metadata = {
  title: "Anti Counterfeiting",
  description:
    "Expert anti-counterfeiting services in Bangladesh — brand protection, counterfeit enforcement, and IP rights protection by MENTOR IP.",
  openGraph: {
    title: "Anti Counterfeiting - MENTOR IP",
    description:
      "Professional anti-counterfeiting and brand protection services.",
  },
};

export default function AntiCounterfeitingPage() {
  return (
    <div className="pb-16 space-y-12">
      <section className="pt-0 pb-8 border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Anti <span className="text-primary">Counterfeiting</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Comprehensive anti-counterfeiting and brand protection services to safeguard your intellectual property.
        </p>
      </section>
      {/* What is Counterfeiting */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">What is Counterfeiting?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Counterfeiting means the act of producing, selling, or distributing fake goods by misrepresenting them as genuine products of a well-known brand or manufacturer.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          In Bangladesh, counterfeit goods are often sold in a way that misleads consumers into believing they are purchasing original branded products, which directly harms both businesses and consumers.
        </p>
      </section>

      {/* Legal Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Legal Framework in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Anti-counterfeiting and IP protection in Bangladesh are mainly governed by:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Penal Code, 1860</li>
          <li>Trademarks Act, 2009</li>
          <li>Copyright Act, 2000</li>
          <li>Special IP enforcement provisions under civil &amp; criminal law</li>
          <li>Customs Act (for import/export control of counterfeit goods)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          These laws collectively help in preventing, penalizing, and enforcing action against counterfeit activities.
        </p>
      </section>

      {/* Impact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Impact of Counterfeiting in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Counterfeiting has serious economic and social consequences, including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Revenue loss for legitimate businesses",
            "Damage to brand reputation and consumer trust",
            "Loss of government tax revenue",
            "Public health risks (pharmaceuticals, food products)",
            "Growth of illegal trade networks",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">It affects industries such as:</p>
        <div className="flex flex-wrap gap-2">
          {["Pharmaceuticals", "Cosmetics", "Electronics", "Clothing & Fashion", "Software & Digital Products", "Books and Media Content"].map((item) => (
            <span key={item} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{item}</span>
          ))}
        </div>
      </section>

      {/* Enforcement */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Enforcement Mechanism</h2>
        <p className="text-muted-foreground leading-relaxed">In Bangladesh, anti-counterfeiting enforcement is carried out through:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Civil lawsuits for trademark infringement</li>
          <li>Criminal prosecution for fraud and cheating</li>
          <li>Police raids and seizure operations</li>
          <li>Customs border control actions</li>
          <li>Court injunctions against infringers</li>
          <li>Digital takedown of online counterfeit listings</li>
        </ul>
      </section>

      {/* Growing Challenge */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Growing Challenge of Counterfeiting</h2>
        <p className="text-muted-foreground leading-relaxed">
          Counterfeiting has become increasingly borderless and digital, making enforcement more complex. Fake goods are now widely distributed through:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Online marketplaces</li>
          <li>Social media platforms</li>
          <li>Informal retail networks</li>
          <li>Cross-border smuggling routes</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          This requires coordinated action between law enforcement agencies, courts, and IP rights holders.
        </p>
      </section>

      {/* Role of Rights Holders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Role of Rights Holders</h2>
        <p className="text-muted-foreground leading-relaxed">Brand owners and IP holders in Bangladesh must:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Monitor the market regularly</li>
          <li>Take immediate legal action against counterfeiters</li>
          <li>File civil and criminal cases when necessary</li>
          <li>Work with enforcement agencies for raids and seizures</li>
          <li>Protect trademarks and brand identity proactively</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Contact MentorIP</h2>
        <p className="text-muted-foreground">For anti-counterfeiting legal support in Bangladesh:</p>
        <div className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
          <span className="flex items-center gap-2">
            <span className="text-primary">📧</span> info@mentorip.com
          </span>
          <span className="flex items-center gap-2">
            <span className="text-primary">🌐</span> mentorip.com
          </span>
        </div>
      </section>
    </div>
  );
}
