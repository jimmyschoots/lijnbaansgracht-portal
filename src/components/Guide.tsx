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
          Network
        </p>
        <p className="mt-2 font-mono text-lg text-bone-50">AIRBNB GUESTS</p>

        <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-brass-300">
          Password
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
          <p className="break-all font-mono text-lg text-bone-50">{password}</p>
          <button
            onClick={copy}
            className="min-h-[2.5rem] shrink-0 rounded-sm border border-brass-400/40 px-4 text-[0.68rem] uppercase tracking-[0.2em] text-brass-300 transition-colors hover:border-brass-400 hover:text-brass-200"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
      <Detail label="Speed">
        <p>
          400 Mbps down / 40 Mbps up — plenty for video calls and streaming.
        </p>
      </Detail>
      <Tip>Not connecting? Restart the router under the kitchen counter.</Tip>
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
    title: "Heating & windows",
    icon: "thermometer",
    content: (
      <>
        <Detail label="Heating">
          <p>
            The thermostat is in the living room. Set the temperature you want
            and the heating takes care of the rest.
          </p>
          <Tip>
            Closing the shutters in the evening makes a noticeable difference.
          </Tip>
        </Detail>
        <Detail label="Windows">
          <p>
            All windows open inwards. Turn the handle a quarter turn and pull
            the window towards you.
          </p>
          <Tip>
            The breeze off the canal on a summer evening is the best thing about
            this house.
          </Tip>
        </Detail>
      </>
    ),
  },
  {
    id: "lights",
    title: "Lighting & TV",
    icon: "bulb",
    content: (
      <>
        <Detail label="Lighting">
          <p>
            Most lights dim using the slider switch beside the door.
          </p>
        </Detail>
        <Detail label="Television">
          <p>
            The TV in the living room has Netflix, YouTube and other apps. Feel
            free to sign in with your own account — just remember to sign out
            before you leave.
          </p>
        </Detail>
      </>
    ),
  },
  {
    id: "kitchen",
    title: "Kitchen",
    icon: "pot",
    content: (
      <>
        <Detail label="Appliances">
          <p>Induction hob — only pans with a magnetic base will work.</p>
          <p>Electric oven with top and bottom heat.</p>
          <p>Dishwasher; tablets are under the sink.</p>
          <p>Coffee machine, with instructions on the worktop.</p>
        </Detail>
        <Detail label="Help yourself">
          <p>
            We have left salt, pepper, oil, pasta, rice, tea and coffee for you.
            Use whatever you need.
          </p>
        </Detail>
        <Detail label="Before you leave">
          <p>Load the dishwasher and start it on your way out.</p>
        </Detail>
      </>
    ),
  },
  {
    id: "bathroom",
    title: "Bathroom",
    icon: "shower",
    content: (
      <>
        <Detail label="Shower">
          <p>
            Turn the mixer tap for temperature and flow. You can switch between
            the handheld and the rain shower.
          </p>
        </Detail>
        <Detail label="Ventilation">
          <p>
            Switch the fan on while you shower and leave it running afterwards —
            the switch is beside the door.
          </p>
        </Detail>
        <Detail label="Towels">
          <p>Your towels are warming on the towel rail.</p>
        </Detail>
      </>
    ),
  },
  {
    id: "trash",
    title: "Waste & recycling",
    icon: "recycle",
    content: (
      <>
        <Detail label="Where">
          <p>The bins are in the storage cupboard by the entrance.</p>
        </Detail>
        <Detail label="Sorting">
          <p>Plastic &amp; cans — bottles, tins, packaging</p>
          <p>Paper &amp; card — boxes, newspapers, post</p>
          <p>Glass — bottles and jars</p>
          <p>Food waste — leftovers and plant matter</p>
          <p>General waste — everything else</p>
        </Detail>
        <Tip>
          Glass and paper can go in the underground containers on the corner.
        </Tip>
      </>
    ),
  },
  {
    id: "safety",
    title: "Safety & emergencies",
    icon: "alert",
    content: (
      <>
        <div className="rounded-sm border border-brass-400/40 bg-bone-100 px-6 py-5">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-brass-500">
            Emergency
          </p>
          <p className="mt-2 font-display text-3xl font-light text-ink-900">
            112
          </p>
          <p className="mt-1 text-sm text-ink-700/70">
            Police, fire and ambulance — from any phone.
          </p>
        </div>
        <Detail label="Smoke alarms">
          <p>
            There are smoke alarms in the bedroom and the living room. Please
            don&apos;t disable them.
          </p>
        </Detail>
        <Detail label="First aid">
          <p>A first aid kit is in the bathroom cabinet.</p>
        </Detail>
        <Detail label="Useful numbers">
          <p>Out-of-hours GP — +31 20 664 6100</p>
          <p>Police, non-emergency — 0900 8844</p>
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
          eyebrow="Inside"
          title="House guide"
          subtitle="Everything you might need during your stay, from the thermostat to the bins."
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
