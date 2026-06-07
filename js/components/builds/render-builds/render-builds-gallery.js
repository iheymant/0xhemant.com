export function renderBuildGallery(galleryData) {
  const galleryHTMl = galleryData
    .map((screenshot, index) => {
      const reverse = index % 2;

      return `

            <article
              class="
                build-screenshot
                ${reverse ? "build-screenshot--reverse" : ""}
              "
            >

              <div
                class="
                  build-screenshot-image-wrapper
                "
              >

                <img
                  class="
                    build-screenshot-image
                  "
                  src="
                    ${screenshot.image}
                  "
                  alt="
                    ${screenshot.title}
                  "
                >

              </div>

              <div
                class="
                  build-screenshot-content
                "
              >

                <h2
                  class="
                    build-screenshot-title
                  "
                >

                  ${screenshot.title}

                </h2>

                <p
                  class="
                    build-screenshot-description
                  "
                >

                  ${screenshot.description}

                </p>

              </div>

            </article>

          `;
    })
    .join("");

    return galleryHTMl;
}
