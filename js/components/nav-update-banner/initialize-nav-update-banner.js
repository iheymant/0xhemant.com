import { dismissNavUpdateBanner } from "/js/components/nav-update-banner/dismiss-nav-update-banner.js";
import { renderNavUpdateBanner } from "/js/components/nav-update-banner/render-nav-update-banner.js";
import { shouldRenderNavUpdateBanner } from "/js/components/nav-update-banner/should-render-nav-update-banner.js";

export function initializeNavUpdateBanner() {
  const bannerContainer = document.querySelector(".nav-update-banner");

  if (!bannerContainer) {
    return;
  }

  if (!shouldRenderNavUpdateBanner()) {
    document.body.classList.remove("has-update-banner");

    return;
  }

  document.body.classList.add("has-update-banner");

  bannerContainer.classList.add('active');

  bannerContainer.innerHTML = renderNavUpdateBanner();

  const closeButton = bannerContainer.querySelector(".site-update-close");

  const banner = closeButton.closest(".nav-updates");

  closeButton.addEventListener("click", () => {
    const updateId = banner.dataset.updateId;

    dismissNavUpdateBanner(updateId);

    banner.classList.add("nav-updates--hidden");

    document.body.classList.remove("has-update-banner");
  });

  let bannerHidden = false;

  function handleScroll() {
    if (window.scrollY > 400) {
      banner.classList.add("nav-updates--hidden");
      document.body.classList.remove("has-update-banner");

      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
}
