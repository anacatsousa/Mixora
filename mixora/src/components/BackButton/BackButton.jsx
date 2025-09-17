import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import Button from '../Button/Button';
import './_backButton.scss';

function BackButton({ absolute = false }) {
	const navigate = useNavigate();

	const handleBack = () => navigate(-1);

	return (
		<Button onClick={handleBack} className={`back-button ${absolute ? 'back-button--absolute' : ''}`}>
			<ChevronLeft className="back-button__icon" />
			<span>Back</span>
		</Button>
		// <button onClick={handleBack} className={`back-button ${absolute ? 'back-button--absolute' : ''}`}>
		// 	<ChevronLeft className="back-button__icon" />
		// 	Back
		// </button>
	);
}

export default BackButton;
