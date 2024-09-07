/* ----------------------------------------------------------------------------
creates shapes with random sizes, positions, and styles
---------------------------------------------------------------------------- */

export default class RandomShapes extends HTMLElement {
  static get observedAttributes() {
    return ['quantity', 'scale', 'jitter'];
  }

  get quantity() {
    return this.hasAttribute('quantity') ? this.getAttribute('quantity') : '30';
  }

  get scale() {
    return this.hasAttribute('scale') ? this.getAttribute('scale') : '0';
  }

  get jitter() {
    return this.hasAttribute('jitter') ? this.getAttribute('jitter') : '0';
  }

  static random(min, max) {
    const minimum = Math.ceil(min);
    const maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }

  generateElements() {
    this.innerHTML = '';
    const classes = ['shape-1', 'shape-2', 'shape-3', 'shape-4'];
    for (let i = 0; i < this.quantity; i += 1) {
      const rClass = classes[Math.floor(Math.random() * classes.length)];
      const rS = RandomShapes.random(this.scale, this.scale * 5);
      const rX = RandomShapes.random(this.jitter * -1, this.jitter);
      const rY = RandomShapes.random((this.jitter / 2) * -1, this.jitter / 2);
      const shape = document.createElement('div');
      shape.classList.add(rClass);
      if (this.jitter > 0) { shape.style.translate = `${rX}rem ${rY}rem`; }
      if (this.scale > 0) { shape.style.scale = `${rS}%`; }
      this.appendChild(shape);
    }
  }

  connectedCallback() {
    this.generateElements();
  }
}

window.customElements.define('random-shapes', RandomShapes);
