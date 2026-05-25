import { navbarData } from "/data/navbarData.js";

export function renderMobileMainLinks() {
  const linksHTML = navbarData
    .map((link) => {
      if (link.dropdown) {
        return `

          <li>

            <button
              class="submenu-trigger"
              data-panel="${link.id}-panel""
            >

              <span>

                ${link.name}

              </span>


              <span class="submenu-arrow">

                →

              </span>

            </button>

          </li>

        `;
      }

      return `

        <li>

          <a
            href="${link.url}"
            class="mobile-link"
          >

            ${link.name}

          </a>

        </li>

      `;
    })
    .join("");

  return `

    <ul class="mobile-main-links">

      ${linksHTML}

    </ul>

  `;
}
