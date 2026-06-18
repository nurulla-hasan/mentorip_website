

export const metadata = {
  title: "Maritime & Admiralty Law",
  description:
    "Expert maritime and admiralty law services in Bangladesh — shipping, marine insurance, and maritime dispute resolution by MENTOR IP.",
  openGraph: {
    title: "Maritime & Admiralty Law - MENTOR IP",
    description:
      "Professional maritime and admiralty legal services.",
  },
};

export default function MaritimeAdmiraltyLawPage() {
  return (
    <div className="pb-16 space-y-12">
      <section className="pt-0 pb-8 border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Maritime & Admiralty <span className="text-primary">Law</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Specialized maritime and admiralty law services covering shipping, marine commerce, and related disputes.
        </p>
      </section>
      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Overview of Maritime &amp; Admiralty Law</h2>
        <p className="text-muted-foreground leading-relaxed">
          Maritime and admiralty law deals with legal issues related to shipping, navigation, sea trade, ports, and maritime commercial activities. In modern legal practice, the terms &ldquo;maritime law&rdquo; and &ldquo;admiralty law&rdquo; are often used interchangeably.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          This area of law governs disputes arising from vessels, cargo, marine contracts, shipping operations, and incidents occurring in navigable waters.
        </p>
      </section>

      {/* Maritime Law in Bangladesh */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Maritime Law in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">
          Bangladesh has a strong maritime legal framework due to its strategic location and active maritime trade through the Bay of Bengal.
        </p>
        <p className="text-muted-foreground leading-relaxed">Maritime law in Bangladesh primarily covers:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Shipping and vessel registration</li>
          <li>Port operations and management</li>
          <li>Marine cargo disputes</li>
          <li>Ship arrest and maritime claims</li>
          <li>Maritime accidents and liability</li>
          <li>International shipping regulations</li>
        </ul>
      </section>

      {/* Key Maritime Laws */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Key Maritime Laws in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Maritime and admiralty matters in Bangladesh are governed by several laws, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>The Merchant Shipping Ordinance, 1983</li>
          <li>The Ports Act, 1908</li>
          <li>The Territorial Waters and Maritime Zones Act, 1974</li>
          <li>The Inland Shipping Ordinance, 1976</li>
          <li>Relevant international maritime conventions adopted by Bangladesh</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          These laws collectively regulate shipping safety, maritime trade, vessel registration, and dispute resolution.
        </p>
      </section>

      {/* Admiralty Jurisdiction */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Admiralty Jurisdiction in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Admiralty jurisdiction in Bangladesh allows courts to handle maritime disputes such as:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Vessel arrest and release</li>
          <li>Shipping contract disputes</li>
          <li>Cargo damage claims</li>
          <li>Marine insurance disputes</li>
          <li>Maritime lien enforcement</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          The High Court Division of the Supreme Court of Bangladesh plays a key role in handling admiralty matters.
        </p>
      </section>

      {/* Maritime Claims */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Maritime Claims &amp; Disputes</h2>
        <p className="text-muted-foreground leading-relaxed">Common maritime disputes in Bangladesh include:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Shipping contract breaches",
            "Freight and cargo disputes",
            "Collision and accident claims",
            "Marine pollution liability",
            "Ship ownership disputes",
            "Charter party disagreements",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Enforcement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Maritime Enforcement Mechanism</h2>
        <p className="text-muted-foreground leading-relaxed">In Bangladesh, maritime disputes are resolved through:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Admiralty jurisdiction of High Court Division</li>
          <li>Civil litigation in commercial courts</li>
          <li>Arbitration in shipping contracts</li>
          <li>International maritime dispute mechanisms (where applicable)</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Courts may order ship arrest, compensation, or injunctions depending on the case.
        </p>
      </section>

      {/* Importance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Importance of Maritime Law in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Maritime law is crucial for Bangladesh because:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>It supports international trade and exports</li>
          <li>Ensures safety in shipping operations</li>
          <li>Protects port infrastructure and cargo</li>
          <li>Regulates foreign shipping companies</li>
          <li>Maintains maritime security and compliance</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Contact MentorIP</h2>
        <p className="text-muted-foreground">For maritime and admiralty legal assistance in Bangladesh:</p>
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
