import { createLinkTarget } from "/js/components/navbar/utils/create-link-target.js";

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
