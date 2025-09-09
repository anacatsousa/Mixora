import Container from '../Container/Container';
import './_newsletter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowPointer } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Newsletter() {
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email.includes('@')) {
			setErrorMessage('This is not a valid email!');
		} else {
			setErrorMessage('');

			alert('Email subscrito:', email);

			setEmail('');
		}
	};

	return (
		<section className="newsletter">
			<Container>
				<div className="newsletter__content">
					<div className="newsletter__left">
						<h2 className="newsletter__title">Join Our Community</h2>
						<p className="newsletter__text">Get the latest news &amp; offers.</p>
					</div>
					<div className="newsletter__right">
						<form onSubmit={handleSubmit} className="newsletter__form">
							<div className="newsletter__input-group">
								<div className="newsletter__input-wrapper">
									<input
										type="text"
										name="email"
										placeholder="Email Address"
										className="newsletter__input"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										onClick={() => setErrorMessage('')}
									/>
									<button type="submit" aria-label="submit button" className="newsletter__button">
										<FontAwesomeIcon icon={faArrowPointer} />
									</button>
								</div>
								<span className={`newsletter__error-message ${errorMessage ? 'newsletter__invalid' : ''}`}>{errorMessage}</span>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Newsletter;
