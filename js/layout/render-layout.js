import { loadNavbar } from "/js/components/navbar/navbar.js";
import { loadFooter } from "/js/components/footer.js";

export function renderLayout() {
  loadNavbar();
  loadFooter();
}
