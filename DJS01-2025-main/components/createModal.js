import { formatDateHuman } from '../utils/DateUtils.js';

/**
 * Create a modal with detailed podcast info.
 * @param {Object} podcast
 * @param {Function} onClose
 * @returns {HTMLElement}
 */
export function createModal(podcast, onClose) {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 flex items-center justify-center z-50';
  modal.innerHTML = `
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black bg-opacity-50 modal-backdrop"></div>

    <!-- Modal box -->
    <div class="relative bg-white rounded-2xl shadow-xl p-6 w-11/12 max-w-3xl max-h-[90vh] overflow-y-auto">
      <!-- Close button -->
      <button class="close absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl">✕</button>

      <!-- Title -->
      <h2 class="text-2xl font-bold mb-4">${podcast.title}</h2>

      <!-- Top row: cover + description -->
      <div class="flex flex-col md:flex-row gap-6 mb-6">
        <img class="w-44 h-44 object-cover rounded-lg flex-shrink-0" src="${podcast.cover}" alt="${podcast.title}">
        <div class="flex-1">
          <p class="text-gray-700 mb-3">${podcast.description}</p>
          <div class="flex flex-wrap gap-2 mb-3">
            ${podcast.genres.map(g => `
              <span class="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">${g}</span>
            `).join('')}
          </div>
          <p class="text-sm text-gray-500">Last updated: <em>${formatDateHuman(podcast.lastUpdated)}</em></p>
        </div>
      </div>

      <!-- Seasons -->
      <h3 class="text-xl font-semibold mb-2">Seasons</h3>
      <ul class="space-y-2">
        ${podcast.seasons.map((s, i) => `
          <li class="text-gray-700">
            <strong>${s.title ?? `Season ${i + 1}`}</strong> — ${s.episodes?.length ?? 0} episodes
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  // Close handlers
  modal.querySelector('.close').addEventListener('click', onClose);
  modal.querySelector('.modal-backdrop').addEventListener('click', onClose);

  return modal;
}

