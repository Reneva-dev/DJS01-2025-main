import { formatDateHuman } from '../utils/DateUtils.js';
import { seasons } from '../data.js';

/**
 * Create a modal with detailed podcast info.
 * @param {Object} podcast
 * @param {Function} onClose
 * @returns {HTMLElement}
 */
export function createModal(podcast, onClose) {
  // Find season data for this podcast
  const seasonData = seasons.find(s => s.id === podcast.id);

  const modal = document.createElement('div');
  modal.className = 'modal fixed inset-0 flex items-center justify-center z-50';

  modal.innerHTML = `
    <div class="modal-backdrop absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="modal-content relative bg-white rounded-lg p-6 max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
      <button class="close absolute top-2 right-2 text-gray-500 hover:text-black">✕</button>
      
      <!-- Title -->
      <h2 class="text-2xl font-bold mb-4">${podcast.title}</h2>

      <!-- Cover + Description -->
      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <img src="${podcast.cover}" alt="${podcast.title}" 
          class="w-48 h-48 object-cover rounded">
        <div>
          <p class="text-gray-700 mb-2">${podcast.description}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            ${podcast.genres.map(g => `<span class="px-2 py-1 text-xs bg-gray-200 rounded">${g}</span>`).join('')}
          </div>
          <p class="text-sm text-gray-500">Last updated: ${formatDateHuman(podcast.lastUpdated)}</p>
        </div>
      </div>

      <!-- Seasons -->
      <h3 class="text-lg font-semibold mb-2">Seasons</h3>
      <ul class="space-y-2">
        ${seasonData && seasonData.seasonDetails.length > 0
          ? seasonData.seasonDetails.map(season => `
              <li class="p-2 border rounded-md bg-gray-50 flex justify-between">
                <span class="font-medium">${season.title}</span>
                <span class="text-sm text-gray-500">${season.episodes} ${season.episodes === 1 ? 'episode' : 'episodes'}</span>
              </li>
            `).join('')
          : `<li class="text-gray-500">No season details available.</li>`}
      </ul>
    </div>
  `;

  modal.querySelector('.close').addEventListener('click', onClose);
  modal.querySelector('.modal-backdrop').addEventListener('click', onClose);

  return modal;
}
