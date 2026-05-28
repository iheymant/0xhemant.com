export function renderOverview(content) {

  const sectionsHTML =
    content.sections.map(
      section => {

        const paragraphsHTML =
          section.paragraphs.map(
            paragraph => {

              return `

                <p class="build-text">

                  ${paragraph}

                </p>

              `;

            }
          ).join('');



        return `

          <article class="build-content-section">

            <h2 class="build-section-title">

              ${section.title}

            </h2>


            <div class="build-section-content">

              ${paragraphsHTML}

            </div>

          </article>

        `;

      }
    ).join('');



  return `

    <section class="build-overview">

      <div class="container">

        ${sectionsHTML}

      </div>

    </section>

  `;

}