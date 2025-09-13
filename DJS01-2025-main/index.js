// index.js
import { podcasts, genres } from './data.js';
import { createGrid } from './views/createGrid.js';
import { createModal } from './components/createModal.js';
import { GenreService } from './utils/GenreService.js';

const listContainer = document.getElementById('podcast-list');
const modalRoot = document.getElementById('modal-root');

// init service
const genreService = new GenreService(genres);

// function to open modal
function openModal(podcast) {
  // attach genre names to podcast
  const withGenres = {
    ...podcast,
    genres: genreService.getNames(podcast.genres),
  };

  const modal = createModal(withGenres, () => modalRoot.innerHTML = '');
  modalRoot.innerHTML = '';
  modalRoot.appendChild(modal);
}

// render grid
createGrid(listContainer, podcasts, openModal);

