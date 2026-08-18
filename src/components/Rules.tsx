import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const rules: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "users",
    title: "Booked guests only",
    description:
      "The apartment is for the guests on the reservation. We are not able to allow additional visitors.",
  },
  {
    icon: "sparkle",
    title: "No parties",
    description:
      "This is a family home in a quiet street. Gatherings and parties are not allowed.",
  },
  {
    icon: "moon",
    title: "Quiet hours",
    description:
      "Between 9:00 PM and 9:00 AM, please keep the noise down for the neighbours.",
  },
  {
    icon: "smoke",
    title: "No smoking",
    description:
      "Smoking is not permitted anywhere — inside, on the balcony, or by the front door.",
  },
  {
    icon: "paw",
    title: "No pets",
    description:
      "Sadly the apartment is not suitable for pets. Assistance animals are always welcome.",
  },
  {
    icon: "camera",
    title: "No commercial shoots",
    description:
      "Photos for yourself are always fine. Commercial photography and filming are not allowed.",
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
          eyebrow="Good to know"
          title="House rules"
          subtitle="A few agreements keep the house and the street pleasant — for you, and for whoever comes after you."
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
            Thank you for treating our home and our neighbours with care.
          </p>
          <p className="mt-3 text-sm text-ink-300">
            Any questions? Send us a message on Airbnb.
          </p>
        </div>
      </div>
    </section>
  );
}
