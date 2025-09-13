// utils/GenreService.js

/**
 * Service to map genre IDs to names.
 */
export class GenreService {
  constructor(genres) {
    this.genreMap = new Map(genres.map(g => [String(g.id), g.title]));
  }

  /**
   * Get genre names for a podcast.
   * @param {Array<number|string>} ids
   * @returns {string[]}
   */
  getNames(ids) {
    if (!ids) return [];
    return ids.map(id => this.genreMap.get(String(id)) || `Unknown (${id})`);
  }
}
