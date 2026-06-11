import { getFeaturedBuild } from "/js/components/home/get-featured-build.js";
import { getFeaturedBuildHightlight } from "/js/components/home/get-featured-build-highlight.js";
import { formatRelativeDate } from "/js/utils/format-relative-date.js";
import { voicekeepScreenshots } from "/data/builds/voicekeep/screenshots.js";

export function renderCurrentFocus() {
  const focusContainer = document.querySelector(".builds-focus-container");

  if (!focusContainer) return;

  const featuredBuild = getFeaturedBuild();

  if (!featuredBuild) return;

  const focusScreenshot =
    voicekeepScreenshots.find((screenshot) => screenshot.currentFocused) ??
    voicekeepScreenshots[0];

  const featuredBuildHighlights = getFeaturedBuildHightlight();

  const lastUpdatedDate = formatRelativeDate(featuredBuild.lastUpdatedDate);

  const focusHtml = `

    <article
      class="
        focus-build-card
      "
    >

      <img
        class="
          focus-build-background-image
        "
        src="
          ${focusScreenshot.image}
        "
        alt="
          ${featuredBuild.name} preview
        "
      >

        <div
          class="
          focus-build-overlay
        "
        >
        </div>

        <div
          class="
          focus-build-content
        "
        >

          <span
            class="
            focus-build-eyebrow
          "
          >

            CURRENTLY SHIPPING

          </span>

          <h2
            class="
            focus-build-title
          "
          >

            ${featuredBuild.name}

          </h2>

          <p
            class="
            focus-build-tagline
          "
          >

            ${featuredBuild.tagline}

          </p>

          <ul
            class="
            focus-build-highlights
          "
          >

            ${featuredBuildHighlights}

          </ul>

          <div
            class="
            focus-build-footer
          "
          >

            <div
              class="
              focus-build-meta
            "
            >

              <div
                class="
                focus-build-status
              "
              >

                ${featuredBuild.status}

              </div>

              <span
                class="
                focus-build-updated
              "
              >

                Updated
                ${lastUpdatedDate}

              </span>

            </div>

            <a
              class="
              focus-build-button
              btn
              btn-primary
            "
              href="
              ${featuredBuild.pages.overview}
            "
            >

              View Build

            </a>

          </div>

        </div>

    </article>

    `;

  focusContainer.innerHTML = focusHtml;
}
