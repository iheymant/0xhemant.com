import { getBuildOverview } from "/js/components/builds/render-build-page/builds-stats/get-build-overview.js";

export function renderBuildArchiveHeader() {
  const header = document.querySelector(".builds-archive-header");

  if (!header) return;

  const buildsOverview = getBuildOverview();
  const count = buildsOverview.total;

  header.innerHTML = `

    <div class="archive-eyebrow">

      BUILD ARCHIVE

    </div>

    <h2 class="archive-title">

      Public Projects

    </h2>

    <p class="archive-description">

      Projects, experiments and ideas
      documented in public.

    </p>

    <div class="archive-count">

      Showing ${count} public builds

    </div>

  `;
}
