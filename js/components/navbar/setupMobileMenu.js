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



  if (!hamMenu || !mobileMenu) {

    return;

  }



  /* =========================
     OPEN / CLOSE MENU
  ========================= */

  function openMenu() {

    mobileMenu.classList.add(
      'active'
    );

    hamMenu.classList.add(
      'active'
    );

    document.body.style.overflow =
      'hidden';

  }



  function closeMenu() {

    mobileMenu.classList.remove(
      'active'
    );

    hamMenu.classList.remove(
      'active'
    );

    document.body.style.overflow =
      '';



    resetPanels();

  }



  /* =========================
     RESET PANELS
  ========================= */

  function resetPanels() {

    panels.forEach(panel => {

      panel.classList.remove(
        'active'
      );

    });



    const mainPanel =
      document.querySelector(
        '#main-panel'
      );



    if (mainPanel) {

      mainPanel.classList.add(
        'active'
      );

    }

  }



  /* =========================
     OPEN SPECIFIC PANEL
  ========================= */

  function openPanel(panelId) {

    panels.forEach(panel => {

      panel.classList.remove(
        'active'
      );

    });



    const targetPanel =
      document.querySelector(
        `#${panelId}`
      );



    if (targetPanel) {

      targetPanel.classList.add(
        'active'
      );

    }

  }



  /* =========================
     HAMBURGER TOGGLE
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

  const submenuTriggers =
    document.querySelectorAll(
      '.submenu-trigger'
    );



  submenuTriggers.forEach(trigger => {

    trigger.addEventListener(
      'click',
      () => {

        const target =
          trigger.dataset.target;

        openPanel(
          `${target}-panel`
        );

      }
    );

  });



  /* =========================
     BACK BUTTONS
  ========================= */

  const backButtons =
    document.querySelectorAll(
      '.back-button'
    );



  backButtons.forEach(button => {

    button.addEventListener(
      'click',
      () => {

        openPanel(
          'main-panel'
        );

      }
    );

  });



  /* =========================
     RESIZE CLEANUP
  ========================= */

  window.addEventListener(
    'resize',
    () => {

      if (window.innerWidth >= 768) {

        closeMenu();

      }

    }
  );

}