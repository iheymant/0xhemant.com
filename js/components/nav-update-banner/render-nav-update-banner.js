import { navUpdates } from "/data/nav-updates/updates.js";

export function renderNavUpdateBanner() {
  const currentNavUpdate = navUpdates[0];
  const navUpdateCategory = currentNavUpdate.category;
  const navUpdateTitle = currentNavUpdate.title;
  const navUpdateLabel = currentNavUpdate.buttonLabel;
  const navUpdateHref = currentNavUpdate.href;

  const currentNavUpdateHtml = `
  <div class = "nav-updates" data-update-id="${currentNavUpdate.id}">

    <div class = "nav-updates-content">

     <span class="nav-update-category">
      ${navUpdateCategory}:
      </span>
     <span class="nav-update-title">
      ${navUpdateTitle}
    
     </span>
    </div>

    <div class = "nav-updates-buttons">
   <a class="site-update-link" href = "${navUpdateHref}">
    ${navUpdateLabel}
   </a>

   <button class="site-update-close">

    close

   </button>

   </div>

  </div>
   
  `;

  return currentNavUpdateHtml;
}
