"use client";

import { useState } from "react";

const CheckInSteps = [
  {
    number: 1,
    title: "Look for the keybox",
    description: "Find the small silver box underneath the doorbell to the left of the front door.",
  },
  {
    number: 2,
    title: "Enter the code",
    description: "Enter the code 2610 to unlock the keybox and retrieve the key.",
  },
  {
    number: 3,
    title: "Unlock the front door",
    description: "Use the key to open the large wooden front door. Welcome home!",
  },
  {
    number: 4,
    title: "Explore & settle in",
    description: "Leave the key on the table and check out what we've prepared for you.",
  },
];

export default function CheckIn() {
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("2610");
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section
      id="checkin"
      className="bg-cream-50/50 py-20 px-4 sm:px-6 lg:px-8 border-t border-gold-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-navy-900 mb-4">Check-in</h2>
          <p className="text-navy-700/70 text-lg">
            Easy entry to your Amsterdam home
          </p>
        </div>

        {/* Keybox visual */}
        <div className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-lg p-8 mb-12 border border-gold-200">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Keybox illustration */}
            <div className="flex-1">
              <div className="bg-gray-800 rounded-lg p-8 text-center relative">
                <div className="text-6xl mb-4">🔑</div>
                <p className="text-white text-sm font-mono">CODE: 2610</p>
                <div className="mt-4 flex gap-2 justify-center">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-3 h-3 bg-gray-600 rounded-full" />
                  ))}
                </div>
              </div>
            </div>

            {/* Code section */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-serif text-navy-900 mb-4">
                Your Entry Code
              </h3>
              <div className="bg-cream-50 rounded-lg border-2 border-navy-900/20 p-6">
                <p className="text-sm text-navy-700/60 mb-3">Keybox Code:</p>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-navy-900 font-mono tracking-widest">
                    2610
                  </span>
                  <button
                    onClick={copyCode}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      copiedCode
                        ? "bg-sage-100 text-sage-900"
                        : "bg-gold-100 text-gold-900 hover:bg-gold-200"
                    }`}
                  >
                    {copiedCode ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
              <p className="text-sm text-navy-700/60 mt-4">
                ℹ️ The keybox is located underneath the doorbell on the left side of the front door
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-navy-900 mb-8">Entry Steps</h3>
          {CheckInSteps.map((step, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-navy-600 text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-lg font-semibold text-navy-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-navy-700/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Welcome note */}
        <div className="mt-12 bg-gold-50 border-l-4 border-navy-600 p-6 rounded-r-lg">
          <p className="text-navy-900 font-semibold mb-2">Welcome Package</p>
          <p className="text-navy-700/70">
            You'll find a welcome card on the table with WiFi details, emergency numbers, and
            a small gift from us. Enjoy your stay!
          </p>
        </div>
      </div>
    </section>
  );
}
