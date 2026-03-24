import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import useScrollToTop from '../hooks/useScrollToTop';
import '../scss/components/_static-page.scss';

function PrivacyCookiesPage() {
	useScrollToTop();
	return (
		<>
			<section>
				<HeaderStaticPages title="Privacy & Cookies" />
				<div className="static-page">
					<Container>
						<p>At Mixora, your privacy matters — even though this is a fictional platform created solely for educational and demonstration purposes.</p>
						<h2 className="static-page__subtitle">No Personal Data Collected</h2>
						<p>
							Mixora does not collect, process, or store any personal information. There are no forms, logins, or data collection features on this platform. All interactions (e.g.,
							adding products to the cart or searching) are handled locally in your browser and do not involve any backend or external data storage.
						</p>
						<h2 className="static-page__subtitle">Cookies</h2>
						<p>Mixora does not use cookies or tracking technologies. No session data, preferences, or user identifiers are stored via cookies or similar technologies.</p>
						<h2 className="static-page__subtitle">Third-Party APIs</h2>
						<p>
							Product data is fetched from the Platzi Fake Store API , a public API used for educational purposes. Mixora does not control or own the data provided by this API. No
							user-specific information is sent to or received from third parties.
						</p>
						<h2 className="static-page__subtitle">Local Storage</h2>
						<p>
							Mixora uses the browser's localStorage to save information related to the user experience, such as products added to the shopping cart. None of this information is sent to
							external servers or used for tracking purposes. All stored data remains exclusively on the user's device and can be deleted at any time by clearing the browser cache.
						</p>

						<h2 className="static-page__subtitle">Analytics</h2>
						<p>There is no analytics or tracking implemented in this project. User activity is not monitored, recorded, or analyzed.</p>
						<h2 className="static-page__subtitle">Security</h2>
						<p>
							While Mixora is a front-end-only educational project and does not involve real user data, all code follows best practices for security, performance, and structure — as a
							learning exercise.
						</p>
						<h2 className="static-page__subtitle">Changes to This Policy</h2>
						<p>
							Since Mixora is not a real platform, changes to this policy are unlikely. However, any updates will be reflected here if the project evolves for educational improvements.
						</p>
					</Container>
				</div>
			</section>
		</>
	);
}

export default PrivacyCookiesPage;
