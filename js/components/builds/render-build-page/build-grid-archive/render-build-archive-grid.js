import { buildsProjectsData } from "/data/builds/index.js";

import { renderBuildCard } from "/js/components/builds/build-card/render-build-card.js";

export function renderBuildArchiveGrid() {
  const grid = document.querySelector(".builds-archive-grid");

  if (!grid) return;

  const publicBuilds = buildsProjectsData

    .filter((build) => build.visibility.toLowerCase() === "public")

    .sort((a, b) => new Date(b.lastUpdatedDate) - new Date(a.lastUpdatedDate));

  grid.innerHTML = publicBuilds.map(renderBuildCard).join("");
}
