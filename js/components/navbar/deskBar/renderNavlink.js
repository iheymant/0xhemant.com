import { createLinkTarget } from "../utils/createLinkTarget.js";

export function renderNavLink(link) {
  const target = createLinkTarget(link.external);

  return `

    <li class="nav-item">

      <a
        href="${link.url}"
        ${target}
        class="nav-link"
      >

        ${link.name}

      </a>

    </li>

  `;
}
