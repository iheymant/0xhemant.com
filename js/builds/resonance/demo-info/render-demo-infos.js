import { buildsProjectsData } from "/data/builds/index.js";
import { formatRelativeDate } from "/js/utils/format-relative-date.js";

export function renderDemoInfos() {
  const demoContainer = document.querySelector(".demo-info-container");

  if (!demoContainer) {
    return;
  }

  const lastUpdatedDate = buildsProjectsData.find(
    (builds) => builds.id === "resonance",
  ).lastUpdatedDate;
  const lastUpdatedRelativeDate = formatRelativeDate(lastUpdatedDate);

  const demoContainerHtml = `
    <div class="demo-info-content">

      <h3>
        Please Note
      </h3>

      <p>

        Resonance is currently
        in an experimental phase
        and has not yet reached
        a usable prototype.

        <p>
        Please check back later.
        </p>

        <p>

        Lastly it was updated
        <span
          class="
            demo-info-last-update-date
          "
          title="
            ${lastUpdatedDate}
          "
        >
        ${lastUpdatedRelativeDate.toLowerCase()}.
        </span> Thank you for your interest.
        </p>

      </p>

    </div>
  `;

  demoContainer.innerHTML = demoContainerHtml;
}
