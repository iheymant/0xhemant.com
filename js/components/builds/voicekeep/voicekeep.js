import { buildsProjectsData } from '/data/builds/index.js';
import { voicekeepContents } from '/data/builds/voicekeep/content.js';
import { voicekeepScreenshots } from '/data/builds/voicekeep/screenshots.js';

import { createBuildHeroMarkup } from '/js/components/builds/voicekeep/create-build-hero-markup.js';
import { renderLinks } from '/js/components/builds/voicekeep/render-links.js';
import { renderMetaData } from '/js/components/builds/voicekeep/render-metadata.js';
import { renderOverview } from '/js/components/builds/voicekeep/render-content-overview.js';
import { renderBuildGallery } from '/js/components/builds/render-builds/render-builds-gallery.js';

export function renderVoicekeep() {

  const voicekeepObj = buildsProjectsData.find( project =>
    project.id === 'voicekeep'
    );

  const voicekeepContent = voicekeepContents.voicekeep;

  if (!voicekeepObj || voicekeepObj.visibility !== 'public'){
    return;
  }
  
  const app = document.querySelector('.build-content-container');
  if (!app) return;

  app.innerHTML = `

    <div class= 'build-page voicekeep-page'>

     ${createBuildHeroMarkup(voicekeepObj)}

     ${renderBuildGallery(voicekeepScreenshots)}

     ${renderOverview(voicekeepContent)}

     ${renderMetaData(voicekeepObj)}

     ${renderLinks(voicekeepObj)}


    </div>


  
  `; 

  
}
