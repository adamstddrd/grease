/* ----------------------------------------------------------------------------
js entry point
---------------------------------------------------------------------------- */
import * as scroll from './utilities/scroll.js';
// import * as netlify from "./utilities/netlify.js";

document.addEventListener('DOMContentLoaded', () => {
  scroll.animateOnScroll();
  scroll.hasScrolled();
});
