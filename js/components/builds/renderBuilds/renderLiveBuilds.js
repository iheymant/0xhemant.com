import { renderBuildSection } from '/js/components/builds/renderBuilds/renderBuildsSection.js';


export function renderLiveBuilds(){

  const app = document.querySelector('#app')

  if (!app) {
    return
  }

  app.innerHTML = `

  ${renderBuildSection('Live')}

`;
}