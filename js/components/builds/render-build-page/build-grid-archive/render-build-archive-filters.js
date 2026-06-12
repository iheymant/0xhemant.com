export function renderBuildArchiveFilters() {
  const filtersContainer = document.querySelector(".builds-archive-controls");

  if (!filtersContainer) return;

  const filters = ["all", "live", "experimental", "conceptual"];

  const filtersHtml = filters
    .map(
      (filterName) =>
        `
     <div class="filters-button-container"> 
       <button data-filter="${filterName}" class="archive-filter">
         ${filterName}
       </button>
     </div>
  
  `,
    )
    .join("");

  filtersContainer.innerHTML = filtersHtml;
}
