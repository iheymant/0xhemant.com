import { renderLayout } from "/js/layout/render-layout.js";
import { initializeLayout } from "/js/layout/initialize-layout.js";
import { renderVoicekeep } from "/js/components/builds/voicekeep/voicekeep.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";


renderLayout();
initializeLayout();
renderVoicekeep();
initializeReadingProgress();
