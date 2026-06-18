import type { Metadata } from "next";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Map View",
  description: "Find MENTOR IP Law Firm on the map — located in Dhaka, Bangladesh.",
};

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123!2d90.3947394!3d23.7469302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b89638e2c6cd%3A0x7f1ec7c823942cb2!2sMentorIP!5e0!3m2!1sen!2sbd!4v1";

export default function MapViewPage() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Our Location
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Visit us at our office in Dhaka. Use the map below to find the exact
          location of <span className="font-semibold text-foreground">MENTOR IP Law Firm</span>.
        </p>
      </div>

      {/* Info Card */}
      <div className="flex flex-wrap gap-6 p-6 rounded-2xl border border-primary/20 bg-primary/5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Address</h3>
            <p className="text-sm text-muted-foreground mt-1">
              MentorIP, Dhaka, Bangladesh
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">Coordinates</h3>
            <p className="text-sm text-muted-foreground mt-1">
              23.7469° N, 90.3947° E
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="w-full rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
        <iframe
          src={MAP_SRC}
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MENTOR IP Law Firm Location"
          className="w-full"
        />
      </div>

      {/* Bottom CTA */}
      <div className="text-center p-6 rounded-2xl bg-linear-to-br from-primary/10 to-transparent border border-primary/10">
        <p className="text-sm text-muted-foreground">
          Get directions on{" "}
          <a
            href="https://www.google.com/maps/place/MentorIP/@23.7469302,90.3947394,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Google Maps
          </a>
        </p>
      </div>
    </section>
  );
}
