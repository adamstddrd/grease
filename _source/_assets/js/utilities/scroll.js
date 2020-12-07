/* ----------------------------------------------------------------------------
trigger CSS animations on targeted elements when they enter the viewport
---------------------------------------------------------------------------- */

function animateOnScroll() {
  const aosElements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        const animation = entry.target.getAttribute('data-aos');
        entry.target.classList.add(animation);
        observer.unobserve(entry.target);
      }
    });
  });

  aosElements.forEach((element) => {
    observer.observe(element);
  });
}

/* ----------------------------------------------------------------------------
adds a css hook for when the page has scrolled
---------------------------------------------------------------------------- */

function hasScrolled() {
  const target = document.documentElement;
  const template = '<div class="scroll-sentinel" aria-hidden="true"></div>';
  const sentinel = new DOMParser().parseFromString(template, 'text/html').body.firstChild;

  document.body.appendChild(sentinel);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio <= 0) {
        target.classList.add('scrolled');
      } else {
        target.classList.remove('scrolled');
      }
    });
  });

  observer.observe(sentinel);
}

export { animateOnScroll, hasScrolled };
