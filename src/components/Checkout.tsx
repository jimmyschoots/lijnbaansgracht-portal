"use client";

import { useState } from "react";

const checklistItems = [
  { id: 1, task: "Strip bed and leave linens in the corner", category: "Bedroom" },
  { id: 2, task: "Load dishwasher and start the cycle", category: "Kitchen" },
  { id: 3, task: "Wipe down kitchen counters and sink", category: "Kitchen" },
  { id: 4, task: "Empty trash and recycling bins", category: "Cleaning" },
  { id: 5, task: "Close all windows and doors", category: "Security" },
  { id: 6, task: "Turn off lights throughout apartment", category: "Utilities" },
  { id: 7, task: "Leave key on the table", category: "Check-out" },
  { id: 8, task: "Lock the front door", category: "Security" },
];

export default function Checkout() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const allChecked = checkedItems.length === checklistItems.length;

  return (
    <section
      id="checkout"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-t-2 border-gold-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-navy-900 mb-4">
            Check-out
          </h2>
          <p className="text-gold-600 text-lg font-light">
            Make sure everything is perfect before you leave
          </p>
        </div>

        {/* Checkout time */}
        <div className="bg-gradient-to-r from-gold-50 to-cream-50 border-l-4 border-gold-500 rounded-r-xl p-8 mb-8 shadow-lg">
          <p className="text-lg font-bold text-navy-900">
            🕐 Check-out Time: 12:00 PM
          </p>
          <p className="text-navy-600 mt-2">
            Please vacate the apartment by noon on your final day. If you need late checkout, contact us via Airbnb chat as soon as possible.
          </p>
        </div>

        {/* Checklist */}
        <div className="space-y-4 mb-8">
          {checklistItems.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-4 p-4 bg-white rounded-lg border border-gold-100 hover:border-gold-300 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={checkedItems.includes(item.id)}
                onChange={() => toggleItem(item.id)}
                className="w-6 h-6 mt-1 rounded accent-gold-600 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <p
                  className={`font-medium transition-all ${
                    checkedItems.includes(item.id)
                      ? "text-navy-700/50 line-through"
                      : "text-navy-900"
                  }`}
                >
                  {item.task}
                </p>
                <p className="text-xs text-navy-700/60 mt-1">{item.category}</p>
              </div>
              <div className="text-2xl">
                {checkedItems.includes(item.id) ? "✓" : "○"}
              </div>
            </label>
          ))}
        </div>

        {/* Completion message */}
        {allChecked && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-2xl mb-2">🎉</p>
            <p className="text-green-950 font-semibold text-lg">
              Perfect! You're all set for checkout.
            </p>
            <p className="text-green-900/70 mt-2">
              Thank you for being a wonderful guest. Safe travels!
            </p>
          </div>
        )}

        {/* Final notes */}
        <div className="mt-8 bg-gold-50 border-l-4 border-navy-600 p-6 rounded-r-lg">
          <h3 className="font-semibold text-navy-900 mb-3">Final Notes</h3>
          <ul className="space-y-2 text-sm text-navy-700/70">
            <li>
              • The key must be left on the table for the next guests or collection
            </li>
            <li>
              • Make sure all doors and windows are locked before leaving
            </li>
            <li>
              • Turn off the thermostat to save energy
            </li>
            <li>
              • Take any personal items with you
            </li>
            <li>
              • Please leave us a review on Airbnb - we love feedback!
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
