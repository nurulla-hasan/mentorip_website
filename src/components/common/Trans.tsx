"use client";

import { useState, useEffect, useMemo } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translateText } from "@/lib/translate";

interface TransProps {
  children: string;
  className?: string;
}

export function Trans({ children, className }: TransProps) {
  const { language } = useLanguage();
  const [asyncText, setAsyncText] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);

  // 1. Resolve cached value or original during render
  const cachedValue = useMemo(() => {
    if (typeof window === "undefined" || language === "en" || !children) return null;
    try {
      const cacheKey = `tr_${btoa(unescape(encodeURIComponent(children)))}`;
      return localStorage.getItem(cacheKey);
    } catch {
      return null;
    }
  }, [language, children]);

  // 2. Only fetch if we are in 'bn' mode and no cache exists
  useEffect(() => {
    if (language === "bn" && !cachedValue && children) {
      // Wrap in promise to avoid synchronous setState warning
      Promise.resolve().then(() => {
        setIsTranslating(true);
      });

      const cacheKey = `tr_${btoa(unescape(encodeURIComponent(children)))}`;
      
      translateText(children, "bn")
        .then((res) => {
          localStorage.setItem(cacheKey, res);
          setAsyncText(res);
          setIsTranslating(false);
        })
        .catch(() => {
          setIsTranslating(false);
        });
    } else if (language === "en" && asyncText !== null) {
      Promise.resolve().then(() => {
        setAsyncText(null);
      });
    }
  }, [language, children, cachedValue, asyncText]);

  // Determine what to display
  const finalOutput = language === "en" ? children : (cachedValue || asyncText || children);

  return (
    <span className={`${className} ${isTranslating ? "opacity-50" : "opacity-100"} transition-opacity duration-300`}>
      {finalOutput}
    </span>
  );
}
