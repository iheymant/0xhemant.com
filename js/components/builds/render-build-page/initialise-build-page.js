import { renderBuildsHero } from "/js/components/builds/render-build-page/hero/render-builds-hero.js";
import { renderBuildsVisual } from "/js/components/builds/render-build-page/hero/render-builds-hero-visual.js";
import { renderBuildsPageStats } from "/js/components/builds/render-build-page/builds-stats/render-build-stats.js";

export function initialiseBuildsPage() {

  renderBuildsHero();
  renderBuildsVisual();
  renderBuildsPageStats();
}
