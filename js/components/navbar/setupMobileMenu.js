export function setupMobileMenu() {

  const hamMenu =
    document.querySelector(
      '.ham-menu'
    );



  const mobileMenu =
    document.querySelector(
      '.mobile-menu'
    );



  const panels =
    document.querySelectorAll(
      '.mobile-panel'
    );



  const submenuTriggers =
    document.querySelectorAll(
      '.submenu-trigger'
    );



  const backButtons =
    document.querySelectorAll(
      '.back-button'
    );



  const mainPanel =
    document.querySelector(
      '#main-panel'
    );



  if (
    !hamMenu ||
    !mobileMenu ||
    !mainPanel
  ) {

    return;

  }



  /* =========================
     PANEL STACK
  ========================= */

  const panelStack = [
    mainPanel
  ];



  /* =========================
     RESET PANELS
  ========================= */

  function resetPanels() {
  panels.forEach(panel => {
    panel.classList.remove('active', 'panel-behind');
  });
  mainPanel.classList.add('active');
  panelStack.length = 0;
  panelStack.push(mainPanel);
  delete mobileMenu.dataset.depth; // ← clear depth on reset
}



  /* =========================
     OPEN MENU
  ========================= */

function openMenu() {
  mobileMenu.classList.add('active');
  hamMenu.classList.add('active');
  document.body.classList.add('mobile-menu-open');
  resetPanels();
  // ← remove the panelId reference that doesn't exist here
}



  /* CLOSE MENU  */

 function closeMenu() {

  mobileMenu.classList.remove(
      'active'
    );



  hamMenu.classList.remove(
      'active'
    );



    document.body.classList.remove(
      'mobile-menu-open'
    );



    resetPanels();

  }



  /* =========================
     OPEN PANEL
  ========================= */

function openPanel(panelId) {
  const currentPanel = panelStack[panelStack.length - 1];
  const targetPanel = document.querySelector(`#${panelId}`);
  if (!targetPanel) return;

  currentPanel.classList.add('panel-behind');
  targetPanel.classList.add('active');

  // ← Set depth on the container
  mobileMenu.dataset.depth = panelStack.length; // depth 1, 2, 3...

  panelStack.push(targetPanel);
}



  /* =========================
     GO BACK
  ========================= */

  function goBack() {
  if (panelStack.length <= 1) return;

  const currentPanel = panelStack.pop();
  currentPanel.classList.remove('active');

  const previousPanel = panelStack[panelStack.length - 1];
  previousPanel.classList.remove('panel-behind');

  // ← Update depth
  mobileMenu.dataset.depth = panelStack.length - 1;
  if (panelStack.length === 1) {
    delete mobileMenu.dataset.depth;
  }
}



  /* =========================
     HAMBURGER
  ========================= */

  hamMenu.addEventListener(
    'click',
    () => {

      if (
        mobileMenu.classList.contains(
          'active'
        )
      ) {

        closeMenu();

      } else {

        openMenu();

      }

    }
  );



  /* =========================
     SUBMENU TRIGGERS
  ========================= */

  submenuTriggers.forEach(trigger => {

    trigger.addEventListener(
      'click',
      () => {

        const panelId =
          trigger.dataset.panel;



        openPanel(panelId);

      }
    );

  });



  /* =========================
     BACK BUTTONS
  ========================= */

  backButtons.forEach(button => {

    button.addEventListener(
      'click',
      goBack
    );

  });



  /* =========================
     RESIZE CLEANUP
  ========================= */

  window.addEventListener(
    'resize',
    () => {

      if (
        window.innerWidth >= 768
      ) {

        closeMenu();

      }

    }
  );

}