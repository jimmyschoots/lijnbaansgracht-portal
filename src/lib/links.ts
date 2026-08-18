/**
 * The apartment, used as the origin for every walking route below.
 */
export const APARTMENT_ADDRESS = "Lijnbaansgracht 204, 1016 XA Amsterdam";

/**
 * Where the "message us" buttons point.
 *
 * Deliberately the plain Airbnb entry point rather than a deep link: on a
 * phone this hands off to the installed app, which drops the guest into
 * their own booking and chat on its own.
 */
export const AIRBNB_URL = "https://www.airbnb.com/";

/**
 * Our Amsterdam guidebook on Airbnb — the long version of the neighbourhood
 * section. Kept verbatim: the bracket characters are part of the URL Airbnb
 * generates, so it must not be re-encoded.
 */
export const AIRBNB_GUIDEBOOK_URL =
  "https://www.airbnb.nl/s/guidebooks?refinement_paths[]=/guidebooks/6712264";

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
