import { renderBuildSection  } from '/js/components/builds/renderBuilds/renderBuildsSection.js';

export function renderConceptualBuilds(){

  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  app.innerHTML = `

  ${renderBuildSection('Conceptual')}

`;
}