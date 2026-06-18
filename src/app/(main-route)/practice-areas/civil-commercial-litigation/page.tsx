

export const metadata = {
  title: "Civil & Commercial Litigation",
  description:
    "Expert civil and commercial litigation services in Bangladesh — contract disputes, business litigation, and more by MENTOR IP.",
  openGraph: {
    title: "Civil & Commercial Litigation - MENTOR IP",
    description:
      "Professional civil and commercial litigation legal services.",
  },
};

export default function CivilCommercialLitigationPage() {
  return (
    <div className="pb-16 space-y-12">
      <section className="pt-0 pb-8 border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Civil & Commercial <span className="text-primary">Litigation</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Comprehensive civil and commercial litigation services for businesses and individuals.
        </p>
      </section>
      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Overview of Civil &amp; Commercial Law</h2>
        <p className="text-muted-foreground leading-relaxed">
          Civil law deals with disputes that are non-criminal in nature and focuses on resolving conflicts between individuals, businesses, and organizations through legal remedies such as compensation, damages, and specific performance.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          MentorIP provides expert legal support in civil and commercial dispute resolution, ensuring efficient protection of client rights in contractual and business-related matters.
        </p>
      </section>

      {/* Legal Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Legal Framework for Civil Matters</h2>
        <p className="text-muted-foreground leading-relaxed">Civil proceedings are primarily governed by procedural and substantive laws, including:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Code of Civil Procedure (CPC), 1908</li>
          <li>Contract laws and commercial regulations</li>
          <li>Intellectual Property laws</li>
          <li>Corporate and business laws</li>
          <li>Real estate and property laws</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          These laws collectively regulate how civil disputes are filed, processed, and resolved in courts.
        </p>
      </section>

      {/* Nature of Disputes */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Nature of Civil &amp; Commercial Disputes</h2>
        <p className="text-muted-foreground leading-relaxed">Civil and commercial disputes typically arise from everyday legal and business relationships, including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Contractual disagreements",
            "Business and commercial conflicts",
            "Property and real estate disputes",
            "Corporate disputes",
            "Family and matrimonial matters",
            "Intellectual property conflicts",
            "Consumer and service disputes",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Remedies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Civil Law Remedies</h2>
        <p className="text-muted-foreground leading-relaxed">
          Unlike criminal law, civil law focuses on compensation rather than punishment. Remedies generally include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Monetary damages</li>
          <li>Compensation for loss</li>
          <li>Specific performance of contracts</li>
          <li>Injunctions (temporary &amp; permanent)</li>
          <li>Declaratory relief</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          In many cases, a single dispute may involve both civil and criminal elements depending on the facts of the case.
        </p>
      </section>

      {/* Areas Covered */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Areas Covered Under Civil &amp; Commercial Law</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">🏢 Contract Law Disputes</h3>
            <p className="text-sm text-muted-foreground">Breaches, enforcement, and interpretation of agreements.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">🏠 Property &amp; Real Estate Law</h3>
            <p className="text-sm text-muted-foreground">Ownership disputes, tenancy issues, and real estate conflicts.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">👨‍👩‍👧 Family &amp; Matrimonial Matters</h3>
            <p className="text-sm text-muted-foreground">Civil disputes related to family relationships and legal separation matters.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">🏢 Corporate &amp; Company Law</h3>
            <p className="text-sm text-muted-foreground">Business disputes, shareholder conflicts, and commercial litigation.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">🧠 Intellectual Property Disputes</h3>
            <p className="text-sm text-muted-foreground">Trademark, copyright, and patent-related civil enforcement actions.</p>
          </div>
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-2">
            <h3 className="font-semibold text-primary">🏗️ Real Estate Regulatory Issues</h3>
            <p className="text-sm text-muted-foreground">Developer disputes, buyer protection, and project-related conflicts.</p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Commercial Litigation Approach</h2>
        <p className="text-muted-foreground leading-relaxed">MentorIP follows a strategic and client-focused approach in civil litigation:</p>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Case evaluation and legal analysis</li>
          <li>Contract and document review</li>
          <li>Strategic dispute resolution planning</li>
          <li>Court representation and advocacy</li>
          <li>Negotiation and settlement support</li>
          <li>Alternative dispute resolution (ADR)</li>
        </ol>
      </section>

      {/* ADR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Alternative Dispute Resolution (ADR)</h2>
        <p className="text-muted-foreground leading-relaxed">To reduce time and cost, MentorIP encourages ADR methods such as:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Mediation</li>
          <li>Arbitration</li>
          <li>Negotiation</li>
          <li>Settlement conferences</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">These methods help clients achieve faster and more efficient resolutions without prolonged litigation.</p>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Contact MentorIP</h2>
        <p className="text-muted-foreground">For assistance in civil and commercial disputes:</p>
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
