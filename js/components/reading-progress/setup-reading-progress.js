export function initializeReadingProgress() {

  const progressElement =
    document.querySelector(
      '.reading-progress'
    );

  if (!progressElement)
    return;

  let ticking = false;

  function updateProgress() {

    const scrollTop =
      window.scrollY;

    const scrollableHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    if (scrollableHeight <= 0) {

      progressElement.style.transform =
        'scaleX(0)';

      ticking = false;

      return;

    }

    const progress =
      Math.min(
        scrollTop / scrollableHeight,
        1
      );

    progressElement.style.transform =
      `scaleX(${progress})`;

    ticking = false;

  }

  window.addEventListener(
    'scroll',
    () => {

      if (!ticking) {

        requestAnimationFrame(
          updateProgress
        );

        ticking = true;

      }

    },
    { passive: true }
  );

  window.addEventListener(
    'resize',
    updateProgress
  );

  updateProgress();

}