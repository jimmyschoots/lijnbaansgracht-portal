"use client";

import { useState, useEffect } from "react";
import Icon, { type IconName } from "./Icon";

const navItems: { id: string; label: string; icon: IconName }[] = [
  { id: "checkin", label: "Arrival", icon: "key" },
  { id: "tour", label: "Rooms", icon: "home" },
  { id: "rules", label: "Rules", icon: "list" },
  { id: "guide", label: "Guide", icon: "book" },
  { id: "checkout", label: "Leaving", icon: "check" },
  { id: "contact", label: "Contact", icon: "chat" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top <= 140) {
          current = item.id;
        }
      }
      setActiveTab(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/92 backdrop-blur-xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto grid max-w-2xl grid-cols-6">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-current={isActive ? "true" : undefined}
              className={`group relative flex min-h-[3.75rem] touch-manipulation flex-col items-center justify-center gap-1.5 px-1 py-2.5 transition-colors ${
                isActive ? "text-brass-300" : "text-ink-300/70 active:text-bone-200"
              }`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 h-px w-8 transition-opacity ${
                  isActive ? "bg-brass-400 opacity-100" : "opacity-0"
                }`}
              />
              <Icon name={item.icon} className="h-[1.15rem] w-[1.15rem]" />
              <span className="text-[0.6rem] leading-none tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
