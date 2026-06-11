export function renderBuildsHero() {
  const heroContent = document.querySelector(".builds-hero-content");

  if (!heroContent) return;

  heroContent.innerHTML = `

    <h1 class="builds-hero-title">

      Building in
      <span>
        Public
      </span>

    </h1>

    <p class="builds-hero-description">

      Projects, experiments and ideas
      documented as they evolve.

    </p>

    <button
      class="
        btn
        btn-secondary
      "
    >

      Why I build in public

    </button>

  `;
}
