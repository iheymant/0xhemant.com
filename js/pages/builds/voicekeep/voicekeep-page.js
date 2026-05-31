import { renderVoicekeep } from "/js/components/builds/voicekeep/voicekeep.js";
import { loadNavbar } from "/js/components/navbar/navbar.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";
import { loadFooter } from "/js/components/footer.js";


loadNavbar();
renderVoicekeep();
initializeReadingProgress();
loadFooter();