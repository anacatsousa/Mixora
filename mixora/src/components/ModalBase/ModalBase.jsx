import { useEffect, useState } from 'react';
import './_modalBase.scss';

function ModalBase({ isOpen, children, direction = 'right', withOverlay = true, variant, onClose }) {
	const [closing, setClosing] = useState(false);
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setVisibility(true);
			setClosing(false);

			// 🔹 Só bloqueia o scroll se houver overlay
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

	if (!visibility) return null;

	const animationDirection = closing ? `modal__base--closed-${direction}` : `modal__base--open-${direction}`;

	const handleOverlayClick = (e) => {
		// Fecha se clicou exatamente no overlay (e não dentro da modal)
		if (e.currentTarget === e.target) {
			onClose?.();
		}
	};

	return (
		<section className="modal">
			{withOverlay ? (
				<div className="modal__overlay" onClick={handleOverlayClick}>
					<div
						className={`modal__base modal__base--${variant} ${animationDirection}`}
						onClick={(e) => e.stopPropagation()} // impede o clique dentro de fechar
					>
						{children}
					</div>
				</div>
			) : (
				<div className={`modal__base modal__base--${variant} ${animationDirection}`} onClick={(e) => e.stopPropagation()}>
					{children}
				</div>
			)}
		</section>
	);
}

export default ModalBase;
