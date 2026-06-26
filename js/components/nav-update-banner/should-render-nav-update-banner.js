import { navUpdates } from "/data/nav-updates/updates.js";
import { getDismissedNavUpdates } from "/js/utils/nav-update-storage.js";

export function shouldRenderNavUpdateBanner() {
  const lastestNavUpdate = navUpdates[0];
  const navUpdatesStorageArray = getDismissedNavUpdates();

  return !navUpdatesStorageArray.includes(
  lastestNavUpdate.id
);
}
