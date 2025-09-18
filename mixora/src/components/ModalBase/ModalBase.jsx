import { useEffect, useState } from 'react';
import './_modalBase.scss';

function ModalBase({ isOpen, children, direction = 'right', variant }) {
	const [closing, setClosing] = useState(false);
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// Open modal
			setVisibility(true);
			setClosing(false);
			document.body.style.overflow = 'hidden';
		} else if (visibility) {
			// Init close animation
			setClosing(true);
			// wait 300ms (animation time) to close modal
			const timeout = setTimeout(() => {
				setVisibility(false);
				setClosing(false);
				document.body.style.overflow = 'auto';
			}, 500);

			return () => clearTimeout(timeout);
		}
	}, [isOpen, visibility]);

	if (!visibility) return null;

	const animationDirection = closing ? `modal__base--closed-${direction}` : `modal__base--open-${direction}`;

	return (
		<section className="modal">
			<div className="modal__overlay">
				<div className={`modal__base modal__base--${variant} ${animationDirection}`}>{children}</div>
			</div>
		</section>
	);
}
export default ModalBase;
