import { voicekeepPrivacyContent } from "/data/builds/voiceKeep/privacy.js";
import { renderPrivacy } from "./renderPrivacy.js";

export function renderVoicekeepPrivacy() {

  const app = document.querySelector('#app');
  
  if (!app) return;

  app.innerHTML =`

    <main class="legal-page">

      ${renderPrivacy(voicekeepPrivacyContent)}

    </main>

  `;

}