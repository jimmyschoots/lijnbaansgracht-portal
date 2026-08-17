"use client";

import { useState } from "react";
import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 first:mt-0">
      <h4 className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
        {label}
      </h4>
      <div className="mt-2.5 space-y-2 text-sm leading-relaxed text-ink-700/80">
        {children}
      </div>
    </div>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 border-l border-brass-400/50 pl-4 text-sm italic text-ink-700/60">
      {children}
    </p>
  );
}

function WifiPanel() {
  const [copied, setCopied] = useState(false);
  const password = "WelcometoAmsterdam2026!";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — the password is on screen anyway */
    }
  };

  return (
    <>
      <div className="rounded-sm bg-ink-950 px-6 py-7 sm:px-8">
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-300">
          Netwerk
        </p>
        <p className="mt-2 font-mono text-lg text-bone-50">AIRBNB GUESTS</p>

        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-brass-300">
          Wachtwoord
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="break-all font-mono text-lg text-bone-50">{password}</p>
          <button
            onClick={copy}
            className="min-h-[2.5rem] shrink-0 rounded-sm border border-brass-400/40 px-4 text-[0.68rem] uppercase tracking-[0.2em] text-brass-300 transition-colors hover:border-brass-400 hover:text-brass-200"
          >
            {copied ? "Gekopieerd" : "Kopieer"}
          </button>
        </div>
      </div>
      <Detail label="Snelheid">
        <p>400 Mbps down / 40 Mbps up — ruim voldoende voor videobellen en streamen.</p>
      </Detail>
      <Tip>
        Werkt het niet? Herstart de router onder het keukenblad.
      </Tip>
    </>
  );
}

const guideItems: {
  id: string;
  title: string;
  icon: IconName;
  content: React.ReactNode;
}[] = [
  {
    id: "wifi",
    title: "Wifi & internet",
    icon: "wifi",
    content: <WifiPanel />,
  },
  {
    id: "climate",
    title: "Verwarming & ramen",
    icon: "thermometer",
    content: (
      <>
        <Detail label="Verwarming">
          <p>
            De thermostaat hangt in de woonkamer. Stel de gewenste temperatuur
            in; de verwarming regelt de rest.
          </p>
          <Tip>Sluit &apos;s avonds de luiken — dat scheelt merkbaar in de warmte.</Tip>
        </Detail>
        <Detail label="Ramen">
          <p>
            Alle ramen openen naar binnen. Draai de kruk een kwartslag en trek
            het raam naar u toe.
          </p>
          <Tip>De bries vanaf de gracht is op een zomeravond het mooiste van het huis.</Tip>
        </Detail>
      </>
    ),
  },
  {
    id: "lights",
    title: "Verlichting & tv",
    icon: "bulb",
    content: (
      <>
        <Detail label="Verlichting">
          <p>De meeste lampen zijn dimbaar met de schuifschakelaar naast de deur.</p>
        </Detail>
        <Detail label="Televisie">
          <p>
            De tv in de woonkamer heeft Netflix, YouTube en andere apps. Meld u
            gerust aan met uw eigen account — log bij vertrek weer uit.
          </p>
        </Detail>
      </>
    ),
  },
  {
    id: "kitchen",
    title: "Keuken",
    icon: "pot",
    content: (
      <>
        <Detail label="Apparatuur">
          <p>Inductiekookplaat — gebruik alleen pannen met magnetische bodem.</p>
          <p>Elektrische oven met boven- en onderwarmte.</p>
          <p>Vaatwasser; tabletten staan onder de gootsteen.</p>
          <p>Koffiemachine met instructies op het aanrecht.</p>
        </Detail>
        <Detail label="Neem gerust">
          <p>
            We hebben zout, peper, olie, pasta, rijst, thee en koffie
            klaargezet. Gebruik wat u nodig heeft.
          </p>
        </Detail>
        <Detail label="Bij vertrek">
          <p>Zet de vaatwasser aan en neem de afwas mee in de machine.</p>
        </Detail>
      </>
    ),
  },
  {
    id: "bathroom",
    title: "Badkamer",
    icon: "shower",
    content: (
      <>
        <Detail label="Douche">
          <p>
            Draai de mengkraan voor temperatuur en straal. U kunt kiezen tussen
            de handdouche en de regendouche.
          </p>
        </Detail>
        <Detail label="Ventilatie">
          <p>
            Zet de ventilator aan tijdens en na het douchen — de schakelaar zit
            naast de deur.
          </p>
        </Detail>
        <Detail label="Handdoeken">
          <p>Uw handdoeken liggen warm op de radiator.</p>
        </Detail>
      </>
    ),
  },
  {
    id: "trash",
    title: "Afval & recycling",
    icon: "recycle",
    content: (
      <>
        <Detail label="Waar">
          <p>De bakken staan in de bergkast bij de entree.</p>
        </Detail>
        <Detail label="Scheiden">
          <p>Plastic &amp; blik — flessen, blikjes, verpakkingen</p>
          <p>Papier &amp; karton — dozen, kranten, post</p>
          <p>Glas — flessen en potten</p>
          <p>GFT — etensresten en plantaardig afval</p>
          <p>Restafval — al het overige</p>
        </Detail>
        <Tip>
          Glas en papier kunnen in de ondergrondse containers op de hoek.
        </Tip>
      </>
    ),
  },
  {
    id: "safety",
    title: "Veiligheid & noodgevallen",
    icon: "alert",
    content: (
      <>
        <div className="rounded-sm border border-brass-400/40 bg-bone-100 px-6 py-5">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
            Noodgeval
          </p>
          <p className="mt-2 font-display text-3xl font-light text-ink-900">
            112
          </p>
          <p className="mt-1 text-sm text-ink-700/70">
            Politie, brandweer en ambulance — vanaf elke telefoon.
          </p>
        </div>
        <Detail label="Rookmelders">
          <p>
            In de slaapkamer en de woonkamer hangen rookmelders. Schakel deze
            alstublieft niet uit.
          </p>
        </Detail>
        <Detail label="EHBO">
          <p>Een EHBO-doos staat in het badkamerkastje.</p>
        </Detail>
        <Detail label="Belangrijke nummers">
          <p>Huisartsenpost — +31 20 664 6100</p>
          <p>Politie, geen spoed — 0900 8844</p>
        </Detail>
      </>
    ),
  },
];

export default function Guide() {
  const [openId, setOpenId] = useState<string | null>("wifi");

  return (
    <section
      id="guide"
      className="bg-bone-100 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="In huis"
          title="Huisgids"
          subtitle="Alles wat u tijdens uw verblijf nodig heeft, van de thermostaat tot het afval."
        />

        <div className="border-t border-ink-900/10">
          {guideItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-ink-900/10">
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full min-h-[4rem] items-center gap-4 py-5 text-left transition-colors hover:text-brass-600"
                >
                  <Icon
                    name={item.icon}
                    className={`h-5 w-5 shrink-0 transition-colors ${
                      isOpen ? "text-brass-500" : "text-ink-700/50"
                    }`}
                  />
                  <span className="flex-1 font-display text-xl text-ink-900 sm:text-2xl">
                    {item.title}
                  </span>
                  <Icon
                    name="chevronDown"
                    className={`h-4 w-4 shrink-0 text-ink-700/40 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-9 pl-9 pr-1 sm:pl-9">{item.content}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
