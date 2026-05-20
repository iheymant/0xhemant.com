import { buildsProjectsData } from '/data/builds/index.js';
import { buildsContents } from '/data/builds/content.js';

import { renderHero } from './renderHero.js';
import { renderLinks } from './renderLinks.js';
import { renderMetaData } from './renderMetaData.js';
import { renderOverview } from './renderContentOverview.js';

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

    <main class= 'build-page voiceKeep-page'>

     ${renderHero(voicekeepObj)}

     ${renderOverview(voicekeepContent)}

     ${renderMetaData(voicekeepObj)}

     ${renderLinks(voicekeepObj)}


    </main>


  
  `; 

  
}
