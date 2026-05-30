import { heroContent } from "/data/home/hero-content.js";
import { getRandomHeroStatement } from "/js/components/home/get-random-hero-statement.js";

export function renderHero() {
  const homeHeroContainer = document.querySelector(".home-hero-left");

  if (!homeHeroContainer) return;

  const statement = getRandomHeroStatement();
  const title = heroContent.title;
  const exploreButton = heroContent.cta.label;
  const exploreButtonHref = heroContent.cta.href;

  const homeHeroHtml = `
   
  <div class= "home-hero-content">
    
    <h1 class = "home-hero-title">
     
      ${title}
     
    </h1> 

    <div class = "home-hero-statements" data-statement>

      <div class = "home-hero-primary-statement">

        ${statement.primary}

      </div>

      <div class = "home-hero-secondary-statement">

        ${statement.secondary}

      </div>

    </div>

    <a class = "home-hero-builds-redirect-button btn btn-primary" href= "${exploreButtonHref}"> 

     ${exploreButton}
     
     
    
    </a>

  </div>
   


  `;

  homeHeroContainer.innerHTML = homeHeroHtml;
}
