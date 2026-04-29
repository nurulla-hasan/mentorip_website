"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { MapPin, Globe2, Zap, Users } from "lucide-react";

const offices = [
  { country: "Bangladesh", city: "Dhaka", type: "Headquarters", icon: MapPin },
  {
    country: "United Kingdom",
    city: "London",
    type: "Liaison Office",
    icon: Globe2,
  },
  { country: "UAE", city: "Dubai", type: "Liaison Office", icon: Zap },
  { country: "India", city: "Delhi", type: "Liaison Office", icon: Users },
  {
    country: "Pakistan",
    city: "Islamabad",
    type: "Liaison Office",
    icon: Globe2,
  },
  {
    country: "Afghanistan",
    city: "Kabul",
    type: "Liaison Office",
    icon: Globe2,
  },
  { country: "Nepal", city: "Kathmandu", type: "Liaison Office", icon: Globe2 },
  { country: "China", city: "Beijing", type: "Liaison Office", icon: Globe2 },
  {
    country: "Thailand",
    city: "Bangkok",
    type: "Liaison Office",
    icon: Globe2,
  },
  {
    country: "Malaysia",
    city: "Kuala Lumpur",
    type: "Liaison Office",
    icon: Globe2,
  },
  {
    country: "Singapore",
    city: "Singapore",
    type: "Liaison Office",
    icon: Globe2,
  },
  { country: "UK", city: "London", type: "Liaison Office", icon: Globe2 },
  { country: "EU", city: "Brussels", type: "Liaison Office", icon: Globe2 },
];

export function GlobalPresenceCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {offices.map((office, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <Card
                className="group border border-border bg-card rounded-2xl p-5 space-y-4 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/50 relative cursor-pointer flex flex-col justify-between h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 group-hover:scale-150 transition-all duration-1000" />
                
                <div className="relative space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary transition-all duration-700">
                    <office.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors uppercase">
                      {office.country}
                    </h4>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {office.city}
                    </p>
                  </div>
                </div>
                
                <div className="relative pt-2 border-t border-border/50">
                  <span className="text-[9px] text-primary font-bold uppercase tracking-[0.2em]">
                    {office.type}
                  </span>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={`w-2 h-2 rounded-full transition-all ${
              current === i ? "bg-primary w-6" : "bg-muted-foreground/30"
            }`}
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
