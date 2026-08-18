"use client";

import { useState } from "react";
import Icon, { type IconName } from "./Icon";
import SectionHeading from "./SectionHeading";

const rooms: {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  details: string[];
}[] = [
  {
    id: "living",
    name: "Living room",
    icon: "sofa",
    description: "Open living space looking out over the canal.",
    details: [
      "Comfortable seating",
      "Smart TV with Netflix",
      "Tall windows on the canal",
      "Dining table for two",
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    icon: "bed",
    description: "A quiet bedroom at the back of the apartment.",
    details: [
      "Double bed with linen bedding",
      "Blackout curtains",
      "Wooden wardrobe",
      "Window on the canal",
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: "pot",
    description: "Fully equipped for cooking a proper meal.",
    details: [
      "Induction hob and oven",
      "Dishwasher and microwave",
      "Fridge with freezer",
      "Coffee machine and kettle",
      "Full set of crockery and pans",
    ],
  },
  {
    id: "bathroom",
    name: "Bathroom",
    icon: "shower",
    description: "Bright bathroom with a rain shower.",
    details: [
      "Rain shower",
      "Heated mirror",
      "Toiletries provided",
      "Heated towel rail",
    ],
  },
];

export default function Tour() {
  const [activeRoom, setActiveRoom] = useState(0);
  const room = rooms[activeRoom];

  const next = () => setActiveRoom((prev) => (prev + 1) % rooms.length);
  const prev = () =>
    setActiveRoom((prev) => (prev === 0 ? rooms.length - 1 : prev - 1));

  return (
    <section
      id="tour"
      className="bg-bone-50 px-6 py-24 sm:px-10 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="The apartment"
          title="The rooms"
          subtitle="Four rooms on the first floor, with the canal at the front."
        />

        {/* Room stage */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-ink-950 sm:aspect-[16/10]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brass-400/[0.06] blur-3xl"
          />
          <div className="relative flex h-full flex-col justify-between p-7 sm:p-10">
            {/* Counter and controls share the top row so they never sit on the copy */}
            <div className="flex items-center justify-between">
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-brass-300">
                {String(activeRoom + 1).padStart(2, "0")} / 0{rooms.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={prev}
                  aria-label="Previous room"
                  className="flex h-11 w-11 items-center justify-center text-bone-200/60 transition-colors hover:text-brass-300"
                >
                  <Icon name="chevronLeft" className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next room"
                  className="flex h-11 w-11 items-center justify-center text-bone-200/60 transition-colors hover:text-brass-300"
                >
                  <Icon name="chevronRight" className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <Icon
                name={room.icon}
                className="h-9 w-9 text-brass-300/80 sm:h-10 sm:w-10"
              />
              <h3 className="mt-5 font-display text-4xl font-light text-bone-50 sm:text-5xl">
                {room.name}
              </h3>
              <p className="mt-3 text-sm text-ink-300 sm:text-base">
                {room.description}
              </p>

              <ul className="mt-7 grid gap-x-8 gap-y-2.5 border-t border-white/10 pt-6 sm:grid-cols-2">
                {room.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2.5 text-sm text-bone-200"
                  >
                    <Icon
                      name="check"
                      className="mt-1 h-3 w-3 shrink-0 text-brass-400"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Room selector */}
        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
          {rooms.map((r, index) => {
            const isActive = index === activeRoom;
            return (
              <button
                key={r.id}
                onClick={() => setActiveRoom(index)}
                aria-pressed={isActive}
                className={`flex min-h-[4.5rem] flex-col items-center justify-center gap-2 rounded-sm border px-1 py-3 transition-colors ${
                  isActive
                    ? "border-brass-400 bg-bone-100 text-ink-900"
                    : "border-ink-900/10 text-ink-700/60 hover:border-ink-900/25"
                }`}
              >
                <Icon name={r.icon} className="h-5 w-5" />
                <span className="text-[0.65rem] tracking-wide">{r.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
