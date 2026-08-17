import CanalHouse from "./CanalHouse";
import Icon from "./Icon";

const quickInfo = [
  { label: "Adres", value: "Lijnbaansgracht 204-1, Amsterdam" },
  { label: "Inchecken", value: "Vanaf 14.00 uur" },
  { label: "Uitchecken", value: "Vóór 12.00 uur" },
  { label: "Noodgeval", value: "112" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-ink-950 px-6 pb-32 pt-24 sm:px-10 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
          Contact
        </p>
        <h2 className="mt-5 font-display text-[2.5rem] font-light leading-[1.05] text-bone-50 sm:text-5xl">
          We zijn er voor u
        </h2>
        <div className="mt-6 h-px w-14 bg-brass-400/60" />

        <div className="mt-12 grid gap-12 sm:grid-cols-2 sm:gap-10">
          {/* Contact */}
          <div>
            <div className="flex items-start gap-4">
              <Icon name="chat" className="mt-1 h-5 w-5 shrink-0 text-brass-300" />
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-300">
                  Liefst via
                </p>
                <p className="mt-2 font-display text-2xl font-light text-bone-50">
                  Airbnb-chat
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">
                  Stuur ons een bericht in de app — daar reageren we het
                  snelst, meestal binnen een half uur.
                </p>
              </div>
            </div>
          </div>

          {/* Quick info */}
          <dl className="space-y-5">
            {quickInfo.map((item) => (
              <div
                key={item.label}
                className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
              >
                <dt className="text-[0.65rem] uppercase tracking-[0.2em] text-ink-400">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-[0.95rem] text-bone-100">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Closing note */}
        <div className="mt-20 border-t border-white/10 pt-14">
          <CanalHouse className="h-24 w-auto text-brass-300/40" />
          <blockquote className="mt-10 max-w-xl font-display text-2xl font-light leading-snug text-bone-100 sm:text-3xl">
            Welkom in Amsterdam. We hopen dat u de stad ontdekt vanuit uw eigen
            plek aan de gracht — en dat u zich hier even echt thuis voelt.
          </blockquote>
          <p className="mt-8 text-[0.68rem] uppercase tracking-[0.25em] text-brass-300">
            Jimmy
          </p>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-[0.7rem] text-ink-400">
            Lijnbaansgracht 204-1 · Amsterdam · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
