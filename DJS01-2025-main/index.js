// index.js
import { podcasts, genres } from './data.js';
import { createGrid } from './views/createGrid.js';
import { createModal } from './components/createModal.js';
import { GenreService } from './utils/GenreService.js';

const listContainer = document.getElementById('podcast-list');
const modalRoot = document.getElementById('modal-root');

// helper to open modal
function openModal(podcast) {
  const modal = createModal(podcast, () => {
    modalRoot.innerHTML = '';
  });
  modalRoot.innerHTML = ''; // clear before adding
  modalRoot.appendChild(modal);
}

// enrich podcasts with genre names + normalized structure
const genreService = new GenreService(genres);
const enrichedPodcasts = podcasts.map(p => ({
  ...p,
  cover: p.image,
  lastUpdated: p.updated,
  genres: genreService.getNames(p.genres),
  seasons: Array.isArray(p.seasons) ? p.seasons : []
}));

// render grid
createGrid(listContainer, enrichedPodcasts, openModal);
