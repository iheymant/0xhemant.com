export function renderMetaData(project){

  const languagesUsed =
    project.stack.map(
      language => {

        return `

          <span class="stack-tag">

            ${language}

          </span>

        `;

      }
    ).join('');



  return `

    <section class="build-meta">

      <div class="container">

        <div class="build-meta-grid">


          <!-- VERSION -->
          <article class="meta-card">

            <span class="meta-label">

              Version

            </span>

            <span class="meta-value">

              ${project.version}

            </span>

          </article>



          <!-- LAUNCHED -->
          <article class="meta-card">

            <span class="meta-label">

              Launched

            </span>

            <span class="meta-value">

              ${project.launchedDate}

            </span>

          </article>



          <!-- UPDATED -->
          <article class="meta-card">

            <span class="meta-label">

              Last Updated

            </span>

            <span class="meta-value">

              ${project.lastUpdatedDate}

            </span>

          </article>



          <!-- STACK -->
          <article class="meta-card">

            <span class="meta-label">

              Langauges & methods

            </span>

            <div class="stack-tags">

              ${languagesUsed}

            </div>

          </article>


        </div>

      </div>

    </section>

  `;

}