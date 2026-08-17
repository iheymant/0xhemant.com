import { voicekeepPrivacyContent } from "/data/builds/voicekeep/privacy.js";
import { renderPrivacy } from "/js/components/builds/render-builds/render-privacy.js";

export function renderVoicekeepPrivacy() {

  const app = document.querySelector('#app');
  
  if (!app) return;

  app.innerHTML =`

    <main class="legal-page">

      ${renderPrivacy(voicekeepPrivacyContent)}

    </main>

  `;

}