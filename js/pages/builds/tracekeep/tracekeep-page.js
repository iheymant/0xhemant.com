import { renderLayout } from "/js/layout/render-layout.js";
import { initializeLayout } from "/js/layout/initialize-layout.js";
import { renderTracekeep } from "/js/builds/tracekeep/tracekeep.js";
import { initializeReadingProgress } from "/js/components/reading-progress/setup-reading-progress.js";


renderLayout();
initializeLayout();
renderTracekeep();
initializeReadingProgress();
