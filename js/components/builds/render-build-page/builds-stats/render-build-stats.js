import { getBuildOverview } from "/js/components/builds/render-build-page/builds-stats/get-build-overview.js";
import { buildStatusMeta } from "/data/home/build-status-meta.js";
import { renderStatCard } from "/js/components/shared/stat-card/render-stat-card.js";

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
      key: "live",
      count: overview.stats.live || 0,
    },
    {
      key: "experimental",
      count: overview.stats.experimental || 0,
    },
    {
      key: "conceptual",
      count: overview.stats.conceptual || 0,
    },
  ];

  const statsHtml = stats
    .map(({ key, count }) => {
      const meta = buildStatusMeta[key];

      return renderStatCard({
        count,
        meta,
      });
    })
    .join("");

  buildsStatsGrid.innerHTML = statsHtml;
}
