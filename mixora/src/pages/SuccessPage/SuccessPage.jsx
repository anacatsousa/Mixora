import './_successPage.scss';
import Container from '../../components/Container/Container';
import { Link, useLocation } from 'react-router';
import useScrollToTop from '../../hooks/useScrollToTop';

function SuccessPage() {
	useScrollToTop();
	const location = useLocation();
	const type = location.state?.type;

	let message = '';
	if (type === 'contact') {
		message = 'Form submitted!';
	} else if (type === 'newsletter') {
		message = 'Newsletter subscribed with success!';
	}

	return (
		<>
			<section className="success">
				<Container>
					<h1 className="success__title">{message}</h1>
					<Link to={'/'} className="success__link">
						Go Home
					</Link>
				</Container>
			</section>
		</>
	);
}

export default SuccessPage;
