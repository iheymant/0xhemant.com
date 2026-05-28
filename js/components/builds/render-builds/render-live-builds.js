import { renderBuildSection } from '/js/components/builds/render-builds/render-builds-section.js';


export function renderLiveBuilds(){

  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  app.innerHTML = `

  ${renderBuildSection('Live')}

`;
}