/* ----------------------------------------------------------------------------
close inner <details> on click
---------------------------------------------------------------------------- */

export default class DetailsMenu extends HTMLElement {
  constructor() {
    super();
    this.clickHandler = this.handleClick.bind(this);
  }

  handleClick(e) {
    const clickedSummary = e.target.closest('summary');

    if (clickedSummary) {
      return;
    }
    
    const openDetails = this.querySelector('details[open]');
    if (openDetails) {
      openDetails.removeAttribute('open');
    }
  }

  connectedCallback() {
    document.addEventListener('click', this.clickHandler, true);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.clickHandler, true);
  }
}

window.customElements.define('details-menu', DetailsMenu);
