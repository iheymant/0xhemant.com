import { getBuildOverview } from "/js/components/builds/render-build-page/builds-stats/get-build-overview.js";

export function renderBuildEmptyState(filteredBuilds, filterName) {
  const emptyStateContainer = document.querySelector(
    ".builds-archive-empty-state",
  );

  if (!emptyStateContainer) return;

  if (filteredBuilds.length > 0) {
    emptyStateContainer.hidden = true;

    return;
  }

  emptyStateContainer.hidden = false;

  emptyStateContainer.innerHTML = `

    <div class="archive-empty-state">

      <h3
        class="
          archive-empty-title
        "
      >

        No builds found

      </h3>

      <p
        class="
          archive-empty-description
        "
      >

        No projects match the
        ${filterName} filter.

      </p>

    </div>

  `;
}
