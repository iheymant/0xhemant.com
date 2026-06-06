import { heroContent } from "/data/home/hero-content.js";
import { getRandomHeroStatement } from "/js/components/home/get-random-hero-statement.js";
import { getHeroDescription } from "/js/components/home/get-hero-description.js";

export function renderHero() {
  const homeHeroContentContainer = document.querySelector(".home-hero-content-container");

  if (!homeHeroContentContainer) return;

  const statement = getRandomHeroStatement();
  const description = getHeroDescription();
  const title = heroContent.title;
  const exploreButton = heroContent.cta.primary.label;
  const currentProjectButton = heroContent.cta.secondary.label;
  const exploreButtonHref = heroContent.cta.primary.href;
  const currentProjectButtonHref = heroContent.cta.secondary.href;

  const homeHeroHtml = `

    <div class="home-hero-content">
      <h1 class="home-hero-title">${title}</h1>

      <div class="home-hero-statements" data-statement>
        <div class="home-hero-primary-statement">${statement.primary}</div>

        <div class="home-hero-secondary-statement">${statement.secondary}</div>
      </div>

      <div class="home-hero-description">
        <p> ${description} </p>
      </div>
     
      <div class = "home-hero-cta-group" >
       <a
        class="home-hero-builds-redirect-button btn btn-primary"
        href="${exploreButtonHref}"
       >
        ${exploreButton}
       </a>
       <a
        class="home-hero-builds-redirect-button btn btn-secondary"
        href="${currentProjectButtonHref}"
       >
        ${currentProjectButton}
       </a>
      </div>

    </div>
  `;

  homeHeroContentContainer.innerHTML = homeHeroHtml;
}
