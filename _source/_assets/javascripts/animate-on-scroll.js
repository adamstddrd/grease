/* ----------------------------------------------------------------------------
trigger CSS animations on targeted elements when they enter the viewport
---------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        const animation = entry.target.getAttribute('data-aos');
        entry.target.classList.add(animation);
        observer.unobserve(entry.target);
      }
    });
  });

  const aosElements = document.querySelectorAll('[data-aos]');

  aosElements.forEach(element => {
    observer.observe(element);
  });

});
