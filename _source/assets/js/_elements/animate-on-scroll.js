/* ----------------------------------------------------------------------------
trigger CSS animations on targeted elements when they enter the viewport
---------------------------------------------------------------------------- */
export default class animateOnScroll extends HTMLElement {
  animateElements() {
    const observedElements = this.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver((entries) => {
      let extraDelay = 0;

      // account for the first css-only animation on the page
      if (this.querySelector('.animate')) {
        extraDelay += 0.15;
      }

      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          const element = entry.target;
          const animation = element.getAttribute('data-aos');
          const styles = getComputedStyle(element);
          const existingDelay = parseFloat(styles.animationDelay.slice(0, -1));
          // add in any delay already set via CSS
          if (extraDelay > 0) {
            element.style.animationDelay = `${extraDelay + existingDelay}s`;
          }
          element.classList.add('animate');
          element.classList.add(animation);
          extraDelay += 0.15;
          observer.unobserve(entry.target);
        }
      });
    });

    observedElements.forEach((element) => {
      observer.observe(element);
    });
  }

  // transpose parent animation settings to direct children
  prepChildElements() {
    const containerElements = this.querySelectorAll('[data-aos-children]');
    containerElements.forEach((element) => {
      const animationClass = element.getAttribute('data-aos-children');
      const styles = getComputedStyle(element);
      const delay = parseFloat(styles.animationDelay.slice(0, -1));
      const duration = parseFloat(styles.animationDuration.slice(0, -1));
      const childElements = element.querySelectorAll(':scope > *');
      childElements.forEach((child) => {
        const childElement = child;
        childElement.setAttribute('data-aos', animationClass);
        if (duration > 0) {
          childElement.style.animationDuration = `${duration}s`;
        }
        if (delay > 0) {
          childElement.style.animationDelay = `${delay}s`;
        }
      });
    });
  }

  connectedCallback() {
    this.prepChildElements();
    this.animateElements();
  }
}

window.customElements.define('animate-on-scroll', animateOnScroll);
