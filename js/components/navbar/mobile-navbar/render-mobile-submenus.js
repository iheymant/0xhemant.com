import { navbarData } from "/data/navbar-data.js";

export function renderMobileSubmenus() {
  return navbarData

    .filter((link) => link.dropdown)

    .map((link) => {
      const childrenHTML = link.children
        .map((child) => {
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
        })
        .join("");

      return `

      <div
        class="
    mobile-panel
    mobile-sub-panel
  "
        id="${link.id}-panel"
        data-parent="main-panel"
      >

        <div class="mobile-panel-header">

          <button
           class="back-button"
           data-back
          >

            ← Back

          </button>

    

          <p class="
              mobile-sub-panel-category-text
            ">

              ${link.dropdownCategoryText}

            </p>


            <p class="
              mobile-sub-panel-category-description
            ">

              ${link.dropdownCategoryTextDescription}

            </p>

          

          

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
    })
    .join("");
}
