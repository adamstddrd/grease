/* ----------------------------------------------------------------------------
adds a css hook for when the page has scrolled
---------------------------------------------------------------------------- */

export default class ScrollSentinel extends HTMLElement {
  hasScrolled() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio <= 0) {
          this.target.classList.add('scrolled');
        } else {
          this.target.classList.remove('scrolled');
        }
      });
    });
    observer.observe(this);
  }

  connectedCallback() {
    this.target = document.documentElement;
    this.ariaHidden = 'true';
    this.hasScrolled();
  }
}

window.customElements.define('scroll-sentinel', ScrollSentinel);
