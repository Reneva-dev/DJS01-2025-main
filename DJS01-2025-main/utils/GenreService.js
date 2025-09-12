/**
 * Normalize genres into a consistent array of strings.
 * @param {any} raw
 * @returns {string[]}
 */
export function normalizeGenres(raw) {
  if (Array.isArray(raw)) return raw.map(g => g.toString());
  if (typeof raw === 'string' || typeof raw === 'number') return [String(raw)];
  return [];
}
