import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import useScrollToTop from '../hooks/useScrollToTop';
import '../scss/components/_static-page.scss';

function TermsConditionsPage() {
	useScrollToTop();
	return (
		<>
			<section>
				<HeaderStaticPages title="Terms & Conditions" />
				<div className="static-page">
					<Container>
						<p>Welcome to Mixora! This project is an educational demo of an e-commerce platform. By exploring and using Mixora, you agree to follow these terms.</p>
						<h3 className="static-page__subtitle">Nature of the Project</h3>
						<p>
							Mixora is a front-end demonstration project created for educational purposes only. It is not a real e-commerce platform and does not process real purchases, payments, or
							deliveries.
						</p>
						<h3 className="static-page__subtitle">Use of the Service</h3>
						<p>Mixora is provided for educational and personal learning purposes only. You are free to explore and study the project, but it should not be used for commercial purposes.</p>
						<h3 className="static-page__subtitle">Content</h3>
						<p>
							All product data is fetched from the Platzi Fake Store API, a public API designed for learning. Mixora does not own, host, or control the product information displayed. All
							content is shown only for demonstration purposes
						</p>
						<h3 className="static-page__subtitle">Disclaimer of Liability</h3>
						<p>
							Mixora is provided “as is,” without any warranties. Because the platform relies on the Platzi Fake Store API, which is a public and educational resource outside our
							control, we cannot guarantee the availability, accuracy, or completeness of the product information displayed. The platform may become unavailable or show
							incomplete/incorrect data if the external API changes or goes offline.
						</p>

						<h3 className="static-page__subtitle">Modifications</h3>
						<p>We may update these terms at any time. Continued use of Mixora after updates means you accept the revised terms.</p>
						<h3 className="static-page__subtitle">Contact</h3>
						<p>Have questions about this project? Feel free to reach out through the GitHub repository or the portfolio site of the developer.</p>
					</Container>
				</div>
			</section>
		</>
	);
}

export default TermsConditionsPage;
