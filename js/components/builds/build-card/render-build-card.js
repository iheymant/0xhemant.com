import { formatRelativeDate } from "/js/utils/format-relative-date.js";

export function renderBuildCard(build) {
  const updatedDate = formatRelativeDate(build.lastUpdatedDate);

  return `

    <article
      class="
        build-archive-card
      "
    >

      <div
        class="
          build-archive-card-image-wrapper
        "
      >

        <img
          class="
            build-archive-card-image
          "
          src="
            ${build.thumbnail}
          "
          alt="
            ${build.name}
          "
        >

      </div>

      <div
        class="
          build-archive-card-content
        "
      >

        <div
          class="
            build-archive-card-status
            build-archive-card--${build.status.toLowerCase()}
          "
        >

          ${build.status}

        </div>

        <h3
          class="
            build-archive-card-title
          "
        >

          ${build.name}

        </h3>

        <p
          class="
            build-archive-card-tagline
          "
        >

          ${build.tagline}

        </p>

        <div
          class="
            build-archive-card-footer
          "
        >

            <span
              class="
               build-archive-card-updated
              "
            >

              Updated
              ${updatedDate}

            </span>

            <a
              class="
                build-archive-card-link
              "
              href="
                ${build.pages.overview}
              "
            >

              View Build →

            </a>

        </div>

      </div>

    </article>

  `;
}
