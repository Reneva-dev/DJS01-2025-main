import { podcasts } from './data.js';
import { createGrid } from './views/createGrid.js';
import { createModal } from './components/createModal.js';
import { normalizeGenres } from './utils/GenreService.js';
console.log('PODCASTS:', PODCASTS);


// Map raw podcast data into a normalized object
function mapPodcast(raw) {
  return {
    id: raw.id,
    title: raw.title ?? 'Untitled',
    cover: raw.coverImage ?? raw.image ?? '',
    genres: normalizeGenres(raw.genres),
    seasons: raw.seasons ?? [],
    lastUpdated: raw.lastUpdated ?? raw.updatedAt,
    description: raw.description ?? ''
  };
}

const podcasts = PODCASTS.map(mapPodcast);

// DOM roots
const container = document.querySelector('#podcast-list');
const modalRoot = document.querySelector('#modal-root');

// Render landing grid
createGrid(container, podcasts, podcast => openModal(podcast));

function openModal(podcast) {
  const modal = createModal(podcast, closeModal);
  modalRoot.innerHTML = '';
  modalRoot.appendChild(modal);
}

function closeModal() {
  modalRoot.innerHTML = '';
}

