import { getBuildStats } from "/js/components/home/get-build-stats.js";

const buildStats = getBuildStats();

export function renderHomeBuildStats(){

  const homeStatsContainer = document.querySelector('.home-stats-container');

  if (!homeStatsContainer)
    return;



  const statsHtml = Object.entries(buildStats)
  .map(([status, count]) => {

    return `

      <div class="home-stat">

        <span class="home-stat-count">
          ${count}
        </span>

        <span class="home-stat-label">
          ${status}
        </span>

      </div>

    `;

  })
  .join('');

  homeStatsContainer.innerHTML = statsHtml;

  
}