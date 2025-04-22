/* ----------------------------------------------------------------------------
switch between color themes and display modes
---------------------------------------------------------------------------- */
export default class ThemePicker extends HTMLElement {
  constructor() {
    super();
    this.buttons = [];
    this.handleClick = this.handleClick.bind(this);
    this.currentTheme = null;
    this.currentMode = null;
  }

  saveValue(type, value) {
    localStorage.setItem(type, value);
    this.updateButtons(type, value);
    this.applyValues();
  }

  // Apply theme and mode values to document element using classes
  applyValues() {
    const theme = localStorage.getItem('theme') || 'default';
    const mode = localStorage.getItem('mode') || 'system';
    
    // Track previous values for cleanup
    if (this.currentTheme && this.currentTheme !== 'default') {
      this.target.classList.remove(this.currentTheme);
    }
    
    if (this.currentMode && this.currentMode !== 'system') {
      this.target.classList.remove(this.currentMode);
    }
    
    // Apply new classes for non-default values
    if (theme !== 'default') {
      this.target.classList.add(theme);
    }
    
    if (mode !== 'system') {
      this.target.classList.add(mode);
    }
    
    // Remember current values
    this.currentTheme = theme;
    this.currentMode = mode;
  }

  updateButtons(type, value) {
    // Remove aria-current from previous active button of this type
    const currentActive = this.querySelector(`[data-type="${type}"][aria-current="true"]`);
    if (currentActive) {
      currentActive.removeAttribute('aria-current');
    }
    
    // Set aria-current on new active button
    const newActive = this.querySelector(`[data-type="${type}"][data-value="${value}"]`);
    if (newActive) {
      newActive.setAttribute('aria-current', 'true');
    }
  }

  handleClick(e) {
    const button = e.currentTarget;
    const type = button.getAttribute('data-type');
    const value = button.getAttribute('data-value');
    this.saveValue(type, value);
  }

  setupControls() {
    // Set up all buttons
    this.buttons = Array.from(this.querySelectorAll('[data-type][data-value]'));
    this.buttons.forEach((element) => {
      element.addEventListener('click', this.handleClick);
    });
  }

  connectedCallback() {
    this.target = document.documentElement;
    
    // Initialize with saved values from localStorage
    this.currentTheme = localStorage.getItem('theme') || 'default';
    this.currentMode = localStorage.getItem('mode') || 'system';
    
    this.updateButtons('theme', this.currentTheme);
    this.updateButtons('mode', this.currentMode);
    this.applyValues();
    
    this.setupControls();
  }

  disconnectedCallback() {
    // Clean up button listeners
    if (this.buttons.length > 0) {
      this.buttons.forEach((element) => {
        element.removeEventListener('click', this.handleClick);
      });
    }
  }
}

customElements.define('theme-picker', ThemePicker);