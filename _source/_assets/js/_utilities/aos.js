/* ----------------------------------------------------------------------------
 trigger CSS animations on targeted elements
 ---------------------------------------------------------------------------- */

function animateElements(elements) {
  const observer = new IntersectionObserver((entries) => {
    let extraDelay = 0;

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
        element.classList.add(animation);
        extraDelay += 0.15;
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}

// transposes parent animation settings to direct children
function prepChildAnimations(elements) {
  elements.forEach((element) => {
    const animationClass = element.getAttribute('data-aos-children');
    const styles = getComputedStyle(element);
    const delay = parseFloat(styles.animationDelay.slice(0, -1));
    const duration = parseFloat(styles.animationDuration.slice(0, -1));
    const childElements = element.querySelectorAll(':scope > *');
    childElements.forEach((child) => {
      const childElement = child;
      childElement.classList.add('animate');
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

export function animateOnScroll() {
  prepChildAnimations(document.querySelectorAll('[data-aos-children]'));
  animateElements(document.querySelectorAll('[data-aos]'));
}
