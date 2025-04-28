/* ----------------------------------------------------------------------------
Gracefully degrade anchored popover menus
---------------------------------------------------------------------------- */

export default class PopoverMenu extends HTMLElement {
	constructor() {
		super();
		this.isOpen = false;
		this.clickHandler = this.handleClick.bind(this);
		this.keydownHandler = this.handleKeydown.bind(this);
	}

	get needsFallback() {
		return !('anchorName' in document.documentElement.style);
	}

	handleClick(e) {
		const target = e.target;
		const targetButton = target.closest('button');

		if (targetButton === this.button) {
			e.preventDefault();
			this.toggleMenu();
			return;
		}

		if (!this.menu.contains(target)) {
			this.closeMenu();
		}
	}

	handleKeydown(e) {
		if (!this.isOpen) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			this.closeMenu();
			this.button.focus();
		}
	}

	toggleMenu() {
		this.isOpen ? this.closeMenu() : this.openMenu();
	}

	openMenu() {
		if (!this.button || !this.menu) return;

		this.isOpen = true;
		this.button.setAttribute('aria-expanded', 'true');
		this.menu.removeAttribute('hidden');
	}

	closeMenu() {
		if (!this.button || !this.menu) return;

		this.isOpen = false;
		this.button.setAttribute('aria-expanded', 'false');
		this.menu.setAttribute('hidden', '');
	}

	setupFallbackBehavior() {
		if (this.menu.hasAttribute('popover')) {
			this.menu.removeAttribute('popover');
		}

		if (this.button.hasAttribute('popovertarget')) {
			this.button.removeAttribute('popovertarget');
		}

		this.button.setAttribute('aria-details', this.menu.id);
		this.button.setAttribute('aria-expanded', 'false');

		if (!this.menu.hasAttribute('hidden')) {
			this.menu.setAttribute('hidden', '');
		}

		this.menu.style.zIndex = '9999';

		document.addEventListener('click', this.clickHandler, true);
		this.addEventListener('keydown', this.keydownHandler);
	}

	connectedCallback() {
		this.button = this.querySelector('[popovertarget]');
		this.menu = this.querySelector('[popover]');

		if (this.needsFallback && this.button && this.menu) {
			this.setupFallbackBehavior();
		}
	}

	disconnectedCallback() {
		if (this.needsFallback) {
			document.removeEventListener('click', this.clickHandler, true);
			this.removeEventListener('keydown', this.keydownHandler);
		}
	}
}

window.customElements.define('popover-menu', PopoverMenu);
