"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 border border-primary/10 hover:border-primary/20 text-xs font-semibold cursor-pointer relative group backdrop-blur-xs"
      title={language === "en" ? "Switch to Bengali" : "Switch to English"}
    >
      <Globe className="h-4 w-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
      <span className="tracking-wider text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-bold uppercase text-[10px]">
        {language === "en" ? "EN" : "বাংলা"}
      </span>
    </button>
  );
}


