export function renderHero(project){

  return `
    <section class="build-hero">
    
      <div class="container">

        <div class="build-hero-content">

          <h1 class="build-hero-title">

           ${project.name}

          </h1>


          <p class="build-hero-description">

            ${project.description}

          </p>

        </div>

      </div>

    </section>

  `;

}