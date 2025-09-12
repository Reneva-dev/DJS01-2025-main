import { formatDateHuman } from '../utils/DateUtils.js';

/**
 * Create a modal with detailed podcast info.
 * @param {Object} podcast
 * @param {Function} onClose
 * @returns {HTMLElement}
 */
export function createModal(podcast, onClose) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <button class="close">✕</button>
      <img src="${podcast.cover}" alt="${podcast.title}">
      <h2>${podcast.title}</h2>
      <p><em>${formatDateHuman(podcast.lastUpdated)}</em></p>
      <div>${podcast.genres.map(g => `<span>${g}</span>`).join(' ')}</div>
      <p>${podcast.description}</p>
      <h3>Seasons</h3>
      <ul>
        ${podcast.seasons.map((s, i) => `
          <li>${s.title ?? `Season ${i+1}`} — ${s.episodes?.length ?? 0} episodes</li>
        `).join('')}
      </ul>
    </div>
  `;

  modal.querySelector('.close').addEventListener('click', onClose);
  modal.querySelector('.modal-backdrop').addEventListener('click', onClose);

  return modal;
}
