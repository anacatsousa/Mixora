import './_footer.scss';
import logo from '../../assets/MIXORA-white.svg';
import Container from '../Container/Container';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faTiktok, faPaypal, faGooglePay, faApplePay, faAmazonPay, faCcMastercard, faCcVisa } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<section className="footer">
			<Container>
				<div className="footer__top">
					<div className="footer__left">
						<Link to={'/'}>
							<img src={logo} alt="logo" className="footer__logo" />
						</Link>
						<ul className="footer__socialmedia">
							<li>
								<FontAwesomeIcon icon={faTiktok} />
							</li>
							<li>
								<FontAwesomeIcon icon={faInstagram} />
							</li>
							<li>
								<FontAwesomeIcon icon={faFacebookF} />
							</li>
							<li>
								<FontAwesomeIcon icon={faYoutube} />
							</li>
						</ul>
					</div>
					<div className="footer__right">
						<div className="footer__menu">
							<h3 className="footer__title">Support</h3>
							<ul>
								<li>
									<Link to={'/contact'} className="footer__links">
										Contact Us
									</Link>
								</li>

								<li>
									<Link to={'/delivery&returns'} className="footer__links">
										Delivery & Returns
									</Link>
								</li>
								<li>
									<Link to={'/faq'} className="footer__links">
										FAQ
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__menu">
							<h3 className="footer__title">About</h3>
							<ul>
								<li>
									<Link to={'/about'} className="footer__links">
										About Us
									</Link>
								</li>
								<li>
									<Link to={'/stores'} className="footer__links">
										Stores
									</Link>
								</li>
								<li>
									<Link to={'/careers'} className="footer__links">
										Careers
									</Link>
								</li>
							</ul>
						</div>
						<div className="footer__menu">
							<h3 className="footer__title">Payment Methods</h3>
							<ul className="footer__payment">
								<li>
									<FontAwesomeIcon icon={faPaypal} />
								</li>

								<li>
									<FontAwesomeIcon icon={faGooglePay} />
								</li>
								<li>
									<FontAwesomeIcon icon={faApplePay} />
								</li>
								<li>
									<FontAwesomeIcon icon={faAmazonPay} />
								</li>
								<li>
									<FontAwesomeIcon icon={faCcMastercard} />
								</li>
								<li>
									<FontAwesomeIcon icon={faCcVisa} />
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<div className="footer__flex">
						<Link to={'/terms&conditions'}>Terms & Conditions</Link>
						<Link to={'/privacy&cookies'}>Privacy & Cookies</Link>
					</div>
					<p>&copy; {new Date().getFullYear()} Mixora</p>
				</div>
			</Container>
		</section>
	);
}

export default Footer;
