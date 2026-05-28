export function renderLinks(project) {

  const linksHTML = Object.entries(project.links)

    .filter(([_, url]) => url)

      .map(([key, url]) => {

        return `

          <a
            href="${url}"
            class="build-link-button"
          >

            ${formatLinkLabel(key)}

          </a>

        `;

      })

    .join('');


  return `

    <section class="build-links">

      <div class="container">

        <div class="build-links-grid">

          ${linksHTML}

        </div>

      </div>

    </section>

  `;

}

function formatLinkLabel(key) {

  const labels = {

    install: 'Install',

    privacy: 'Privacy Policy',

    tutorial: 'Tutorial',

    changelog: 'Changelog',

    faq: 'FAQ'

  };


  return labels[key] || key;

}