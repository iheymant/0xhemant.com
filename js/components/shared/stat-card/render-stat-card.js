export function renderStatCard({ count, meta }) {
  const tag = meta.redirectUrl ? "a" : "div";

  return `
    <${tag}
      class="stat-card"
      ${meta.redirectUrl ? `href="${meta.redirectUrl}"` : ""}
    >

      <span
        class="
          stat-card-dot
          stat-card-dot--${meta.color}
        "
      ></span>

      <span class="stat-card-count">
        ${count}
      </span>

      <span class="stat-card-label">
        ${meta.label}
      </span>

      <span
        class="
          stat-card-description
          stat-card-sublabel
        "
      >
        ${meta.description}
      </span>

    </${tag}>
  `;
}
