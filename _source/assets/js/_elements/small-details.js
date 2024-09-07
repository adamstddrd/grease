/* ----------------------------------------------------------------------------
details element that defaults to closed @small and open @medium+
---------------------------------------------------------------------------- */

export default class SmallDetails extends HTMLElement {
  listen() {
    this.mediaQuery.addEventListener('change', (e) => {
      this.update(e.matches);
    });
  }

  update(matches) {
    if (matches) {
      this.details.open = false;
      this.summary.tabIndex = 0;
    } else {
      this.details.open = true;
      this.summary.tabIndex = -1;
    }
  }

  connectedCallback() {
    this.details = this.querySelector('details');
    this.summary = this.querySelector('summary');
    this.mediaQuery = window.matchMedia('(max-width: 49.999em)');
    this.update(this.mediaQuery.matches);
    this.listen();
  }
}

window.customElements.define('small-details', SmallDetails);
