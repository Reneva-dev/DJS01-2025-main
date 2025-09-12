import { podcasts as rawPodcasts } from './data.js';
import { createGrid } from './views/createGrid.js';
import { createModal } from './components/createModal.js';
import { normalizeGenres } from './utils/GenreService.js';

/**
 * Map raw podcast data into a normalized object
 * that matches what our components expect.
 * @param {Object} raw
 * @returns {Object}
 */
function mapPodcast(raw) {
  return {
    id: raw.id,
    title: raw.title ?? 'Untitled',
    cover: raw.image ?? '',   // field is "image" in your data.js
    genres: normalizeGenres(raw.genres), 
    // seasons is a number, so we turn it into an array of season placeholders
    seasons: Array.from({ length: raw.seasons }, (_, i) => ({
      title: `Season ${i + 1}`,
      episodes: [] // no episode details available
    })),
    lastUpdated: raw.updated,  // field is "updated" in your data.js
    description: raw.description ?? ''
  };
}

// Adapt raw podcasts into normalized objects
const podcasts = rawPodcasts.map(mapPodcast);

// DOM roots
const container = document.querySelector('#podcast-list');
const modalRoot = document.querySelector('#modal-root');

// Render landing grid
createGrid(container, podcasts, podcast => openModal(podcast));

/**
 * Open a modal with podcast details.
 * @param {Object} podcast
 */
function openModal(podcast) {
  const modal = createModal(podcast, closeModal);
  modalRoot.innerHTML = '';
  modalRoot.appendChild(modal);
}

/**
 * Close the modal by clearing the root.
 */
function closeModal() {
  modalRoot.innerHTML = '';
}
