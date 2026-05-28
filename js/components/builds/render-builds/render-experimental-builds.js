import { renderBuildSection  } from '/js/components/builds/render-builds/render-builds-section.js';

export function renderExperimentalBuilds(){

  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  app.innerHTML = `

  ${renderBuildSection('experimental')}

`;
}