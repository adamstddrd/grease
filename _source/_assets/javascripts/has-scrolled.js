/* ----------------------------------------------------------------------------
adds a css hook for when the page has scrolled
---------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  const target = document.documentElement;
  const template = `<div class="scroll-sentinel" aria-hidden="true"></div>`;
  const sentinel = new DOMParser().parseFromString(template, 'text/html').body.firstChild;
  document.body.appendChild(sentinel);

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0) {
        target.classList.add('scrolled');
      } else {
        target.classList.remove('scrolled');
      }
    });
  });

  observer.observe(sentinel);

});
