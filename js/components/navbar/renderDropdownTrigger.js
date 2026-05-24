import { renderDropdownMenu } from './renderDropdownMenu.js';

export function renderDropdownTrigger(link) {

  return `

    <li class="dropdown-wrapper">

      <a
        class="dropdown-trigger"
        data-menu="${link.id}"
        href="${link.url}"
      >

        ${link.name}

      </a>

    </li>

  `;

}