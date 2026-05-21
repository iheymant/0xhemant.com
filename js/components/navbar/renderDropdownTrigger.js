import { renderDropdownMenu } from './renderDropdownMenu.js';

export function renderDropdownTrigger(link) {

  return `

    <li class="dropdown-wrapper">

      <a
        href="${link.url}"
        class="dropdown-trigger"
      >

        ${link.name}

      </a>


      ${renderDropdownMenu(link)}

    </li>

  `;

}