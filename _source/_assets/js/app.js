/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import { animateOnScroll } from './_utilities/aos.js';
import ScrollSentinel from './_utilities/scroll-sentinel.js';

document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
});
