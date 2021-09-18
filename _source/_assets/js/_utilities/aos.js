/* ----------------------------------------------------------------------------
trigger CSS animations on targeted elements when they enter the viewport
---------------------------------------------------------------------------- */

// apply the animation when an observed element enters the viewport
function animateElements(elements) {
  const observer = new IntersectionObserver((entries) => {
    let extraDelay = 0;

    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const element = entry.target;
        const animation = element.getAttribute('data-aos');
        const styles = getComputedStyle(element);
        const existingDelay = parseFloat(styles.animationDelay.slice(0, -1));
        // add in any delay set via CSS
        if (extraDelay > 0) {
          element.style.animationDelay = `${extraDelay + existingDelay}s`;
        }
        element.classList.add(animation);
        extraDelay += 0.1;
        observer.unobserve(entry.target);
      }
    });
  });

  // transposes parent animation settings to direct children
  function prepChildAnimations(element) {
    const elementAnimation = element.getAttribute('data-aos');
    const elementStyles = getComputedStyle(element);
    const elementDelay = parseFloat(elementStyles.animationDelay.slice(0, -1));
    const childElements = element.querySelectorAll(':scope > *');
    childElements.forEach((child) => {
      const childElement = child;
      childElement.classList.add('animate');
      childElement.setAttribute('data-aos', elementAnimation);
      childElement.style.animationDelay = `${elementDelay}s`;
      observer.observe(childElement);
    });
    element.classList.remove('animate');
  }

  // prep children for observation, or observe the element directly
  elements.forEach((element) => {
    if (element.hasAttribute('data-aos-children')) {
      prepChildAnimations(element);
    } else {
      observer.observe(element);
    }
  });
}

// use a mutation observer to apply behavior to new matching elements
function observeNewElements() {
  const options = {
    childList: true,
    attributes: true,
    subtree: true,
    attributeFilter: ['data-aos'],
  };

  function callback(mutations) {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName) { // elements only please
          animateElements(node.querySelectorAll('[data-aos]'));
        }
      });
    });
  }

  const observer = new MutationObserver(callback);
  observer.observe(document.querySelector('body'), options);
}

// make it so
export function animateOnScroll() {
  animateElements(document.querySelectorAll('[data-aos]'));
  observeNewElements();
}
