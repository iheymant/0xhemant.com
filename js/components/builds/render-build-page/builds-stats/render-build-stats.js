import { getBuildOverview } from "/js/components/builds/render-build-page/builds-stats/get-build-overview.js";
import { buildStatusMeta } from "/data/home/build-status-meta.js";

export function renderBuildsPageStats() {
  const buildsStatsGrid = document.querySelector(".builds-stats-grid");

  if (!buildsStatsGrid) return;

  const overview = getBuildOverview();

  const stats = [
    {
      key: "public",
      count: overview.total || 0,
    },
    {
      key: "conceptual",
      count: overview.stats.conceptual || 0,
    },
    {
      key: "experimental",
      count: overview.stats.experimental || 0,
    },
    {
      key: "live",
      count: overview.stats.live || 0,
    },
  ];

  const statsHtml = stats
    .map(({ key, count }) => {
      const meta = buildStatusMeta[key];

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
    .join("");

  buildsStatsGrid.innerHTML = statsHtml;
}
