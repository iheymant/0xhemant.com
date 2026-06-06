import { getFeaturedBuild } from "/js/components/home/get-featured-build.js";

export function getFeaturedBuildHightlight (){

  const featuredBuild = getFeaturedBuild();

  const highlightsHtml =
  featuredBuild.highlights
    .map(highlight => `
      <li
        class="
          featured-build-highlight
        "
      >

        <span
          class="
            featured-build-highlight-icon
          "
        >
          ✓
        </span>

        <span>
          ${highlight}
        </span>

      </li>
    `)
    .join('');

  return highlightsHtml;
}