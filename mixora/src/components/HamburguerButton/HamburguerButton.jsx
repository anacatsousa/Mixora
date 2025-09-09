import './_hamburguerButton.scss';

function HambuerguerButton({ isOpen, toggle }) {
	return (
		<button className={`hamburger ${isOpen ? 'hamburger--open' : ''}`} onClick={toggle} aria-label="Toggle menu">
			<span className="hamburger__line"></span>
			<span className="hamburger__line"></span>
			<span className="hamburger__line"></span>
		</button>
	);
}

export default HambuerguerButton;
