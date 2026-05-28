import { buildsProjectsData } from '/data/builds/index.js';
import { buildsContents } from '/data/builds/content.js';

import { renderHero } from '/js/components/builds/voicekeep/render-hero.js';
import { renderLinks } from '/js/components/builds/voicekeep/render-links.js';
import { renderMetaData } from '/js/components/builds/voicekeep/render-metadata.js';
import { renderOverview } from '/js/components/builds/voicekeep/render-content-overview.js';

export function renderVoicekeep() {

  const voicekeepObj = buildsProjectsData.find( project =>
    project.id === 'voicekeep'
    );

  const voicekeepContent = buildsContents.voicekeep;

  if (!voicekeepObj || voicekeepObj.visibility !== 'public'){
    return;
  }

  const app = document.querySelector('#app');
  if (!app) return;

  app.innerHTML = `

    <main class= 'build-page voicekeep-page'>

     ${renderHero(voicekeepObj)}

     ${renderOverview(voicekeepContent)}

     ${renderMetaData(voicekeepObj)}

     ${renderLinks(voicekeepObj)}


    </main>


  
  `; 

  
}
