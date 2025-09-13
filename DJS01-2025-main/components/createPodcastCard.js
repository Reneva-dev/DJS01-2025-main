import { formatDateHuman } from '../utils/DateUtils.js';
import { seasons } from '../data.js';

/**
 * Create a podcast preview card for the grid.
 * @param {Object} podcast
 * @param {Function} onClick - callback when card is clicked
 * @returns {HTMLElement}
 */
export function createPodcastCard(podcast, onClick) {
  // Find season info for this podcast
  const seasonData = seasons.find(s => s.id === podcast.id);
  const seasonCount = seasonData ? seasonData.seasonDetails.length : podcast.seasons || 0;

  const card = document.createElement('div');
  card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer flex flex-col';

  card.innerHTML = `
    <img src="${podcast.cover}" alt="${podcast.title}" class="w-full h-22 object-cover">
    <div class="p-4 flex flex-col gap-2">
      <h3 class="text-lg font-semibold">${podcast.title}</h3>
      <p class="text-sm text-gray-600">${podcast.genres.join(' • ')}</p>
      <small class="text-gray-500">${seasonCount} season(s) • Updated ${formatDateHuman(podcast.lastUpdated)}</small>
    </div>
  `;

  card.addEventListener('click', () => onClick(podcast));
  return card;
}

