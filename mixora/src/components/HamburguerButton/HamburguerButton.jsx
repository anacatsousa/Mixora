import Button from '../Button/Button';
import './_hamburguerButton.scss';

function HambuerguerButton({ isOpen, toggle }) {
	return (
		<Button className={`hamburger ${isOpen ? 'hamburger--open' : ''}`} variant="hamburger" onClick={toggle}>
			<span className="hamburger__line"></span>
			<span className="hamburger__line"></span>
			<span className="hamburger__line"></span>
		</Button>
	);
}

export default HambuerguerButton;
