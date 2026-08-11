"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-b from-amber-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 h-full flex flex-col justify-center items-center">
        <div className="text-center space-y-8">
          {/* Decorative element */}
          <div
            className={`w-32 h-32 mx-auto mb-8 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <svg
              viewBox="0 0 200 240"
              className="w-full h-full text-amber-900/20"
              fill="currentColor"
            >
              {/* Simple grachtenpand illustration */}
              <g>
                {/* Building */}
                <rect x="40" y="60" width="120" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Roof */}
                <path d="M 40 60 L 100 20 L 160 60" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Windows */}
                {[0, 1, 2, 3].map((row) =>
                  [0, 1, 2].map((col) => (
                    <rect
                      key={`${row}-${col}`}
                      x={55 + col * 30}
                      y={80 + row * 30}
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  ))
                )}
                {/* Door */}
                <rect x="85" y="170" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" />
                {/* Water reflection */}
                <path d="M 30 210 Q 100 220 170 210" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5" />
              </g>
            </svg>
          </div>

          {/* Main heading */}
          <div>
            <p className="text-sm font-light tracking-widest text-amber-900/60 uppercase mb-4">
              Welkom
            </p>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-serif text-amber-950 leading-tight transition-all duration-1000 ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Lijnbaansgracht 204-1
            </h1>
            <p className="text-lg sm:text-xl text-amber-900/70 mt-6 font-light">
              Huis aan de gracht in het hart van Amsterdam
            </p>
          </div>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-amber-900/60 max-w-2xl mx-auto leading-relaxed">
            Your home away from home. Everything you need for a perfect stay in Amsterdam's most charming neighborhood.
          </p>

          {/* Scroll hint */}
          <div className="pt-12 animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-amber-900/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
