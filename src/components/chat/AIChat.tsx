"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! I am your Mentor IP Assistant. How can I help you today regarding Intellectual Property matters?",
    timestamp: new Date(),
  },
];

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      // eslint-disable-next-line react-hooks/purity
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getFakeResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const getFakeResponse = (input: string) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("trademark")) {
      return "Trademarks are essential for protecting your brand identity. At Mentor IP, we help with registration, monitoring, and enforcement of trademarks in Bangladesh and internationally.";
    } else if (lowerInput.includes("patent")) {
      return "Patents protect your technical inventions. Our team specializes in drafting patent applications and navigating the complex IP laws to ensure your innovations are secure.";
    } else if (lowerInput.includes("copyright")) {
      return "Copyright protects original creative works. Whether it's software, literature, or art, we can assist you in securing your rights.";
    } else if (lowerInput.includes("contact") || lowerInput.includes("phone") || lowerInput.includes("email")) {
      return "You can reach us at info@mentorip.com or via WhatsApp at +880 1733-792305. We're also located at Suit-802, Level-8, Meherba Plaza, 33 Topkhana Road, Dhaka.";
    } else {
      return "That's an interesting question. As an IP law firm, Mentor IP handles various matters including Trademarks, Patents, Copyrights, and Designs. Would you like to know more about any of these specific services?";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] sm:w-[400px] h-[650px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Mentor IP Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] opacity-80 uppercase tracking-wider">Online Assistant</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 rounded-full h-8 w-8"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 min-h-0">
              <ScrollArea className="h-full" viewportRef={scrollRef}>
                <div className="p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex gap-3 max-w-[85%]",
                        message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                      )}
                    >
                      <div
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                          message.role === "assistant" 
                            ? "bg-slate-100 dark:bg-white/5 text-primary" 
                            : "bg-primary text-white"
                        )}
                      >
                        {message.role === "assistant" ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div
                        className={cn(
                          "p-3 rounded-2xl text-sm leading-relaxed shadow-sm",
                          message.role === "assistant"
                            ? "bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 rounded-tl-none"
                            : "bg-primary text-white rounded-tr-none"
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3 max-w-[85%]">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/5 text-primary flex items-center justify-center">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-slate-100 dark:bg-white/5 p-3 rounded-2xl rounded-tl-none shadow-sm">
                        <Loader2 className="w-4 h-4 animate-spin text-primary" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about IP services..."
                  className="bg-white dark:bg-slate-800 border-slate-200 dark:border-white/10 rounded-full px-4 h-11 text-sm"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!inputValue.trim() || isLoading}
                  className="rounded-full h-11 w-11 shrink-0 bg-primary hover:bg-primary/90 text-white shadow-lg active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bubble Toggle */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "h-16 w-16 rounded-full shadow-2xl p-0 transition-all duration-300 relative group overflow-hidden",
            isOpen 
              ? "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-white/10" 
              : "bg-primary text-white"
          )}
        >
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <>
              <div className="absolute inset-0 bg-linear-to-tr from-primary via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center">
                <MessageSquare className="w-7 h-7" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 animate-pulse text-yellow-300" />
              </div>
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
