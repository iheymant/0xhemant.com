import { getBuildOverview } from "/js/components/builds/render-build-page/builds-stats/get-build-overview.js";

export function renderBuildEmptyState (){

  const archiveContainer = document.querySelector('.builds-archive-container');
  const emptyStateContainer = document.querySelector('.builds-archive-empty-state');
  const emptyStateText = "No Builds available for now"

  const buildsOverview = getBuildOverview();
  const buildsLength = buildsOverview.total;

  if (buildsLength > 0){
    emptyStateContainer?.remove();;
  }
  else {
  emptyStateContainer.innerHTML = emptyStateText;
  }
}