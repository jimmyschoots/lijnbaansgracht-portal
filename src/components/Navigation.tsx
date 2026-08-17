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
    <nav className="fixed bottom-0 left-0 right-0 bg-white/98 backdrop-blur-md border-t-2 border-gold-300 z-40 safe-area-inset-bottom shadow-2xl">
      <div className="grid grid-cols-6 max-w-6xl mx-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`flex flex-col items-center justify-center py-4 px-2 transition-all touch-manipulation font-semibold ${
              activeTab === item.id
                ? "text-gold-600 border-t-4 border-gold-500"
                : "text-navy-600 hover:text-gold-500"
            }`}
            aria-label={item.label}
          >
            <span className="text-2xl mb-1">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
