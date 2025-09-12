/**
 * Convert ISO string or Date to a human readable format.
 * @param {string|Date} isoDate
 * @returns {string}
 */
export function formatDateHuman(isoDate) {
  const d = typeof isoDate === 'string' ? new Date(isoDate) : isoDate;
  if (Number.isNaN(d?.getTime?.())) return 'Unknown';
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}
