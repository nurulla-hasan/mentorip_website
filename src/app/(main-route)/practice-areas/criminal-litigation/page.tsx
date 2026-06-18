

export const metadata = {
  title: "Criminal Litigation",
  description:
    "Expert criminal litigation services in Bangladesh — defense and prosecution representation by MENTOR IP's skilled legal team.",
  openGraph: {
    title: "Criminal Litigation - MENTOR IP",
    description:
      "Professional criminal litigation legal services.",
  },
};

export default function CriminalLitigationPage() {
  return (
    <div className="pb-16 space-y-12">
      <section className="pt-0 pb-8 border-b border-border/50">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Criminal <span className="text-primary">Litigation</span>.
        </h1>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
          Dedicated criminal litigation services with a commitment to justice and client advocacy.
        </p>
      </section>
      {/* Intro */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Criminal Litigation Services at MentorIP</h2>
        <p className="text-muted-foreground leading-relaxed">
          MentorIP provides comprehensive criminal litigation services in Bangladesh, handling a wide range of criminal matters across all levels of courts. Our legal team is experienced in representing clients in District Courts, High Courts, and the Supreme Court of Bangladesh.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We focus on building strong legal strategies that protect client rights and ensure the best possible legal outcome in criminal disputes.
        </p>
      </section>

      {/* Scope */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Scope of Criminal Law Services</h2>
        <p className="text-muted-foreground leading-relaxed">MentorIP handles all major categories of criminal cases, including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Bail matters (Regular & Anticipatory Bail)",
            "Criminal complaints & FIR filing",
            "Defense in criminal prosecutions",
            "Appeals and revision petitions",
            "White collar crime cases",
            "Cybercrime-related offenses",
            "Fraud and financial crime cases",
            "Domestic violence cases",
            "Harassment and women protection cases",
            "Anti-counterfeiting criminal actions",
            "Corruption-related complaints",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg border border-border/30 bg-card/30">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Framework */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Criminal Litigation in Bangladesh</h2>
        <p className="text-muted-foreground leading-relaxed">Criminal law in Bangladesh is governed by several key legal frameworks including:</p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Penal Code, 1860</li>
          <li>Code of Criminal Procedure (CrPC)</li>
          <li>Evidence Act, 1872</li>
          <li>Special laws related to cybercrime, corruption, and financial fraud</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          These laws collectively regulate criminal liability, ensuring justice through a structured legal system.
        </p>
        <p className="text-muted-foreground leading-relaxed font-medium italic">
          &ldquo;There must be both a wrongful act and criminal intent.&rdquo;
        </p>
      </section>

      {/* Cyber Crime */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Cyber Crime &amp; Digital Offences</h2>
        <p className="text-muted-foreground leading-relaxed">
          With the rapid growth of technology, cybercrime has become a major concern in Bangladesh. MentorIP provides legal support in handling:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Online fraud and financial scams</li>
          <li>Social media harassment and stalking</li>
          <li>Hacking and unauthorized access cases</li>
          <li>Digital identity theft</li>
          <li>Online gaming fraud and scams</li>
          <li>Cyberbullying cases</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Our legal team works closely with cyber authorities and investigative units to ensure swift legal action against offenders.
        </p>
      </section>

      {/* Key Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Key Criminal Legal Services</h2>
        <p className="text-muted-foreground leading-relaxed">MentorIP provides expert support in:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Criminal defense representation",
            "Filing criminal complaints",
            "FIR and police complaint drafting",
            "Bail applications and hearings",
            "Criminal appeals",
            "Economic offence cases",
            "Corporate fraud cases",
            "Anti-corruption legal support",
            "Cybercrime litigation",
          ].map((item) => (
            <div key={item} className="p-4 rounded-xl border border-border/40 bg-card/40 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Procedure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Criminal Procedure &amp; Strategy</h2>
        <p className="text-muted-foreground leading-relaxed">Our litigation team follows a structured approach:</p>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Case analysis and legal assessment</li>
          <li>Evidence review and strategy development</li>
          <li>Court representation and advocacy</li>
          <li>Negotiation and dispute resolution</li>
          <li>Emergency legal support (bail &amp; FIR matters)</li>
        </ol>
        <p className="text-muted-foreground leading-relaxed">
          We ensure every case is handled with confidentiality, precision, and strategic legal planning.
        </p>
      </section>

      {/* Contact */}
      <section className="p-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-4">
        <h2 className="text-xl font-bold tracking-tight">Contact MentorIP</h2>
        <p className="text-muted-foreground">For legal assistance in criminal matters:</p>
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
