import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import './_backButton.scss';

function BackButton({ absolute = false }) {
	const navegate = useNavigate();

	const handleBack = () => navegate(-1);

	return (
		<button onClick={handleBack} className={`back-button ${absolute ? 'back-button--absolute' : ''}`}>
			<ChevronLeft className="back-button__icon" />
			Back
		</button>
	);
}

export default BackButton;
