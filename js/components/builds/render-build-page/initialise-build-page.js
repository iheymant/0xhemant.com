import { renderBuildsHero } from "/js/components/builds/render-build-page/hero/render-builds-hero.js";
import { renderBuildsVisual } from "/js/components/builds/render-build-page/hero/render-builds-hero-visual.js";

export function initialiseBuildsPage() {

  renderBuildsHero();
  renderBuildsVisual();
}
