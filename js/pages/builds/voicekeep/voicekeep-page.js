import { renderVoicekeep } from "/js/components/builds/voicekeep/voicekeep.js";
import { loadNavbar } from "/js/components/navbar/navbar.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";
import {initializeScrollToTop} from "/js/components/navbar/behavior/initialize-scroll-to-top.js"
import { loadFooter } from "/js/components/footer.js";


loadNavbar();
renderVoicekeep();
initializeReadingProgress();
initializeScrollToTop();
loadFooter();