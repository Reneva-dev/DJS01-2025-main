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
    // Normalize property names so components don't break
    const normalizedPodcast = {
      ...podcast,
      image: podcast.image || podcast.cover || '',        // always have .image
      updated: podcast.updated || podcast.lastUpdated || null, // always have .updated
    };

    const card = createPodcastCard(normalizedPodcast, onSelect);
    container.appendChild(card);
  });
}

