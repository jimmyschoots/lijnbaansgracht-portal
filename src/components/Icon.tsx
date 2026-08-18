import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  key: (
    <>
      <circle cx="8" cy="16" r="4" />
      <path d="M10.9 13.1 20.5 3.5" />
      <path d="m16.5 7.5 2.2 2.2" />
      <path d="m18.8 5.2 2.2 2.2" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.75" />
    </>
  ),
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
      <path d="M10 21v-6h4v6" />
    </>
  ),
  list: (
    <>
      <path d="M8.5 5h11M8.5 10h11M8.5 15h11M8.5 20h11" />
      <path d="M4.5 5h.01M4.5 10h.01M4.5 15h.01M4.5 20h.01" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2.5 2.5 0 0 1 2.5-2.5H20v16H6.5A2.5 2.5 0 0 0 4 21z" />
      <path d="M4 18.5A2.5 2.5 0 0 1 6.5 16H20" />
    </>
  ),
  wifi: (
    <>
      <path d="M2.5 8.5a15 15 0 0 1 19 0" />
      <path d="M5.75 12.25a10 10 0 0 1 12.5 0" />
      <path d="M9 16a5 5 0 0 1 6 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  chat: (
    <path d="M21 14.5a2 2 0 0 1-2 2H8.5L3.5 21V5.5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2z" />
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.75 20a6.25 6.25 0 0 1 12.5 0" />
      <path d="M16 5.4a3.5 3.5 0 0 1 0 6.2" />
      <path d="M17.5 14.75A6.25 6.25 0 0 1 21.25 20" />
    </>
  ),
  sparkle: (
    <>
      <path d="m11 3 1.7 4.3L17 9l-4.3 1.7L11 15l-1.7-4.3L5 9l4.3-1.7z" />
      <path d="m18 14.5.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9z" />
    </>
  ),
  moon: <path d="M20.5 14.8A8.5 8.5 0 0 1 9.2 3.5a8.75 8.75 0 1 0 11.3 11.3Z" />,
  smoke: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 18.4 18.4 5.6" />
      <path d="M4.5 14h10M17 14h2.5" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="6.5" cy="10" rx="1.9" ry="2.5" />
      <ellipse cx="10.5" cy="7" rx="1.9" ry="2.5" />
      <ellipse cx="15" cy="7.5" rx="1.9" ry="2.5" />
      <ellipse cx="18.5" cy="11" rx="1.9" ry="2.5" />
      <path d="M12.5 13c2.6 0 4.8 2 4.8 4.2 0 1.6-1.2 2.6-2.8 2.6-1 0-1.4-.4-2-.4s-1 .4-2 .4c-1.6 0-2.8-1-2.8-2.6C7.7 15 9.9 13 12.5 13Z" />
    </>
  ),
  camera: (
    <>
      <path d="M3 9a2 2 0 0 1 2-2h2.2l1.4-2h6.8l1.4 2H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  thermometer: (
    <path d="M14 14.9V4.75a2 2 0 1 0-4 0V14.9a4.25 4.25 0 1 0 4 0Z" />
  ),
  bulb: (
    <>
      <path d="M9.5 18.5h5M10.5 21.5h3" />
      <path d="M12 2.5a6 6 0 0 0-3.4 10.9c.6.5 1 1.2 1 2h4.8c0-.8.4-1.5 1-2A6 6 0 0 0 12 2.5Z" />
    </>
  ),
  pot: (
    <>
      <path d="M4 9.5h16V15a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15z" />
      <path d="M20 11h2M2 11h2" />
      <path d="M9.5 6.5c0-1.5 1-1.5 1-3M14.5 6.5c0-1.5 1-1.5 1-3" />
    </>
  ),
  shower: (
    <>
      <path d="M4 21V7.5a3 3 0 0 1 6 0" />
      <path d="M7.5 9.5h11l-2.5 3h-6z" />
      <path d="M10 16.5v1.5M13 15.5v2M16 16.5v1.5" />
    </>
  ),
  recycle: (
    <>
      <path d="M12 3.5 15 9h-6z" />
      <path d="m5.5 14.5 3-5.2 2.6 1.5-3 5.2z" />
      <path d="M4.5 16.5h6l-1.5 3.5" />
      <path d="M19.5 16.5h-6l1.5 3.5" />
      <path d="m18.5 14.5-3-5.2" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5 2.75 20h18.5z" />
      <path d="M12 9.75v4.5" />
      <circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  bed: (
    <>
      <path d="M3 19V6" />
      <path d="M3 12h18v7" />
      <path d="M7 12V9h5.5v3" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 12V8.5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2V12" />
      <path d="M2.5 14a2 2 0 0 1 4 0v2h11v-2a2 2 0 1 1 4 0v5.5h-19z" />
    </>
  ),
  cart: (
    <>
      <circle cx="9.5" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
      <path d="M2.5 3.5H5l2.6 12.5h11L21 7.5H6" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8.5h13V15a4.5 4.5 0 0 1-4.5 4.5h-4A4.5 4.5 0 0 1 4 15z" />
      <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7.5 2.5V5M11 2.5V5" />
    </>
  ),
  beer: (
    <>
      <path d="M7 4.5h8l-1 16H8z" />
      <path d="M15 8.5h2.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-2.2" />
    </>
  ),
  landmark: (
    <>
      <path d="M12 3 3 8.5h18z" />
      <path d="M5.5 11v7.5M10 11v7.5M14 11v7.5M18.5 11v7.5" />
      <path d="M3 21h18" />
    </>
  ),
  flower: (
    <>
      <circle cx="12" cy="8" r="2.25" />
      <path d="M12 5.75c0-1.8-1-2.75-2.25-2.75S7.5 4 7.5 5.75 9 8 10 8" />
      <path d="M12 5.75c0-1.8 1-2.75 2.25-2.75S16.5 4 16.5 5.75 15 8 14 8" />
      <path d="M12 10.25V21" />
      <path d="M12 15c-1.5-2-3.5-2.5-5-2 .5 2 2 3.5 5 3z" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.25c-5 0-9 3.9-9 8.75a8.75 8.75 0 0 0 8.75 8.75c1 0 1.75-.75 1.75-1.7 0-.55-.2-.95-.55-1.3-.3-.35-.5-.75-.5-1.2 0-.9.75-1.6 1.7-1.6H16A5 5 0 0 0 21 10c0-3.75-4-6.75-9-6.75Z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="11" cy="7.75" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.75V12l3.5 2.25" />
    </>
  ),
  gift: (
    <>
      <path d="M3.5 11.5h17V21h-17z" />
      <path d="M2.5 7.5h19v4h-19z" />
      <path d="M12 7.5V21" />
      <path d="M12 7.5S10.6 3 8.25 3a2.25 2.25 0 0 0 0 4.5Z" />
      <path d="M12 7.5S13.4 3 15.75 3a2.25 2.25 0 0 1 0 4.5Z" />
    </>
  ),
  bike: (
    <>
      <circle cx="5.5" cy="17" r="3.5" />
      <circle cx="18.5" cy="17" r="3.5" />
      <path d="m5.5 17 4-8h5l4 8" />
      <path d="M9.5 9h6" />
      <path d="M12 17h-1.5" />
    </>
  ),
  tram: (
    <>
      <rect x="5" y="3.5" width="14" height="14" rx="2.5" />
      <path d="M5 11h14" />
      <path d="M8.5 21 6 17.5M15.5 21l2.5-3.5" />
      <path d="M12 3.5V1.5" />
    </>
  ),
  wine: (
    <>
      <path d="M7 3.5h10l-.7 6a4.3 4.3 0 0 1-8.6 0z" />
      <path d="M12 14.5V21" />
      <path d="M8.5 21h7" />
    </>
  ),
  croissant: (
    <>
      <path d="M3 15.5c3.5 2.5 8 3 11 1.5" />
      <path d="M4 9.5C7 6 13 5 17 7.5s3.5 8 0 10c-2 1.2-4-.5-3.5-2.5" />
      <path d="M3 15.5 4 9.5" />
      <path d="M20.5 17.5 17 17" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10.5-11.5" />,
  arrowDown: (
    <>
      <path d="M12 4v15" />
      <path d="m5.5 13 6.5 6.5 6.5-6.5" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </>
  ),
  chevronLeft: <path d="m15 5-7 7 7 7" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  chevronDown: <path d="m5 9 7 7 7-7" />,
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
