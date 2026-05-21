export function setupDropdownMenu() {

  const dropdownWrappers =
    document.querySelectorAll(
      '.dropdown-wrapper'
    );

  const overlay =
    document.querySelector(
      '.page-overlay'
    );



  if (
    !dropdownWrappers.length ||
    !overlay
  ) {

    return;

  }



  /*  CLOSE ALL DROPDOWNS */

  function closeAllDropdowns() {

    dropdownWrappers.forEach(
      wrapper => {

        wrapper.classList.remove(
          'active'
        );

      }
    );


    overlay.classList.remove(
      'active'
    );

  }



  /* OPEN DROPDOWN */

  function openDropdown(wrapper) {

    closeAllDropdowns();


    wrapper.classList.add(
      'active'
    );


    overlay.classList.add(
      'active'
    );

  }



  /* SETUP EACH WRAPPER */

  dropdownWrappers.forEach(
    wrapper => {

      wrapper.addEventListener(
        'pointerenter',
        () => {

          openDropdown(wrapper);

        }
      );



      wrapper.addEventListener(
        'pointerleave',
        () => {

          closeAllDropdowns();

        }
      );

    }
  );



  /* OVERLAY CLICK CLOSE */

  overlay.addEventListener(
    'click',
    closeAllDropdowns
  );

}