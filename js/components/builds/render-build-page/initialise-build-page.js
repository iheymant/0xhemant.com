import { renderBuildsHero } from "/js/components/builds/render-build-page/hero/render-builds-hero.js";
import { renderBuildsVisual } from "/js/components/builds/render-build-page/hero/render-builds-hero-visual.js";
import { renderBuildsPageStats } from "/js/components/builds/render-build-page/builds-stats/render-build-stats.js";
import { renderCurrentFocus } from "/js/components/builds/render-build-page/current-focus/render-current-focus.js";
import { renderBuildArchive } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive.js";
import { renderBuildArchiveGrid } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive-grid.js";
import { renderBuildArchiveHeader } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive-header.js";
import { renderBuildEmptyState } from "/js/components/builds/render-build-page/build-grid-archive/render-build-empty-state.js";
import { renderBuildArchiveFilters } from "/js/components/builds/render-build-page/build-grid-archive/render-build-archive-filters.js";
import { initializeBuildArchiveEvents } from "/js/components/builds/render-build-page/build-grid-archive/initialize-build-archive-events.js";

export function initialiseBuildsPage() {

  renderBuildsHero();
  renderBuildsVisual();
  renderBuildsPageStats();
  renderCurrentFocus();
  renderBuildArchive();
  renderBuildArchiveGrid();
  renderBuildArchiveHeader();
  renderBuildEmptyState();
  renderBuildArchiveFilters();
  initializeBuildArchiveEvents();
}
