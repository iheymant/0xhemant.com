import { renderBuildSection  } from '/js/components/builds/render-builds/render-builds-section.js';

export function renderConceptualBuilds(){

  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  app.innerHTML = `

  ${renderBuildSection('Conceptual')}

`;
}