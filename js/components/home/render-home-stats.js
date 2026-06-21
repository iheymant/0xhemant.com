import { buildStatusMeta } from "/data/home/build-status-meta.js";
import { getBuildStats } from "/js/components/home/get-build-stats.js";
import { renderStatCard } from "/js/components/shared/stat-card/render-stat-card.js";

export function renderHomeBuildStats() {
  const buildStats = getBuildStats();

  const homeStatsContainer = document.querySelector(".stat-cards-container");

  if (!homeStatsContainer) return;

  const displayOrder = ["live", "experimental", "conceptual"];

  const statsHtml = displayOrder
    .map((status) => {
      const count = buildStats[status] || 0;

      const meta = buildStatusMeta[status];

      return renderStatCard({
        count,
        meta,
      });
    })

    .join("");

  homeStatsContainer.innerHTML = statsHtml;
}
