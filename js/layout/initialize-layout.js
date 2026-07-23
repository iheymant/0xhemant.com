import { initializeScrollToTop } from "/js/components/navbar/behavior/initialize-scroll-to-top.js";
import { initializeNavUpdateBanner } from "/js/components/nav-update-banner/initialize-nav-update-banner.js";

export function initializeLayout() {
  initializeScrollToTop();
  initializeNavUpdateBanner();
}
