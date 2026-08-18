"use client";

import { useEffect, useState } from "react";
import CanalHouse from "./CanalHouse";
import Icon from "./Icon";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink-950 px-6 py-24 sm:px-10"
    >
      {/* Soft brass glow, low and off-centre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[28rem] w-[28rem] rounded-full bg-brass-400/[0.07] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-ink-600/20 blur-[110px]"
      />

      <div className="relative mx-auto w-full max-w-3xl">
        <div
          className={`transition-all duration-[1200ms] ease-out ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <CanalHouse className="h-40 w-auto text-brass-300/60 sm:h-52" />
        </div>

        <div
          className={`mt-12 transition-all delay-150 duration-[1200ms] ease-out sm:mt-16 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-brass-300">
            Welcome
          </p>

          <h1 className="mt-6 font-display text-[3.25rem] font-light leading-[0.95] tracking-tight text-bone-50 sm:text-7xl lg:text-8xl">
            Lijnbaansgracht
            <span className="block text-brass-300">204&#8209;1</span>
          </h1>

          <div className="mt-8 h-px w-16 bg-brass-400/70" />

          <p className="mt-8 max-w-md font-display text-xl font-light leading-snug text-bone-200 sm:text-2xl">
            Your house on the canal, in the heart of Amsterdam.
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-300 sm:text-[0.95rem]">
            Everything you need for a perfect stay — arrival, house guide, wifi,
            and our favourite places in the neighbourhood.
          </p>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-28 flex justify-center transition-opacity delay-500 duration-1000 sm:bottom-24 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon
          name="arrowDown"
          className="h-5 w-5 animate-bounce text-brass-300/70"
        />
      </div>
    </section>
  );
}
