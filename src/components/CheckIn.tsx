"use client";

import { useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Zoek het sleutelkastje",
    description:
      "Het kleine zilveren kastje hangt onder de bel, links naast de voordeur.",
  },
  {
    title: "Voer de code in",
    description:
      "Toets 2610 in om het kastje te openen en de sleutel te pakken.",
  },
  {
    title: "Open de voordeur",
    description:
      "Gebruik de sleutel voor de grote houten voordeur. Welkom thuis.",
  },
  {
    title: "Kom binnen",
    description:
      "Leg de sleutel op tafel en ontdek wat we voor u hebben klaargelegd.",
  },
];

export default function CheckIn() {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText("2610");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the code is on screen anyway */
    }
  };

  return (
    <section
      id="checkin"
      className="bg-bone-100 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Aankomst"
          title="Check-in"
          subtitle="Uw sleutel ligt klaar. Geen sleuteloverdracht, geen wachten — u kunt direct naar binnen."
        />

        {/* The code — the one thing guests need at the door */}
        <div className="overflow-hidden rounded-sm bg-ink-950">
          <div className="px-7 py-10 sm:px-12 sm:py-14">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
              Sleutelkastje
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-4">
              <span className="font-display text-[4rem] font-light leading-none tracking-[0.12em] text-bone-50 sm:text-[5rem]">
                2610
              </span>
              <button
                onClick={copyCode}
                className="min-h-[2.75rem] rounded-sm border border-brass-400/40 px-5 text-[0.7rem] uppercase tracking-[0.2em] text-brass-300 transition-colors hover:border-brass-400 hover:text-brass-200"
              >
                {copied ? "Gekopieerd" : "Kopieer"}
              </button>
            </div>
            <div className="mt-9 flex items-start gap-3 border-t border-white/10 pt-6">
              <Icon
                name="pin"
                className="mt-0.5 h-4 w-4 shrink-0 text-brass-300"
              />
              <p className="text-sm leading-relaxed text-ink-300">
                Onder de bel, aan de linkerkant van de voordeur.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <ol className="mt-16 sm:mt-20">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3rem_1fr] gap-x-5 border-t border-ink-900/10 py-7 sm:grid-cols-[4rem_1fr] sm:gap-x-8 sm:py-8"
            >
              <span className="font-display text-2xl font-light text-brass-500 sm:text-3xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-normal text-ink-900 sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70 sm:text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Welcome package */}
        <div className="mt-14 flex gap-5 border-l-2 border-brass-400 bg-bone-50 px-6 py-7 sm:px-8">
          <Icon name="gift" className="h-5 w-5 shrink-0 text-brass-500" />
          <div>
            <h3 className="font-display text-lg text-ink-900">Welkomstpakket</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
              Op tafel vindt u een kaart met de wifigegevens, belangrijke
              nummers en een kleine attentie van ons.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
