import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import ScrollToTop from '../components/ScrollToTop';
import '../scss/components/_static-page.scss';

function AboutUsPage() {
	return (
		<>
			<ScrollToTop />
			<section>
				<HeaderStaticPages title="About Us" />
				<div className="static-page">
					<Container>
						<p>
							Mixora is a fictional eCommerce platform built for educational and portfolio purposes. It demonstrates how to build a modern online store using React and SCSS, with
							client-side routing and integration with external APIs.
						</p>

						<p>
							This project was developed to practice core front-end concepts such as dynamic rendering, responsive design, component-based architecture, and API consumption using The
							Platzi Fake Store API.
						</p>

						<p>Mixora is not a real store and does not process any transactions or collect user data. All content is for demonstration only.</p>
					</Container>
				</div>
			</section>
		</>
	);
}

export default AboutUsPage;
