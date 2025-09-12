import { formatDateHuman } from '../utils/DateUtils.js';

/**
 * Create a podcast preview card for the grid.
 * @param {Object} podcast
 * @param {Function} onClick - callback when card is clicked
 * @returns {HTMLElement}
 */
export function createPodcastCard(podcast, onClick) {
  const card = document.createElement('div');
  card.className = 'podcast-card';
  card.innerHTML = `
    <img src="${podcast.cover}" alt="${podcast.title}">
    <div>
      <h3>${podcast.title}</h3>
      <p>${podcast.genres.join(' • ')}</p>
      <small>${podcast.seasons.length} season(s) • Updated ${formatDateHuman(podcast.lastUpdated)}</small>
    </div>
  `;

  card.addEventListener('click', () => onClick(podcast));
  return card;
}
