import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { AIRBNB_MESSAGES_URL } from "@/lib/links";

const steps = [
  {
    title: "Check your Airbnb messages",
    description:
      "We send your entry details the day before you arrive, along with anything else you need to know.",
  },
  {
    title: "Arrive any time after 2:00 PM",
    description:
      "There is no key handover and nobody to wait for — come whenever suits your travel plans.",
  },
  {
    title: "Let yourself in",
    description:
      "Follow the instructions in your message to open the front door. Welcome home.",
  },
  {
    title: "Settle in",
    description:
      "Leave the key on the table and take a look at everything we have prepared for you.",
  },
];

export default function CheckIn() {
  return (
    <section
      id="checkin"
      className="bg-bone-100 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Arrival"
          title="Check-in"
          subtitle="Arrive on your own schedule. No key handover, no waiting, no need to meet anyone."
        />

        {/* Entry details live in Airbnb, not on a public page */}
        <div className="overflow-hidden rounded-sm bg-ink-950">
          <div className="px-7 py-10 sm:px-12 sm:py-14">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
              Your entry details
            </p>
            <h3 className="mt-6 font-display text-4xl font-light leading-tight text-bone-50 sm:text-5xl">
              Sent to you on Airbnb
            </h3>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-300 sm:text-[0.95rem]">
              For the safety of the apartment we keep entry instructions off
              this page. You will receive them directly in the Airbnb app
              before you arrive — and you can always ask us again there.
            </p>

            <a
              href={AIRBNB_MESSAGES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-[2.75rem] items-center gap-3 rounded-sm border border-brass-400/40 px-5 text-[0.7rem] uppercase tracking-[0.2em] text-brass-300 transition-colors hover:border-brass-400 hover:text-brass-200"
            >
              <Icon name="chat" className="h-4 w-4" />
              Open Airbnb messages
            </a>
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
            <h3 className="font-display text-lg text-ink-900">
              A welcome package
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
              On the table you will find a card with the wifi details, useful
              numbers, and a small gift from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
