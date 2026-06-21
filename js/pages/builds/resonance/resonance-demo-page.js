import { loadNavbar } from "/js/components/navbar/navbar.js";
import { initializeResonance } from "/js/builds/resonance/resonance.js";
import { initializeDemoPage } from "/js/builds/resonance/initialize-demo-page.js";
import { loadFooter } from "/js/components/footer.js";

loadNavbar();
initializeResonance();
initializeDemoPage();
loadFooter();