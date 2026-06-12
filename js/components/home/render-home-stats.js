import { buildStatusMeta } from "/data/home/build-status-meta.js";
import { getBuildStats } from "/js/components/home/get-build-stats.js";

export function renderHomeBuildStats() {
  const buildStats = getBuildStats();

  const homeStatsContainer = document.querySelector(".stat-cards-container");

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
          <div class="stat-card">

            <span
              class="
                stat-card-dot
                stat-card-dot--${meta.color}
              "
            ></span>

            <span class="stat-card-count">
              ${count}
            </span>

            <span class="stat-card-label">
              ${meta.label}
            </span>

            <span class="stat-card-description stat-card-sublabel">
              ${meta.description}
            </span>

          </div>
        `;

      })
      .join('');

  homeStatsContainer.innerHTML = statsHtml;
}
