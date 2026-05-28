import { buildsProjectsData } from '/data/builds/index.js';


export function renderBuildSection(status) {

  const filteredProjects =
    buildsProjectsData

      .filter(project => {

        return (project.status.toLowerCase() === status.toLowerCase()

        );

      })

      .filter(project => {

        return (
          project.visibility === 'public'
        );

      })

      .sort((a, b) => {

        return a.priority - b.priority;

      });

    
  /* EMPTY STATE */

  if (filteredProjects.length === 0) {

    return renderEmptyBuilds();

  }



  const projectsHTML =
    filteredProjects.map(project => {

      return `

        <article class="build-card">

          <a
            href="${project.pages.overview}"
            class="build-card-link"
          >

            <div class="build-card-top">

              <img
                src="${project.logo}"
                alt="${project.name}"
                class="build-card-logo"
              >

              <span class="build-status-badge">

                ${project.status}

              </span>

            </div>



            <div class="build-card-content">

              <h3 class="build-card-title">

                ${project.name}

              </h3>


              <p class="build-card-description">

                ${project.description}

              </p>

            </div>



            <div class="build-card-footer">

              <span class="build-card-version">

                v${project.version}

              </span>

            </div>

          </a>

        </article>

      `;

    }).join('');



  return `

    <section class="builds-section">

      <div class="container">

        <div class="builds-grid">

          ${projectsHTML}

        </div>

      </div>

    </section>

  `;

}

const emptyText = 'Currently there are no Builds here! stay tuned when new ones get added!'

const emptyBuildsImage =
  '/assets/empty/no-builds.png';



export function renderEmptyBuilds() {

  return `

    <section class="builds-section-empty">

      <div class="container">

        <div class="empty-builds-content">


          <img
            src="${emptyBuildsImage}"
            alt="No builds available"
            class="empty-builds-image"
          >



          <h2 class="empty-builds-title">

            Nothing here yet.

          </h2>



          <p class="empty-builds-description">

            New builds and experiments
            will appear here as they evolve.

          </p>

        </div>

      </div>

    </section>

  `;

}