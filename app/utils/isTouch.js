export default function isTouchDevice() {
  const hasTouchEvent = 'ontouchstart' in window;
  const touchPoints = navigator.maxTouchPoints || navigator.msMaxTouchPoints;

  const isProbablyTouchDevice =
    (hasTouchEvent && touchPoints > 1) ||
    (hasTouchEvent && touchPoints > 0) ||
    window.innerWidth <= 600;

  return isProbablyTouchDevice;
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const htmlElement = document.documentElement;

    if (isTouchDevice()) {
      htmlElement.classList.add('touch');
    } else {
      htmlElement.classList.remove('touch');
    }
  });
}