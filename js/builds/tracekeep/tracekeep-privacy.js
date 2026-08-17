import { tracekeepPrivacyContent } from "/data/builds/tracekeep/privacy.js";
import { renderPrivacy } from "/js/components/builds/render-builds/render-privacy.js";

export function renderTracekeepPrivacy() {

  const app = document.querySelector('#app');
  
  if (!app) return;

  app.innerHTML =`

    <main class="legal-page">

      ${renderPrivacy(tracekeepPrivacyContent)}

    </main>

  `;

}