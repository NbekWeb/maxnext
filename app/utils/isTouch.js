export default function isTouchDevice() {
  const hasTouchEvent = 'ontouchstart' in window;
  const touchPoints = navigator.maxTouchPoints || navigator.msMaxTouchPoints;

  const isProbablyTouchDevice = hasTouchEvent && touchPoints > 1;
  return isProbablyTouchDevice || (hasTouchEvent && touchPoints > 0) || window.innerWidth <= 600;
}