import { buildsProjectsData } from '/data/builds/index.js';
import { buildsContents } from '/data/builds/content.js';

import { renderHero } from '/js/components/builds/voicekeep/renderHero.js';
import { renderLinks } from '/js/components/builds/voicekeep/renderLinks.js';
import { renderMetaData } from '/js/components/builds/voicekeep/renderMetaData.js';
import { renderOverview } from '/js/components/builds/voicekeep/renderContentOverview.js';

export function renderVoicekeep() {

  const voicekeepObj = buildsProjectsData.find( project =>
    project.id === 'voicekeep'
    );

  const voicekeepContent = buildsContents.voiceKeep;

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
