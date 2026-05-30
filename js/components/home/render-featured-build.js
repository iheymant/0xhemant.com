import { getFeaturedBuild } from "/js/components/home/get-featured-build.js";

export function renderFeaturedBuild() {
  const featuredContainer = document.querySelector(".featured-build-container");
  if (!featuredContainer) return;

  const featuredBuild = getFeaturedBuild();
  if (!featuredBuild) return;

  const featuredBuildImageSrc = featuredBuild.thumbnail;
  const featuredBuildImageAltText = `${featuredBuild.name} preview`;
  const featuredBuildName = featuredBuild.name;
  const featuredBuildTagline = featuredBuild.tagline;
  const featuredBuildTagStatus = featuredBuild.status;
  const featuredBuildRedirectButtonUrl = featuredBuild.pages.overview;

  const featuredContainerHtml = `
    <div class="featured-build-container-content">
      <div class="featured-container-heading">Now Building</div>
      <img class="featured-build-image" src=${featuredBuildImageSrc} alt = ${featuredBuildImageAltText}>
      <h2 class="featured-build-name">${featuredBuildName}</h2>
      <p class="featured-build-tagline">${featuredBuildTagline}</p>
      <div class="featured-build-status">${featuredBuildTagStatus}</div>
      <a
        class="featured-build-redirect-button"
        href="${featuredBuildRedirectButtonUrl}"
      >
        View Build
      </a>
    </div>
  `;

  featuredContainer.innerHTML = featuredContainerHtml;
}
