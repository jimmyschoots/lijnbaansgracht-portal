"use client";

import { useState, useEffect } from "react";

const navItems = [
  { id: "checkin", label: "Check-in", icon: "📍" },
  { id: "tour", label: "Tour", icon: "🏠" },
  { id: "rules", label: "Rules", icon: "📋" },
  { id: "guide", label: "Guide", icon: "📚" },
  { id: "wifi", label: "WiFi", icon: "📶" },
  { id: "contact", label: "Contact", icon: "💬" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveTab(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-amber-200/50 z-40 safe-area-inset-bottom">
      <div className="grid grid-cols-6 max-w-6xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center py-3 px-2 transition-all touch-manipulation ${
              activeTab === item.id
                ? "text-amber-900 border-t-2 border-amber-900"
                : "text-amber-700/60 hover:text-amber-700"
            }`}
            aria-label={item.label}
          >
            <span className="text-xl mb-1">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
