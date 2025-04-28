/* ----------------------------------------------------------------------------
trigger CSS animations on targeted elements when they enter the viewport
---------------------------------------------------------------------------- */
export default class animateOnScroll extends HTMLElement {
	animateElements() {
		const observedElements = this.querySelectorAll('[data-aos]');
		const observer = new IntersectionObserver((entries) => {
			let extraDelay = 0;

			// account for the first css-only animation on the page
			if (this.querySelector('.animate')) {
				extraDelay += 0.15;
			}

			for (const entry of entries) {
				if (entry.intersectionRatio > 0) {
					const element = entry.target;
					const animation = element.getAttribute('data-aos');
					const styles = getComputedStyle(element);
					const existingDelay = Number.parseFloat(
						styles.animationDelay.slice(0, -1),
					);
					// add in any delay already set via CSS
					if (extraDelay > 0) {
						element.style.animationDelay = `${extraDelay + existingDelay}s`;
					}
					element.classList.add('animate');
					element.classList.add(animation);
					extraDelay += 0.15;
					observer.unobserve(entry.target);
				}
			}
		});

		for (const element of observedElements) {
			observer.observe(element);
		}
	}

	// transpose parent animation settings to direct children
	prepChildElements() {
		const containerElements = this.querySelectorAll('[data-aos-children]');
		for (const element of containerElements) {
			const animationClass = element.getAttribute('data-aos-children');
			const styles = getComputedStyle(element);
			const delay = Number.parseFloat(styles.animationDelay.slice(0, -1));
			const duration = Number.parseFloat(styles.animationDuration.slice(0, -1));
			const childElements = element.querySelectorAll(':scope > *');
			for (const child of childElements) {
				const childElement = child;
				childElement.setAttribute('data-aos', animationClass);
				if (duration > 0) {
					childElement.style.animationDuration = `${duration}s`;
				}
				if (delay > 0) {
					childElement.style.animationDelay = `${delay}s`;
				}
			}
		}
	}

	connectedCallback() {
		this.prepChildElements();
		this.animateElements();
	}
}

window.customElements.define('animate-on-scroll', animateOnScroll);
