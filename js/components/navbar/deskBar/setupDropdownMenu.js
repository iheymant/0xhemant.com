export function setupDropdownMenu() {
  const siteHeader = document.querySelector(".site-header");

  const triggers = document.querySelectorAll(".dropdown-trigger");

  const megaMenus = document.querySelectorAll(".mega-menu");

  const overlay = document.querySelector(".page-overlay");

  const normalLinks = document.querySelectorAll(".nav-link");

  const headerLogo = document.querySelector(".logo");

  if (!siteHeader || !triggers.length || !megaMenus.length || !overlay) {
    return;
  }

  /* STATE  */

  let closeTimeout = null;

  let currentMenu = null;

  /*  OVERLAY SIZE */

  function updateOverlaySize() {
    const headerHeight = siteHeader.offsetHeight;

    overlay.style.top = `${headerHeight}px`;

    overlay.style.height = `calc(100vh - ${headerHeight}px)`;
  }

  /* REMOVE ACTIVE MENUS */

  function cleanupMenus() {
    megaMenus.forEach((menu) => {
      menu.classList.remove("active");

      menu.classList.remove("closing");
    });
  }

  /*  CLOSE MENUS */

  function closeMenus() {
    clearTimeout(closeTimeout);

    if (!currentMenu) {
      return;
    }

    currentMenu.classList.add("closing");

    siteHeader.classList.remove("dropdown-active");

    overlay.classList.remove("active");

    closeTimeout = setTimeout(() => {
      currentMenu.classList.remove("active");

      currentMenu.classList.remove("closing");

      currentMenu = null;
    }, 350);
  }

  /* OPEN MENU */

  function openMenu(menuId) {
    clearTimeout(closeTimeout);

    const targetMenu = document.querySelector(`#${menuId}`);

    if (!targetMenu) {
      return;
    }

    /* SAME MENU */

    if (currentMenu === targetMenu) {
      currentMenu.classList.remove("closing");

      return;
    }

    /* CLOSE OLD MENU */

    if (currentMenu) {
      currentMenu.classList.remove("active");

      currentMenu.classList.remove("closing");
    }

    /* OPEN NEW */

    currentMenu = targetMenu;

    currentMenu.classList.add("active");

    siteHeader.classList.add("dropdown-active");

    overlay.classList.add("active");

    updateOverlaySize();
  }

  /*  TRIGGER EVENTS */

  triggers.forEach((trigger) => {
    trigger.addEventListener("pointerenter", () => {
      const menuId = trigger.dataset.menu;

      openMenu(menuId);
    });
  });

  /*  NORMAL LINKS */

  normalLinks.forEach((link) => {
    link.addEventListener("pointerenter", () => {
      closeMenus();
    });
  });

  /*  LOGO */

  if (headerLogo) {
    headerLogo.addEventListener("pointerenter", () => {
      closeMenus();
    });
  }

  /* HEADER LEAVE */

  siteHeader.addEventListener("pointerleave", () => {
    closeMenus();
  });

  /*  OVERLAY CLICK  */

  overlay.addEventListener("click", () => {
    closeMenus();
  });

  /* RESIZE */

  window.addEventListener("resize", updateOverlaySize);
}
