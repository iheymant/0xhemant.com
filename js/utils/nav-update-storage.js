const STORAGE_KEY = "dismissedNavUpdates";

export function getDismissedNavUpdates() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function addDismissedNavUpdate(updateId) {
  const dismissedUpdates = getDismissedNavUpdates();

  if (dismissedUpdates.includes(updateId)) {
    return;
  }

  dismissedUpdates.push(updateId);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(dismissedUpdates));
}

export function isNavUpdateDismissed(updateId) {
  return getDismissedNavUpdates().includes(updateId);
}
