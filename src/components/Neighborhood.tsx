import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const spots: {
  name: string;
  type: string;
  distance: string;
  icon: IconName;
  description: string;
}[] = [
  {
    name: "De Negen Straatjes",
    type: "Winkels & cafés",
    distance: "10 min lopen",
    icon: "cart",
    description:
      "Negen dwarsstraatjes vol kleine winkels, boekhandels en koffiezaken tussen de grachten.",
  },
  {
    name: "Jordaan",
    type: "Buurt",
    distance: "5 min lopen",
    icon: "coffee",
    description:
      "De mooiste buurt om doelloos rond te lopen. Bruine kroegen, hofjes en op maandag de Noordermarkt.",
  },
  {
    name: "Vondelpark",
    type: "Park",
    distance: "12 min lopen",
    icon: "flower",
    description:
      "Het groene hart van de stad. Perfect voor een ochtendwandeling of een borrel bij het Blauwe Theehuis.",
  },
  {
    name: "Rijksmuseum",
    type: "Museum",
    distance: "15 min lopen",
    icon: "palette",
    description:
      "De Nachtwacht en Vermeer. Reserveer online — dat scheelt u de rij bij de ingang.",
  },
  {
    name: "Leidseplein",
    type: "Uitgaan",
    distance: "5 min lopen",
    icon: "beer",
    description:
      "Melkweg en Paradiso om de hoek voor concerten, plus terrassen tot laat in de avond.",
  },
  {
    name: "Grachtengordel",
    type: "Werelderfgoed",
    distance: "Voor de deur",
    icon: "landmark",
    description:
      "U woont er middenin: zeventiende-eeuwse grachtenpanden, UNESCO-werelderfgoed.",
  },
];

const tips: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bike",
    title: "Op de fiets",
    text: "Amsterdam is het mooiste vanaf het zadel. Er zijn verhuurzaken op loopafstand — houd rechts aan en gebruik uw hand om af te slaan.",
  },
  {
    icon: "tram",
    title: "Openbaar vervoer",
    text: "Tram, bus en metro rijden frequent. Een OV-chipkaart of contactloos betalen werkt op alle lijnen.",
  },
  {
    icon: "wine",
    title: "Gezelligheid",
    text: "Onvertaalbaar. Bestel een bier in een bruine kroeg, ga zitten en blijf wat langer dan u van plan was.",
  },
  {
    icon: "croissant",
    title: "Ontbijt",
    text: "De bakkers in de buurt zijn uitstekend. Vraag om een verse stroopwafel — warm, van de plaat.",
  },
];

export default function Neighborhood() {
  return (
    <section
      id="neighborhood"
      className="bg-bone-100 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Buiten de deur"
          title="De buurt"
          subtitle="Een paar plekken waar we zelf graag komen, allemaal op loopafstand."
        />

        {/* Address */}
        <div className="border-y border-ink-900/10 py-8">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
            Ons adres
          </p>
          <p className="mt-4 font-display text-3xl font-light leading-tight text-ink-900 sm:text-4xl">
            Lijnbaansgracht 204&#8209;1
          </p>
          <p className="mt-2 text-[0.95rem] text-ink-700/70">
            1016 XA Amsterdam
          </p>
        </div>

        {/* Spots */}
        <div className="mt-16 grid sm:grid-cols-2">
          {spots.map((spot) => (
            <article
              key={spot.name}
              className="border-t border-ink-900/10 py-8 sm:px-7 sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0"
            >
              <div className="flex items-center justify-between gap-4">
                <Icon name={spot.icon} className="h-6 w-6 text-brass-500" />
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-700/45">
                  {spot.distance}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-900 sm:text-2xl">
                {spot.name}
              </h3>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-brass-500">
                {spot.type}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                {spot.description}
              </p>
            </article>
          ))}
        </div>

        {/* Tips */}
        <div className="mt-16 bg-ink-950 px-7 py-10 sm:px-10 sm:py-12">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
            Van ons aan u
          </p>
          <h3 className="mt-5 font-display text-3xl font-light text-bone-50 sm:text-4xl">
            Kleine tips
          </h3>

          <div className="mt-10 space-y-8">
            {tips.map((tip) => (
              <div key={tip.title} className="flex gap-5">
                <Icon
                  name={tip.icon}
                  className="mt-0.5 h-5 w-5 shrink-0 text-brass-300"
                />
                <div>
                  <h4 className="font-display text-lg text-bone-50">
                    {tip.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                    {tip.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
