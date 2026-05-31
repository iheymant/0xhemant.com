export function initializeReadingProgress() {

  const progressElement =
    document.querySelector(
      '.reading-progress'
    );

  if (!progressElement)
    return;

  function updateProgress() {

    const scrollTop =
      window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight;

    const viewportHeight =
      window.innerHeight;

    const scrollableHeight =
      documentHeight -
      viewportHeight;

    if (scrollableHeight <= 0) {

      progressElement.style.setProperty(
        '--reading-progress',
        '0%'
      );

      return;

    }

    const progress =
      (
        scrollTop /
        scrollableHeight
      ) * 100;

    progressElement.style.width =
      `${progress}%`;

  }

  window.addEventListener(
    'scroll',
    updateProgress,
    { passive: true }
  );

  window.addEventListener(
    'resize',
    updateProgress
  );

  updateProgress();

}