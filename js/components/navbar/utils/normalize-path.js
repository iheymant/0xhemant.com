export function normalizePath(path) {

  return path
    .toLowerCase()
    .replace(/index\.html$/, "")
    .replace(/\/$/, "");

}