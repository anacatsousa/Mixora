import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import Button from '../Button/Button';
import './_backButton.scss';

function BackButton({ absolute = false }) {
	const navigate = useNavigate();

	const handleBack = () => navigate(-1);

	return (
		<Button onClick={handleBack} className={`back-button ${absolute ? 'back-button--absolute' : ''}`} aria-label="Go back button">
			<ChevronLeft className="back-button__icon" aria-label="arrow left icon" />
			<span>Back</span>
		</Button>
	);
}

export default BackButton;
