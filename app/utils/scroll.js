import isTouch from './isTouch.js';
import Lenis from 'lenis';

let lenis;

if (typeof window !== 'undefined' && !isTouch()) {
    lenis = new Lenis({
        autoRaf: true,
        duration: 1.2,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const mapOverlay = document.querySelector('.contacts__map-overlay');
    const mapWrapper = document.querySelector('.contacts__map');

    if (mapWrapper) {
        mapWrapper.addEventListener('mouseenter', () => {
            lenis.stop();
            lenis.destroy();
        });

        mapWrapper.addEventListener('mouseleave', () => {
            lenis = new Lenis({
                autoRaf: true,
                duration: 1.2,
            });
        });
    }
}

function setIsScroll() {
    let documentElement = document.documentElement;
    if (window.scrollY > 0) {
        documentElement.classList.add('scroll');
    } else {
        documentElement.classList.remove('scroll');
    }
}

function setIsVerticalScroll() {
    let documentElement = document.documentElement;
    if (
        window.scrollY > 0 &&
        document.documentElement.classList.contains('touch')
    ) {
        documentElement.classList.add('horizontal-scroll');
    } else if (
        window.scrollY > window.outerWidth &&
        !document.documentElement.classList.contains('touch')
    ) {
        documentElement.classList.add('horizontal-scroll');
    } else {
        documentElement.classList.remove('horizontal-scroll');
    }
}

// Ensure the code runs only on the client side (inside useEffect)
if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setIsScroll);
    window.addEventListener('scroll', setIsScroll);
    document.addEventListener('DOMContentLoaded', setIsVerticalScroll);
    window.addEventListener('scroll', setIsVerticalScroll);
}

export default lenis;