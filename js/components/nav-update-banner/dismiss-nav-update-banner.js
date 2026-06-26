import { getDismissedNavUpdates } from "/js/utils/nav-update-storage.js";
import { addDismissedNavUpdate } from "/js/utils/nav-update-storage.js";

export function dismissNavUpdateBanner(bannerId) {
  const navUpdatesStorageArray = getDismissedNavUpdates();
  const currentNavBannerId = bannerId;

  if (!navUpdatesStorageArray.includes(currentNavBannerId)) {
    addDismissedNavUpdate(currentNavBannerId);
  }
}
