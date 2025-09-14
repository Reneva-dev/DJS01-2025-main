import { createPodcastCard } from '../components/createPodcastCard.js';

/**
 * Render grid of podcast cards into container.
 * @param {HTMLElement} container
 * @param {Array<Object>} podcasts
 * @param {Function} onSelect - called when a podcast card is clicked
 */
export function createGrid(container, podcasts, onSelect) {
  container.innerHTML = ''; // clear previous

  // Add Tailwind classes for responsive left-aligned grid
  container.className = 'grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 justify-start';

  podcasts.forEach(podcast => {
    // Normalize property names so components don't break
    const normalizedPodcast = {
      ...podcast,
      image: podcast.image || podcast.cover || '',        
      updated: podcast.updated || podcast.lastUpdated || null,
    };

    const card = createPodcastCard(normalizedPodcast, onSelect);
    container.appendChild(card);
  });
}


