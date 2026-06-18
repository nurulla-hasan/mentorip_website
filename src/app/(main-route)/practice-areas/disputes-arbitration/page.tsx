

export const metadata = {
  title: "Disputes & Arbitration",
  description:
    "Expert disputes and arbitration services in Bangladesh — alternative dispute resolution and arbitration representation by MENTOR IP.",
  openGraph: {
    title: "Disputes & Arbitration - MENTOR IP",
    description:
      "Professional dispute resolution and arbitration services.",
  },
};

export default function DisputesArbitrationPage() {
  return (
    <div className="pb-16 space-y-12">
      <section className="pt-0 pb-8 border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Disputes & <span className="text-primary">Arbitration</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Effective dispute resolution and arbitration services tailored to your needs.
        </p>
      </section>
      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Overview of Arbitration in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">
          Arbitration is an important form of Alternative Dispute Resolution (ADR) used in Bangladesh to resolve commercial and civil disputes outside traditional court litigation. It is widely used in business contracts to ensure faster, confidential, and cost-effective dispute resolution.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          With increasing commercial activities, arbitration has become a preferred mechanism for resolving disputes between parties in Bangladesh.
        </p>
      </section>

      {/* Legal Framework */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Legal Framework of Arbitration in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Arbitration in Bangladesh is primarily governed by:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Arbitration Act, 2001 (Bangladesh)</li>
          <li>Relevant provisions of Civil Procedure Code (CPC), 1908</li>
          <li>Judicial interpretations by the Supreme Court of Bangladesh</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          The Arbitration Act, 2001 provides the legal structure for both domestic and international arbitration enforcement.
        </p>
      </section>

      {/* Enforcement of Awards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Enforcement of Arbitral Awards in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">The enforcement of arbitral awards in Bangladesh depends on whether the award is:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Domestic Arbitral Award</li>
          <li>Foreign Arbitral Award</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-3">
            <h3 className="font-semibold text-primary">Enforcement of Domestic Arbitral Awards</h3>
            <p className="text-sm text-muted-foreground">Under the Arbitration Act, 2001:</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              <li>A domestic arbitral award is binding on the parties</li>
              <li>It can be enforced as a decree of the civil court</li>
              <li>The winning party can apply for enforcement before the competent court</li>
            </ul>
            <p className="text-sm text-muted-foreground font-medium mt-2">
              The court will enforce the award unless it is set aside under limited legal grounds such as:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              <li>Invalid arbitration agreement</li>
              <li>Lack of jurisdiction</li>
              <li>Public policy violation</li>
              <li>Procedural irregularity</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Once confirmed, the award is executed like a civil court judgment.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-border/50 bg-card/50 space-y-3">
            <h3 className="font-semibold text-primary">Enforcement of Foreign Arbitral Awards</h3>
            <p className="text-sm text-muted-foreground">
              Bangladesh is a party to the <strong>New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards, 1958</strong>.
            </p>
            <p className="text-sm text-muted-foreground">Therefore, foreign arbitral awards are enforceable in Bangladesh under:</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              <li>Arbitration Act, 2001 (international arbitration provisions)</li>
              <li>New York Convention principles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Conditions for Enforcement */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Conditions for Enforcement of Foreign Awards</h2>
        <p className="text-muted-foreground leading-relaxed">To enforce a foreign arbitral award in Bangladesh, the applicant must submit:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Original arbitral award or certified copy</li>
          <li>Original arbitration agreement or certified copy</li>
          <li>Proof that the award falls under a recognized convention</li>
        </ul>
      </section>

      {/* Grounds for Refusal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Grounds for Refusal of Enforcement</h2>
        <p className="text-muted-foreground leading-relaxed">Bangladesh courts may refuse enforcement if:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>The award is against public policy</li>
          <li>The arbitration agreement is invalid</li>
          <li>Due process was not followed</li>
          <li>The award is beyond the scope of arbitration</li>
        </ul>
      </section>

      {/* Court Approach */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Court Approach in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Bangladesh courts generally:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Support arbitration and ADR mechanisms</li>
          <li>Minimize interference in arbitral awards</li>
          <li>Encourage enforcement of valid foreign awards</li>
          <li>Promote commercial certainty and investment protection</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Importance of Arbitration in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Arbitration plays a key role in:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>International trade disputes</li>
          <li>Commercial contract enforcement</li>
          <li>Construction and infrastructure disputes</li>
          <li>Investment and corporate disputes</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Contact MentorIP</h2>
        <p className="text-muted-foreground">For arbitration and dispute resolution assistance:</p>
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
