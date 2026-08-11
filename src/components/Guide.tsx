"use client";

import { useState } from "react";

const guideItems = [
  {
    id: "climate",
    title: "Thermostat & Windows",
    icon: "🌡️",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-amber-950 mb-2">Heating</h5>
          <p className="text-amber-900/70 mb-3">
            The thermostat is located in the living room. Set your desired temperature and the heating will adjust automatically.
          </p>
          <p className="text-sm text-amber-900/60">
            💡 Tip: In winter, close the shutters at night to retain heat.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Windows</h5>
          <p className="text-amber-900/70 mb-3">
            All windows open from the inside. For ventilation, simply push the window inward and turn the handle to open. To close, reverse the motion.
          </p>
          <p className="text-sm text-amber-900/60">
            💡 Tip: Open windows to let in fresh air and natural light. The canal breeze is lovely!
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "lights",
    title: "Lights & TV",
    icon: "💡",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-amber-950 mb-2">Lighting</h5>
          <p className="text-amber-900/70 mb-3">
            Most lights have dimmer switches. Slide the switch up to brighten or down to dim.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Smart TV</h5>
          <p className="text-amber-900/70 mb-3">
            The TV in the living area has Netflix, YouTube, and other streaming apps installed. Use the remote to navigate, or ask for help if needed.
          </p>
          <p className="text-sm text-amber-900/60">
            💡 Enjoy! We recommend some great Dutch films and international content.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "kitchen",
    title: "Kitchen",
    icon: "🍳",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-amber-950 mb-2">Appliances</h5>
          <ul className="space-y-2 text-amber-900/70">
            <li>• <strong>Cooktop:</strong> Induction cooktop - place magnetic cookware on the surface and adjust heat</li>
            <li>• <strong>Oven:</strong> Electric oven with both bake and broil functions</li>
            <li>• <strong>Dishwasher:</strong> Dishwasher detergent is under the sink</li>
            <li>• <strong>Coffee:</strong> Espresso/coffee machine with instructions on the counter</li>
          </ul>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Help Yourself To</h5>
          <p className="text-amber-900/70">
            We've stocked the kitchen with basics: salt, pepper, oil, pasta, rice, tea, and coffee. Feel free to use what you need!
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Cleanup</h5>
          <p className="text-amber-900/70 mb-2">
            Please load the dishwasher with used dishes and run it before checkout.
          </p>
          <p className="text-sm text-amber-900/60">
            💡 Tip: Wipe down surfaces and take out the trash before you leave.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "bathroom",
    title: "Bathroom",
    icon: "🚿",
    content: (
      <div className="space-y-4">
        <div>
          <h5 className="font-semibold text-amber-950 mb-2">Shower</h5>
          <p className="text-amber-900/70 mb-3">
            The shower has hot water. Turn the mixer faucet to adjust temperature and flow. Use the handheld shower head or overhead rain shower.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Ventilation</h5>
          <p className="text-amber-900/70 mb-3">
            Turn on the ventilation fan during and after showers to prevent moisture buildup. The switch is on the wall.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Heated Towel Rack</h5>
          <p className="text-amber-900/70">
            Your towels are warming on the heated rack. Luxury!
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "trash",
    title: "Trash & Recycling",
    icon: "♻️",
    content: (
      <div className="space-y-4">
        <p className="text-amber-900/70">
          Amsterdam takes recycling seriously! Trash and recycling bins are in the storage closet by the entrance.
        </p>
        <div className="bg-amber-50 p-4 rounded border border-amber-200">
          <p className="text-sm text-amber-950 mb-2 font-semibold">Sorting Guide:</p>
          <ul className="text-sm text-amber-900/70 space-y-1">
            <li>• <strong>Plastic & Metal:</strong> Bottles, cans, packaging</li>
            <li>• <strong>Paper & Cardboard:</strong> Boxes, newspaper, mail</li>
            <li>• <strong>Glass:</strong> Glass bottles and jars</li>
            <li>• <strong>Organic:</strong> Food waste and plant material</li>
            <li>• <strong>General:</strong> Everything else</li>
          </ul>
        </div>
        <p className="text-sm text-amber-900/60">
          💡 Tip: Put bins out on the street on collection day for pickup.
        </p>
      </div>
    ),
  },
  {
    id: "wifi",
    title: "WiFi & Internet",
    icon: "📶",
    content: (
      <div className="space-y-4">
        <div className="bg-white border-2 border-amber-900/20 rounded-lg p-6">
          <p className="text-sm text-amber-900/60 mb-2">Network Name (SSID):</p>
          <p className="text-lg font-mono text-amber-950 mb-4 font-semibold">
            AIRBNB GUESTS
          </p>
          <p className="text-sm text-amber-900/60 mb-2">Password:</p>
          <div className="flex items-center gap-3">
            <p className="text-lg font-mono text-amber-950 font-semibold">
              WelcometoAmsterdam2026!
            </p>
            <button
              onClick={() => {
                navigator.clipboard.writeText("WelcometoAmsterdam2026!");
              }}
              className="px-3 py-1 bg-amber-100 text-amber-900 text-sm font-medium rounded hover:bg-amber-200 transition-colors"
            >
              Copy
            </button>
          </div>
        </div>
        <div className="space-y-2 text-sm text-amber-900/70">
          <p>📊 <strong>Speed:</strong> 400 Mbps download / 40 Mbps upload</p>
          <p>✅ <strong>Reliability:</strong> Excellent for streaming, video calls, and working</p>
          <p className="text-amber-900/60">💡 If connection issues arise, restart the router (located under the kitchen counter).</p>
        </div>
      </div>
    ),
  },
  {
    id: "safety",
    title: "Safety & Emergency",
    icon: "🚨",
    content: (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-950 font-semibold mb-2">🚨 Emergency: Call 112</p>
          <p className="text-red-900/70 text-sm">
            For police, fire, or medical emergencies, call 112 from any phone.
          </p>
        </div>
        <div>
          <h5 className="font-semibold text-amber-950 mb-2">Smoke Detectors</h5>
          <p className="text-amber-900/70">
            Smoke detectors are installed in the bedroom and living area. Please don't disable them.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">First-Aid Kit</h5>
          <p className="text-amber-900/70 mb-2">
            A well-stocked first-aid kit is in the bathroom cabinet for minor cuts and scrapes.
          </p>
        </div>
        <div className="border-t border-amber-100 pt-4">
          <h5 className="font-semibold text-amber-950 mb-2">Important Numbers</h5>
          <ul className="space-y-1 text-sm text-amber-900/70">
            <li>📞 <strong>Emergency:</strong> 112</li>
            <li>🏥 <strong>Medical Non-Emergency:</strong> +31 20 6646100</li>
            <li>🚓 <strong>Police Non-Emergency:</strong> 0900-8844</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function Guide() {
  const [openId, setOpenId] = useState<string | null>("wifi");

  return (
    <section
      id="guide"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t border-amber-100"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-amber-950 mb-4">
            House Guide
          </h2>
          <p className="text-amber-900/70 text-lg">
            Everything you need to know about your apartment
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {guideItems.map((item) => (
            <div
              key={item.id}
              className="border border-amber-200 rounded-lg overflow-hidden hover:border-amber-300 transition-colors"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-4 bg-white hover:bg-amber-50 transition-colors flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-amber-950 text-lg">
                    {item.title}
                  </span>
                </div>
                <svg
                  className={`w-6 h-6 text-amber-900 transition-transform ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
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
              </button>

              {openId === item.id && (
                <div className="px-6 py-4 bg-amber-50/50 border-t border-amber-200 animate-in fade-in">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
