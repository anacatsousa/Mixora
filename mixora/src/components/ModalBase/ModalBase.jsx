import { useEffect, useState, useRef } from 'react';
import './_modalBase.scss';

function ModalBase({ isOpen, children, direction = 'right', withOverlay = true, variant, onClose }) {
	const [closing, setClosing] = useState(false);
	const [visibility, setVisibility] = useState(false);
	const modalRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			setVisibility(true);
			setClosing(false);
			if (withOverlay) {
				document.body.style.overflow = 'hidden';
			}
		} else if (visibility) {
			setClosing(true);
			const timeout = setTimeout(() => {
				setVisibility(false);
				setClosing(false);
				document.body.style.overflow = 'auto';
			}, 500);
			return () => clearTimeout(timeout);
		}
	}, [isOpen, visibility, withOverlay]);

	// Focus trap
	// Focus trap dinâmico no ModalBase
	useEffect(() => {
		if (!visibility || !modalRef.current) return;

		const getFocusableElements = () => {
			const focusableSelectors = 'a, button:not([data-focus-exclude]), input, textarea, select, [tabindex]:not([tabindex="-1"])';
			return [...modalRef.current.querySelectorAll(focusableSelectors)];
		};

		// Foca o primeiro elemento ao abrir
		getFocusableElements()[0]?.focus();

		const handleTabKey = (e) => {
			if (e.key !== 'Tab') return;

			// Recalcula sempre que Tab é pressionado
			const focusableElements = getFocusableElements();
			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (e.shiftKey) {
				if (document.activeElement === firstElement) {
					e.preventDefault();
					lastElement?.focus();
				}
			} else {
				if (document.activeElement === lastElement) {
					e.preventDefault();
					firstElement?.focus();
				}
			}
		};

		const handleEscape = (e) => {
			if (e.key === 'Escape') onClose?.();
		};

		document.addEventListener('keydown', handleTabKey);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('keydown', handleTabKey);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [visibility, onClose]);
	if (!visibility) return null;

	const animationDirection = closing ? `modal__base--closed-${direction}` : `modal__base--open-${direction}`;

	const handleOverlayClick = (e) => {
		if (e.currentTarget === e.target) onClose?.();
	};

	const modalContent = (
		<div ref={modalRef} className={`modal__base modal__base--${variant} ${animationDirection}`} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
			{children}
		</div>
	);

	return (
		<section className="modal">
			{withOverlay ? (
				<div className="modal__overlay" onClick={handleOverlayClick}>
					{modalContent}
				</div>
			) : (
				modalContent
			)}
		</section>
	);
}

export default ModalBase;
