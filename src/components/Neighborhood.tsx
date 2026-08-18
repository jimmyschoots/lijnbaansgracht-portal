import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";
import {
  AIRBNB_GUIDEBOOK_URL,
  APARTMENT_ADDRESS,
  mapSearchUrl,
  walkingDirectionsUrl,
} from "@/lib/links";

const spots: {
  name: string;
  /** What we hand Google Maps — more precise than the display name. */
  destination: string;
  type: string;
  distance: string;
  icon: IconName;
  description: string;
}[] = [
  {
    name: "De Negen Straatjes",
    destination: "De Negen Straatjes, Amsterdam",
    type: "Shops & cafés",
    distance: "10 min walk",
    icon: "cart",
    description:
      "Nine little cross streets between the canals, full of small shops, bookstores and coffee bars.",
  },
  {
    name: "The Jordaan",
    destination: "Jordaan, Amsterdam",
    type: "Neighbourhood",
    distance: "5 min walk",
    icon: "coffee",
    description:
      "The best part of town to wander without a plan. Brown cafés, hidden courtyards, and the Noordermarkt on Saturdays.",
  },
  {
    name: "Vondelpark",
    destination: "Vondelpark, Amsterdam",
    type: "Park",
    distance: "12 min walk",
    icon: "flower",
    description:
      "The green heart of the city. Lovely for a morning walk, or a drink at the Blauwe Theehuis.",
  },
  {
    name: "Rijksmuseum",
    destination: "Rijksmuseum, Museumstraat 1, Amsterdam",
    type: "Museum",
    distance: "15 min walk",
    icon: "palette",
    description:
      "Rembrandt's Night Watch and the Vermeers. Book online — it saves you the queue at the entrance.",
  },
  {
    name: "Leidseplein",
    destination: "Leidseplein, Amsterdam",
    type: "Nightlife",
    distance: "5 min walk",
    icon: "beer",
    description:
      "Melkweg and Paradiso are around the corner for live music, with terraces that stay open late.",
  },
  {
    name: "The canal ring",
    destination: "Grachtengordel, Amsterdam",
    type: "World Heritage",
    distance: "On your doorstep",
    icon: "landmark",
    description:
      "You are living in the middle of it: seventeenth-century canal houses, listed by UNESCO.",
  },
];

const tips: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "bike",
    title: "On a bike",
    text: "Amsterdam is best seen from the saddle. There are rental shops within walking distance — keep right, and use your arm to signal a turn.",
  },
  {
    icon: "tram",
    title: "Public transport",
    text: "Trams, buses and the metro run often. Contactless payment works on every line, so you don't need a travel card.",
  },
  {
    icon: "wine",
    title: "Gezelligheid",
    text: "Untranslatable, roughly: warmth and good company. Order a beer in a brown café, sit down, and stay longer than you planned.",
  },
  {
    icon: "croissant",
    title: "Breakfast",
    text: "The bakeries nearby are excellent. Ask for a fresh stroopwafel — warm, straight off the iron.",
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
          eyebrow="Out the door"
          title="The neighbourhood"
          subtitle="A few places we go ourselves, all within walking distance. Tap any of them for walking directions."
        />

        {/* Address */}
        <div className="border-y border-ink-900/10 py-8">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
            Our address
          </p>
          <p className="mt-4 font-display text-3xl font-light leading-tight text-ink-900 sm:text-4xl">
            Lijnbaansgracht 204&#8209;1
          </p>
          <p className="mt-2 text-[0.95rem] text-ink-700/70">
            1016 XA Amsterdam
          </p>
          <a
            href={mapSearchUrl(APARTMENT_ADDRESS)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-[2.75rem] items-center gap-2.5 text-[0.7rem] uppercase tracking-[0.2em] text-brass-500 transition-colors hover:text-brass-600"
          >
            <Icon name="pin" className="h-4 w-4" />
            Open in Google Maps
          </a>
        </div>

        {/* Spots */}
        <div className="mt-16 grid sm:grid-cols-2">
          {spots.map((spot) => (
            <a
              key={spot.name}
              href={walkingDirectionsUrl(spot.destination)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-t border-ink-900/10 py-8 transition-colors hover:bg-bone-50 sm:px-7 sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
            >
              <div className="flex items-center justify-between gap-4">
                <Icon name={spot.icon} className="h-6 w-6 text-brass-500" />
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-ink-700/45">
                  {spot.distance}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink-900 transition-colors group-hover:text-brass-600 sm:text-2xl">
                {spot.name}
              </h3>
              <p className="mt-1 text-[0.68rem] uppercase tracking-[0.16em] text-brass-500">
                {spot.type}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                {spot.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.16em] text-ink-700/45 transition-colors group-hover:text-brass-500">
                <Icon name="pin" className="h-3.5 w-3.5" />
                Walking directions
              </span>
            </a>
          ))}
        </div>

        {/* The long version lives in our Airbnb guidebook */}
        <a
          href={AIRBNB_GUIDEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex min-h-[4.5rem] items-center justify-between gap-6 border-y border-ink-900/10 py-7 transition-colors hover:bg-bone-50 sm:px-7"
        >
          <div>
            <p className="font-display text-xl text-ink-900 transition-colors group-hover:text-brass-600 sm:text-2xl">
              More of our favourites
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700/70">
              Restaurants, markets and museums, collected in our Amsterdam
              guidebook on Airbnb.
            </p>
          </div>
          <Icon
            name="arrowUpRight"
            className="h-5 w-5 shrink-0 text-brass-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Tips */}
        <div className="mt-16 bg-ink-950 px-7 py-10 sm:px-10 sm:py-12">
          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
            From us to you
          </p>
          <h3 className="mt-5 font-display text-3xl font-light text-bone-50 sm:text-4xl">
            Small tips
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
