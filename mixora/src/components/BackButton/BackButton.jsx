import { useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import './_backButton.scss';

function BackButton() {
	const navegate = useNavigate();

	const handleBack = () => navegate(-1);

	return (
		<button onClick={handleBack} className="back-button">
			<ChevronLeft className="back-button__icon" />
			Back
		</button>
	);
}

export default BackButton;
