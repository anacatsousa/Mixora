import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import useScrollToTop from '../hooks/useScrollToTop';
import '../scss/components/_static-page.scss';

function StoresPage() {
	useScrollToTop();
	return (
		<section>
			<HeaderStaticPages title="Stores" />;
			<div className="static-page">
				<Container>
					<p>We operate exclusively online.</p>
				</Container>
			</div>
		</section>
	);
}

export default StoresPage;
