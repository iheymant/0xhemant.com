import { getFeaturedBuild } from "/js/components/home/get-featured-build.js";
import { getFeaturedBuildHightlight } from "/js/components/home/get-featured-build-highlight.js";

export function renderFeaturedBuild() {
  const featuredContainer = document.querySelector(".featured-build-container");
  if (!featuredContainer) return;

  const featuredBuild = getFeaturedBuild();
  if (!featuredBuild) return;

  const featuredBuildHighlights = getFeaturedBuildHightlight();

  const featuredBuildImageSrc = featuredBuild.thumbnail;
  const featuredBuildImageAltText = `${featuredBuild.name} preview`;
  const featuredBuildName = featuredBuild.name;
  const featuredBuildTagline = featuredBuild.tagline;
  const featuredBuildTagStatus = featuredBuild.status;
  const featuredBuildRedirectButtonUrl = featuredBuild.pages.overview;

  const featuredContainerHtml = `
    <div class="featured-build-container-content">

      <div class="featured-container-heading">Now Building</div>

      <div class="featured-build-layout">
      
       <img class="featured-build-image" src=${featuredBuildImageSrc} alt = ${featuredBuildImageAltText}>

        <div class="featured-build-content">

         <h2 class="featured-build-name">${featuredBuildName}</h2>
         <p class="featured-build-tagline">${featuredBuildTagline}</p>

         <hr>

          <ul class="featured-build-highlights">
           
           ${featuredBuildHighlights}

          </ul>
        
          <hr>

          <div class="featured-build-status-row">
           <div class="featured-build-status">${featuredBuildTagStatus}</div>
           <span class="featured-build-updated">Updated recently</span>
          </div>
        
       <a
        class="featured-build-redirect-button"
        href="${featuredBuildRedirectButtonUrl}"
       >
        View Build
       </a>

      </div>

      </div>
    </div>
  `;

  featuredContainer.innerHTML = featuredContainerHtml;
}
