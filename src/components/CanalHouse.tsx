import type { SVGProps } from "react";

/**
 * Line drawing of an Amsterdam canal house: bell gable (klokgevel), hoisting
 * beam (hijsbalk), cross windows (kruiskozijnen), stoop, and the canal below.
 */
export default function CanalHouse(props: SVGProps<SVGSVGElement>) {
  const windowRows = [78, 114, 150];
  const windowCols = [44, 90];

  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Bell gable */}
      <path d="M30 62V52c0-10 14-12 22-18 8-6 12-16 28-16s20 10 28 16c8 6 22 8 22 18v10" />

      {/* Hoisting beam and hook */}
      <path d="M73 25h14" strokeWidth={1.4} />
      <path d="M80 25v8" />
      <circle cx="80" cy="35" r="2" />

      {/* Cornice */}
      <path d="M26 62h108" strokeWidth={1.4} />
      <path d="M30 62v134M130 62v134" />

      {/* Cross windows */}
      {windowRows.map((y) =>
        windowCols.map((x) => (
          <g key={`${x}-${y}`}>
            <rect x={x} y={y} width="26" height="28" />
            <path d={`M${x + 13} ${y}v28`} />
            <path d={`M${x} ${y + 10}h26`} />
          </g>
        )),
      )}

      {/* Ground floor: door with fanlight, flanked by windows */}
      <path d="M70 196v-28a10 10 0 0 1 20 0v28" />
      <path d="M70 176h20" />
      <path d="M80 176v20" />
      <rect x="39" y="170" width="20" height="22" />
      <path d="M49 170v22" />
      <rect x="101" y="170" width="20" height="22" />
      <path d="M111 170v22" />

      {/* Stoop */}
      <path d="M64 196h32M61 201h38M58 206h44" />

      {/* Canal */}
      <path d="M12 214h136" strokeWidth={1.3} />
      <path
        d="M22 222q14 4 28 0t28 0 28 0 28 0"
        opacity="0.55"
      />
      <path
        d="M30 230q13 4 25 0t25 0 25 0"
        opacity="0.3"
      />
    </svg>
  );
}
