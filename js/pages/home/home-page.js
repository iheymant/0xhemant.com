import { loadNavbar } from "/js/components/navbar/navbar.js";
import { renderHero } from "/js/components/home/render-hero.js";
import { renderFeaturedBuild } from "/js/components/home/render-featured-build.js";
import { renderHomeBuildStats } from "/js/components/home/render-home-stats.js";
import { loadFooter } from "/js/components/footer.js";

loadNavbar();
renderHero();
renderFeaturedBuild();
renderHomeBuildStats();
loadFooter();