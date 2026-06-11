import { formatRelativeDate } from "/js/utils/format-relative-date.js";
export function renderPrivacy(
  privacyContent
) {

  const lastUpdatedDate = formatRelativeDate(privacyContent.updatedAt);

  const sectionsHTML =
    privacyContent.sections.map(
      section => {

        return `

          <article class="legal-section">

            <h2 class="legal-section-title">

              ${section.title}

            </h2>


            <p class="legal-section-text">

              ${section.content}

            </p>

          </article>

        `;

      }
    ).join('');



  return `

    <section class="legal-page-section">

      <div class="container">

        <div class="legal-page-content">


          <!-- HEADER -->

          <div class="legal-page-header">

            <h1 class="legal-page-title">

              ${privacyContent.title}

            </h1>


            <p class="legal-page-description">

              ${privacyContent.description}

            </p>


            <div class="legal-meta-grid">

              <div class="legal-meta-item">

                <span class="legal-meta-label">

                  Version

                </span>

                <span class="legal-meta-value">

                  ${privacyContent.version}

                </span>

              </div>



              <div class="legal-meta-item">

                <span class="legal-meta-label">

                  Effective Date

                </span>

                <span class="legal-meta-value">

                  ${privacyContent.effectiveDate}

                </span>

              </div>



              <div class="legal-meta-item">

                <span class="legal-meta-label">

                  Last Updated

                </span>

                <span class="legal-meta-value">

                  ${lastUpdatedDate}

                </span>

              </div>

            </div>

          </div>



          <!-- SECTIONS -->

          <div class="legal-sections">

            ${sectionsHTML}

          </div>

        </div>

      </div>

    </section>

  `;

}