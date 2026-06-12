import { renderBuildArchiveFilters } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive-filters.js";
import { archiveState } from "/js/components/builds/render-build-page/build-grid-archive/archive-state.js";
import { renderBuildArchiveGrid } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive-grid.js";

export function initializeBuildArchiveEvents() {
  const controls = document.querySelector(".builds-archive-controls");

  controls.addEventListener("click", (event) => {
    const filter = event.target.dataset.filter;

    if (!filter) return;

    archiveState.activeFilter = filter;

    renderBuildArchiveFilters();

    renderBuildArchiveGrid();
  });
}
