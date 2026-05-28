export function setupStickyHeader() {

  const header =
    document.querySelector(
      '.site-header'
    );


  if (!header) return;



  let lastScrollY =
    window.scrollY;



  function updateHeader() {

    const currentScrollY =
      window.scrollY;



    /* SCROLLED STATE */

    if (currentScrollY > 40) {

      header.classList.add(
        'scrolled'
      );

    } else {

      header.classList.remove(
        'scrolled'
      );

    }



    /*  SCROLL DIRECTION */

    if (
      currentScrollY >
      lastScrollY &&
      currentScrollY > 120
    ) {

      header.classList.add(
        'hidden'
      );

    } else {

      header.classList.remove(
        'hidden'
      );

    }



    lastScrollY =
      currentScrollY;

  }



  window.addEventListener(
    'scroll',
    updateHeader
  );

}