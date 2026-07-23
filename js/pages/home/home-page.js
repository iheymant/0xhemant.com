import { renderLayout } from "/js/layout/render-layout.js";
import { initializeLayout } from "/js/layout/initialize-layout.js";
import { renderHero } from "/js/components/home/render-hero.js";
import { renderFeaturedBuild } from "/js/components/home/render-featured-build.js";
import { renderHomeBuildStats } from "/js/components/home/render-home-stats.js";


renderLayout();
initializeLayout();
renderHero();
renderFeaturedBuild();
renderHomeBuildStats();
