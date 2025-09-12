/**
 * Normalize genres into a consistent array of strings.
 * @param {any} raw
 * @returns {string[]}
 */
export function normalizeGenres(raw) {
  if (Array.isArray(raw)) return raw;
  if (typeof raw === 'string') return [raw];
  return [];
}
