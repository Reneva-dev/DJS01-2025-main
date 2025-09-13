import { formatDateHuman } from '../utils/DateUtils.js';

/**
 * Create a podcast preview card for the grid.
 * @param {Object} podcast
 * @param {Function} onClick - callback when card is clicked
 * @returns {HTMLElement}
 */
export function createPodcastCard(podcast, onClick) {
  const card = document.createElement('div');
  card.className = `
    bg-white rounded-lg shadow-md p-3 cursor-pointer 
    hover:shadow-lg transition 
    flex flex-col items-center text-center
    h-64 w-full
  `;

  card.innerHTML = `
    <img src="${podcast.cover}" alt="${podcast.title}"
      class="w-24 h-24 object-cover rounded mb-2">
    <div class="flex flex-col justify-between flex-grow">
      <h3 class="text-sm font-semibold line-clamp-2">${podcast.title}</h3>
      <p class="text-xs text-gray-500 mt-1">${podcast.genres.join(' • ')}</p>
      <small class="text-xs text-gray-400 mt-2 block">
        ${podcast.seasons.length} season(s) • Updated ${formatDateHuman(podcast.lastUpdated)}
      </small>
    </div>
  `;

  card.addEventListener('click', () => onClick(podcast));
  return card;
}

