import {
  navbarData
} from '/data/navbarData.js';



export function renderMobileSubmenus() {

  return navbarData

    .filter(link => link.dropdown)

    .map(link => {

      const childrenHTML =
        link.children.map(child => {

          return `

            <li>

              <a
                href="${child.url}"
                class="mobile-submenu-link"
              >

                ${child.name}

              </a>

            </li>

          `;

        }).join('');



      return `

        <div
          class="mobile-panel"
          id="${link.id}-panel"
        >

          <div class="mobile-panel-header">

            <button
              class="back-button"
            >

              ← Back

            </button>

          </div>


          <ul
            class="
              mobile-submenu-links
            "
          >

            ${childrenHTML}

          </ul>

        </div>

      `;

    }).join('');

}