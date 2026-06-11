export function renderBuildArchive() {
  const archiveContainer = document.querySelector(".builds-archive-container");

  if (!archiveContainer) return;

  archiveContainer.innerHTML = `

    <div class="builds-archive-header">
    </div>

    <div class="builds-archive-controls">
    </div>

    <div class="builds-archive-grid">
    </div>

    <div class="builds-archive-empty-state">
    </div>

  `;
}
