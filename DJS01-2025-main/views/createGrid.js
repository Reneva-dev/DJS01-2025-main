import { createPodcastCard } from '../components/createPodcastCard.js';

/**
 * Render grid of podcast cards into container.
 * @param {HTMLElement} container
 * @param {Array<Object>} podcasts
 * @param {Function} onSelect - called when a podcast card is clicked
 */
export function createGrid(container, podcasts, onSelect) {
  container.innerHTML = ''; // clear previous
  podcasts.forEach(podcast => {
    const card = createPodcastCard(podcast, onSelect);
    container.appendChild(card);
  });
}
