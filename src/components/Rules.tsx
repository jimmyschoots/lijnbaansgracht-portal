import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const rules: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "users",
    title: "Alleen geboekte gasten",
    description:
      "Het appartement is er voor de gasten op de reservering. Bezoek kunnen we helaas niet toestaan.",
  },
  {
    icon: "sparkle",
    title: "Geen feesten",
    description:
      "Dit is een woonhuis in een rustige buurt. Bijeenkomsten en feesten zijn niet toegestaan.",
  },
  {
    icon: "moon",
    title: "Nachtrust",
    description:
      "Tussen 21.00 en 09.00 uur graag rekening houden met de buren.",
  },
  {
    icon: "smoke",
    title: "Rookvrij",
    description:
      "Roken is niet toegestaan, binnen noch op het balkon of bij de voordeur.",
  },
  {
    icon: "paw",
    title: "Geen huisdieren",
    description:
      "Het appartement is helaas niet geschikt voor huisdieren. Hulphonden zijn welkom.",
  },
  {
    icon: "camera",
    title: "Geen commerciële opnames",
    description:
      "Foto's voor uzelf mogen altijd. Commerciële shoots zijn niet toegestaan.",
  },
];

export default function Rules() {
  return (
    <section
      id="rules"
      className="bg-ink-950 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Goed om te weten"
          title="Huisregels"
          subtitle="Een paar afspraken houden het huis en de buurt prettig — voor u en voor wie na u komt."
          tone="dark"
        />

        <div className="grid sm:grid-cols-2">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="border-t border-white/10 py-8 sm:px-7 sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0"
            >
              <Icon name={rule.icon} className="h-6 w-6 text-brass-300" />
              <h3 className="mt-5 font-display text-xl text-bone-50 sm:text-2xl">
                {rule.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-300">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="font-display text-xl font-light leading-snug text-bone-100 sm:text-2xl">
            Dank dat u ons huis en onze buren met zorg behandelt.
          </p>
          <p className="mt-3 text-sm text-ink-300">
            Vragen? Stuur ons gerust een bericht via Airbnb.
          </p>
        </div>
      </div>
    </section>
  );
}
