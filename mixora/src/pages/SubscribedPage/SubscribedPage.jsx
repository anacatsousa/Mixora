import './_subscribedPage.scss';
import Container from '../../components/Container/Container';
import { Link } from 'react-router';
import useScrollToTop from '../../hooks/useScrollToTop';

function SubscribedPage() {
	useScrollToTop();

	return (
		<>
			<section className="subscribed">
				<Container>
					<h2 className="subscribed__title">Newsletter subscribed with success!</h2>
					<Link to={'/'} className="subscribed__link">
						Go Home
					</Link>
				</Container>
			</section>
		</>
	);
}

export default SubscribedPage;
