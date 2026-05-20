import { footerData } from "/data/footerData.js";

export function loadFooter() {

  const footerElement = document.querySelector('#footer');

  const footerSections = footerData.map(sectionObj => {

    const linksHTML = sectionObj.links.map(link => {

      const target = link.external
        ? 'target="_blank" rel="noopener noreferrer"'
        : '';

      return `
        <li>
          <a href="${link.url}" ${target} class="footer-link">
            ${link.name}
          </a>
        </li>
      `;

    }).join('');



    return `

      <div class="footer-column">

        <h3 class="footer-title">
          ${sectionObj.section}
        </h3>

        <ul class="footer-links">

          ${linksHTML}

        </ul>

      </div>

    `;

  }).join('');



  footerElement.innerHTML = `

    <footer class="site-footer" id="footer">

      <div class="footer-container container">

        <div class="footer-grid">

          <!-- Brand / Identity -->
          <div class="footer-brand">

            <a href="/" class="footer-logo">
              0xhemant
            </a>

            <p class="footer-description">
              Building interactive systems, experiments,
              and evolving digital experiences.
            </p>

          </div>


          ${footerSections}


          <!-- Status / Current -->
          <div class="footer-column">

            <h3 class="footer-title">
              Currently
            </h3>

            <div class="footer-status">

              <span class="status-dot"></span>

              <p>
                Building adaptive interface systems
                and realtime interaction experiments.
              </p>

            </div>

          </div>

        </div>


        <!-- Bottom -->
        <div class="footer-bottom">

          <p class="copyright">
            © 2026 0xhemant
          </p>

          <p class="footer-note">
            Designed and engineered.
          </p>

        </div>

      </div>

    </footer>

  `;


}