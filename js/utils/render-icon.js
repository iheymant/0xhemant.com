import { icons } from "/assets/icons/icons.js";

export function renderIcon(icon) {
  if (!icon) return "";

  if (icon.type === "svg") {
    return icons[icon.value] ?? "";
  }

  if (icon.type === "image") {
    return `
      <img
        src="${icon.value}"
        alt=""
        class="build-link-icon"
      >
    `;
  }

  return "";
}