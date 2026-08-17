"use client";

import { useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const checklistItems = [
  { id: 1, task: "Beddengoed afhalen en in de hoek leggen", category: "Slaapkamer" },
  { id: 2, task: "Vaatwasser inruimen en aanzetten", category: "Keuken" },
  { id: 3, task: "Aanrecht en gootsteen schoonmaken", category: "Keuken" },
  { id: 4, task: "Afval en recycling legen", category: "Schoonmaak" },
  { id: 5, task: "Alle ramen en deuren sluiten", category: "Veiligheid" },
  { id: 6, task: "Lampen uitdoen", category: "Energie" },
  { id: 7, task: "Thermostaat lager zetten", category: "Energie" },
  { id: 8, task: "Sleutel op tafel leggen en voordeur op slot", category: "Vertrek" },
];

export default function Checkout() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const allChecked = checkedItems.length === checklistItems.length;

  return (
    <section
      id="checkout"
      className="bg-bone-50 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Vertrek"
          title="Check-out"
          subtitle="Een korte lijst, zodat u niets vergeet en wij het huis klaar kunnen maken voor de volgende gast."
        />

        <div className="flex items-start gap-5 border-y border-ink-900/10 py-7">
          <Icon name="clock" className="mt-1.5 h-5 w-5 shrink-0 text-brass-500" />
          <div>
            <p className="font-display text-2xl font-light text-ink-900">
              Uitchecken vóór 12.00 uur
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700/70">
              Later vertrekken? Laat het ons weten via Airbnb, dan kijken we wat
              mogelijk is.
            </p>
          </div>
        </div>

        <ul className="mt-10">
          {checklistItems.map((item) => {
            const isChecked = checkedItems.includes(item.id);
            return (
              <li key={item.id} className="border-b border-ink-900/10">
                <label className="flex min-h-[3.75rem] cursor-pointer items-center gap-4 py-4">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleItem(item.id)}
                    className="peer sr-only"
                  />
                  <span
                    aria-hidden="true"
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isChecked
                        ? "border-brass-400 bg-brass-400 text-ink-950"
                        : "border-ink-900/25"
                    }`}
                  >
                    {isChecked && <Icon name="check" className="h-3 w-3" />}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`block text-[0.95rem] transition-colors ${
                        isChecked
                          ? "text-ink-700/40 line-through"
                          : "text-ink-900"
                      }`}
                    >
                      {item.task}
                    </span>
                    <span className="mt-0.5 block text-[0.68rem] uppercase tracking-[0.16em] text-ink-700/40">
                      {item.category}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>

        {allChecked && (
          <div className="mt-10 border-l-2 border-brass-400 bg-bone-100 px-7 py-8">
            <p className="font-display text-2xl font-light text-ink-900">
              Alles gedaan — dank u wel.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
              Wat een fijne gast. Goede reis, en wie weet tot ziens aan de
              gracht.
            </p>
          </div>
        )}

        <div className="mt-12 border-t border-ink-900/10 pt-8">
          <h3 className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
            Tot slot
          </h3>
          <ul className="mt-4 space-y-2.5">
            {[
              "De sleutel blijft op tafel liggen — niet meenemen",
              "Controleer of alle ramen en deuren dicht zijn",
              "Neem uw persoonlijke spullen mee",
              "Een review op Airbnb stellen we enorm op prijs",
            ].map((note) => (
              <li
                key={note}
                className="flex items-start gap-3 text-sm leading-relaxed text-ink-700/70"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-3 shrink-0 bg-brass-400"
                />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
