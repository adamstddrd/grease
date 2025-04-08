/* ----------------------------------------------------------------------------
details element that defaults to closed @small and open @medium+
---------------------------------------------------------------------------- */

export default class SmallDetails extends HTMLElement {
  constructor() {
    super();
    this.handleMediaChange = this.handleMediaChange.bind(this);
  }

  handleMediaChange(e) {
    this.update(e.matches);
  }

  listen() {
    this.mediaQuery.addEventListener('change', this.handleMediaChange);
  }

  update(matches) {
    if (matches) {
      this.details.open = false;
      this.summary.tabIndex = 0;
      this.summary.classList.add('button');
    } else {
      this.details.open = true;
      this.summary.tabIndex = -1;
      this.summary.classList.remove('button');
    }
  }

  connectedCallback() {
    this.details = this.querySelector('details');
    this.summary = this.querySelector('summary');
    if (!this.details || !this.summary) return;
    this.mediaQuery = window.matchMedia('(max-width: 49.999em)');
    this.update(this.mediaQuery.matches);
    this.listen();
  }

  disconnectedCallback() {
    if (this.mediaQuery) {
      this.mediaQuery.removeEventListener('change', this.handleMediaChange);
    }
  }
}

window.customElements.define('small-details', SmallDetails);
