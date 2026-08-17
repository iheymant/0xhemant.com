import { renderVoicekeepPrivacy } from "/js/builds/voicekeep/voicekeep-privacy.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";
import { renderLayout } from "/js/layout/render-layout.js";
import { initializeLayout } from "/js/layout/initialize-layout.js";

renderLayout();
initializeLayout();
renderVoicekeepPrivacy();
initializeReadingProgress();

