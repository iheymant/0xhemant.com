import { createLinkTarget } from "/js/components/navbar/utils/create-link-target.js";

// export function renderLinks(project) {

//   const linksHTML = Object.entries(project.links)

//     .filter(([_, url]) => url)

//       .map(([key, url]) => {

//         return `

//           <a
//             href="${url}"
//             class="build-link-button"
//           >

//             ${formatLinkLabel(key)}

//           </a>

//         `;

//       })

//     .join('');

//   return `

//     <section class="build-links container">

//       <div class="container">

//         <div class="build-links-grid">

//           ${linksHTML}

//         </div>

//       </div>

//     </section>

//   `;

// }

// function formatLinkLabel(key) {

//   const labels = {

//     install: 'Install',

//     privacy: 'Privacy Policy',

//     tutorial: 'Tutorial',

//     changelog: 'Changelog',

//     faq: 'FAQ'

//   };

//   return labels[key] || key;

// }

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
        ${link.label}
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
