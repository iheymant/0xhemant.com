export function renderDropdownMenu(link) {
  const childrenHTML = link.children
    .map((child) => {
      return `

        <a
          href="${child.url}"
          class="dropdown-card"
        >

          <span class="
            dropdown-card-title
          ">

            ${child.name}

          </span>


          <span class="
            dropdown-card-description
          ">

            ${child.description}

          </span>

        </a>

      `;
    })
    .join("");

  return `

    <div
      class="mega-menu"
      id="${link.id}"
    >

      <div class="container">

        <div class="dropdown-content">


          <!-- HEADER -->

          <div class="dropdown-header">

           <span class="dropdown-eyebrow" >
              Explore
            </span>

            <h2 class="
              dropdown-category-title
            ">

              ${link.dropdownCategoryText}

            </h2>


            <p class="
              dropdown-category-description
            ">

              ${link.dropdownCategoryTextDescription}

            </p>

          </div>



          <!-- GRID -->

          <div class="dropdown-grid">

            ${childrenHTML}

          </div>

        </div>

      </div>

    </div>

  `;
}
