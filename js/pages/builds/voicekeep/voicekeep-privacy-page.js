import { renderVoicekeepPrivacy } from "/js/components/builds/voicekeep/voicekeep-privacy.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";
import { loadNavbar } from "/js/components/navbar/navbar.js";
import { loadFooter } from "/js/components/footer.js";

loadNavbar();
renderVoicekeepPrivacy();
initializeReadingProgress();
loadFooter();
