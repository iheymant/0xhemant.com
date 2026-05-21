export function renderDropdownMenu( link ) {

  const childrenHTML =
    link.children.map(child => {

      return `

        <a
          href="${child.url}"
          class="dropdown-card"
        >

          ${child.name}

        </a>

      `;

    }).join('');



  return `

    <div class="dropdown-menu">

      ${childrenHTML}

    </div>

  `;

}