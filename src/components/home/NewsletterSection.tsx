/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { subscribeNewsletter } from "@/services/subscription";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await subscribeNewsletter(email);
      if (response?.success) {
        toast.success("Subscribed successfully!");
        setEmail("");
      } else {
        toast.error(response?.message || "Subscription failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            Subscribe to Newsletter
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md font-medium">
            Subscribe to receive updates on Trademark, Patent & IP Law developments in Bangladesh and beyond.
          </p>
        </div>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          <Input 
            type="email" 
            placeholder="Type your email..." 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 rounded-xl px-5 text-sm font-medium focus:ring-primary shadow-sm"
          />
          <Button 
            type="submit"
            disabled={loading}
            className="h-12 px-8 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl shadow-lg shadow-pink-500/20 w-full sm:w-auto transition-transform active:scale-95"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
}
