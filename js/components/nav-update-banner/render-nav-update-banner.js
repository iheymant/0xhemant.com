import { navUpdates } from "/data/nav-updates/updates.js";
import { formatRelativeDate } from "/js/utils/format-relative-date.js";
import { icons } from "/assets/icons/icons.js";

export function renderNavUpdateBanner() {
  const currentNavUpdate = navUpdates[0];
  const navUpdateCategory = currentNavUpdate.category;
  const navUpdateTitle = currentNavUpdate.title;
  const navUpdateLabel = currentNavUpdate.buttonLabel;
  const navUpdateHref = currentNavUpdate.href;
  const publishedRelativeDate = formatRelativeDate(currentNavUpdate.publishedAt);

  const currentNavUpdateHtml = `
  <div class="container">

  <div class = "nav-updates" data-update-id="${currentNavUpdate.id}">

    <div class = "nav-updates-content">

     <span class="nav-update-category">
      ${navUpdateCategory}:
      </span>
     <span class="nav-update-title">
      ${navUpdateTitle}
    
     </span>
    </div>

    <div class = "nav-updates-interaction-elements">
   <span class="nav-update-published-date"> Published ${publishedRelativeDate} </span>
   <a class="site-update-link" href = "${navUpdateHref}">
    ${navUpdateLabel}
   </a>

   <button class="site-update-close" type="button" aria-label="Close">
   ${icons.messageClose}
   </button>

   </div>

  </div>
  </div>
   
  `;

  return currentNavUpdateHtml;
}
