export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", nextTheme);

  localStorage.setItem("theme", nextTheme);
}

window.toggleTheme = toggleTheme;