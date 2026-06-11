export function renderBuildsVisual() {
  const visual = document.querySelector(".builds-hero-visual");

  if (!visual) return;

  visual.innerHTML = `
    <div
      class="
        builds-hero-visual-placeholder
      "
    >
      <!-- Ideas → Build → Share → Improve -->
    </div>
  `;
}
