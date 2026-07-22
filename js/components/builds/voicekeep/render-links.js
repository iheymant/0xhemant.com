import { createLinkTarget } from "/js/components/navbar/utils/create-link-target.js";
import { icons } from "/assets/icons/icons.js";

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
        ${icons[link.icon] ?? ""}
        
      </a>
    `,
    )
    .join("");

  return `
    <section class="build-links container">
      <div class="container">
        <div class="build-links-grid">
          ${linksHTML}
        </div>
      </div>
    </section>
  `;
}
