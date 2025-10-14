import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import useScrollToTop from '../hooks/useScrollToTop';
import '../scss/components/_static-page.scss';

function CareesPage() {
	useScrollToTop();
	return (
		<section>
			<HeaderStaticPages title="Careers" />;
			<div className="static-page">
				<Container>
					<p>We’re sorry, there are currently no open vacancies at Mixora. Please check back soon.</p>
				</Container>
			</div>
		</section>
	);
}

export default CareesPage;
