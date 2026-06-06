import { buildStatusMeta } from "/data/home/build-status-meta.js";
import { getBuildStats } from "/js/components/home/get-build-stats.js";

export function renderHomeBuildStats() {
  const buildStats = getBuildStats();

  const homeStatsContainer = document.querySelector(".home-stats-container");

  if (!homeStatsContainer) return;

  const displayOrder = [

    'conceptual',

    'experimental',

    'live'

  ];

  const statsHtml =
    displayOrder
      .map(status => {

        const count =
          buildStats[status] || 0;

        const meta =
          buildStatusMeta[status];

        return `
          <div class="home-stat">

            <span
              class="
                home-stat-dot
                home-stat-dot--${meta.color}
              "
            ></span>

            <span class="home-stat-count">
              ${count}
            </span>

            <span class="home-stat-label">
              ${meta.label}
            </span>

            <span class="home-stat-description home-stat-sublabel">
              ${meta.description}
            </span>

          </div>
        `;

      })
      .join('');

  homeStatsContainer.innerHTML = statsHtml;
}
