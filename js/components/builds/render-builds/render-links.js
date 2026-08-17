import { createLinkTarget } from "/js/components/navbar/utils/create-link-target.js";
import { renderIcon } from "/js/utils/render-icon.js";;

export function renderLinks(project) {
  const linksHTML = project.resourceLinks
    .filter((link) => link?.href)
    .map(
      (link) => `
      <a
        href="${link.href}"
        class="build-link-button"
        ${createLinkTarget(link.external)}
        data-link-id="${link.id}"
      >
        <span>${link.label}</span>
        ${renderIcon(link.icon)}
        
      </a>
    `,
    )
    .join("");

  return `
    <div class="build-links container">
      <div class="container">
        <div class="build-links-grid">
          ${linksHTML}
        </div>
      </div>
    </div>
  `;
}
