import { buildsProjectsData } from "/data/builds/index.js";
import { tracekeepContents } from "/data/builds/tracekeep/content.js";

import { createBuildHeroMarkup } from "/js/components/builds/render-builds/create-build-hero-markup.js";
import { renderLinks } from "/js/components/builds/render-builds/render-links.js";
import { renderMetaData } from "/js/components/builds/render-builds/render-metadata.js";
import { renderOverview } from "/js/components/builds/render-builds/render-content-overview.js";

export function renderTracekeep() {
  const tracekeepObj = buildsProjectsData.find(
    (project) => project.id === "tracekeep",
  );

  const tracekeepContent = tracekeepContents.tracekeep;

  if (!tracekeepContent || tracekeepObj.visibility !== "public") {
    return;
  }

  const app = document.querySelector(".build-content-container");
  if (!app) return;

  app.innerHTML = `

    <div class= 'build-page tracekeep-page'>

     ${createBuildHeroMarkup(tracekeepObj)}

     ${renderLinks(tracekeepObj)}


     ${renderOverview(tracekeepContent)}

     ${renderMetaData(tracekeepObj)}

    </div>


  
  `;
}
