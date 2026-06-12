import { buildsProjectsData } from "/data/builds/index.js";
import { archiveState } from "/js/components/builds/render-build-page/build-grid-archive/archive-state.js";
import { renderBuildCard } from "/js/components/builds/build-card/render-build-card.js";
import { renderBuildEmptyState } from "/js/components/builds/render-build-page/build-grid-archive/render-build-empty-state.js";

export function renderBuildArchiveGrid() {
  const grid = document.querySelector(".builds-archive-grid");

  if (!grid) return;

  let publicBuilds = buildsProjectsData

    .filter((build) => build.visibility.toLowerCase() === "public")

    .sort((a, b) => new Date(b.lastUpdatedDate) - new Date(a.lastUpdatedDate));

  if (archiveState.activeFilter !== "all") {
    publicBuilds = publicBuilds.filter(
      (build) => build.status.toLowerCase() === archiveState.activeFilter,
    );
  }

  grid.innerHTML = publicBuilds.map(renderBuildCard).join("");

  renderBuildEmptyState(publicBuilds, archiveState.activeFilter);
}
