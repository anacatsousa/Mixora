import Container from '../../components/Container/Container';
import './_notFoundPage.scss';
import { Link } from 'react-router';

function NotFoundPage() {
	return (
		<section className="not-Found">
			<Container>
				<h2 className="not-Found__title">Oops! Something's gone wrong.</h2>
				<Link to={'/'} className="not-Found__link">
					Go Home
				</Link>
			</Container>
		</section>
	);
}

export default NotFoundPage;
