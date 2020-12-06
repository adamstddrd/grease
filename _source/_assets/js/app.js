/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import * as scroll from './scroll.js';
// import * as netlify from "./netlify.js"

document.addEventListener('DOMContentLoaded', () => {
  scroll.animateOnScroll();
  scroll.hasScrolled();
});
