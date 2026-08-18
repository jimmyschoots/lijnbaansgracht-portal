/**
 * The apartment, used as the origin for every walking route below.
 */
export const APARTMENT_ADDRESS = "Lijnbaansgracht 204, 1016 XA Amsterdam";

/**
 * Where the "message us" buttons point.
 *
 * This is the guest message inbox, which works for anyone already booked.
 * If you have a direct link to your own listing's thread, replace this one
 * value and every button on the site follows.
 */
export const AIRBNB_MESSAGES_URL = "https://www.airbnb.com/messages";

/**
 * Google Maps walking directions from the apartment to a destination.
 * Uses the documented Maps URL API, so it opens the native app on phones
 * and the web map on desktop.
 */
export function walkingDirectionsUrl(destination: string): string {
  const params = new URLSearchParams({
    api: "1",
    origin: APARTMENT_ADDRESS,
    destination,
    travelmode: "walking",
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

/**
 * Google Maps pin for a single place.
 */
export function mapSearchUrl(query: string): string {
  const params = new URLSearchParams({ api: "1", query });
  return `https://www.google.com/maps/search/?${params.toString()}`;
}
