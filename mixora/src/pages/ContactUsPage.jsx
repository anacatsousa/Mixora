import { useNavigate } from 'react-router';
import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import '../scss/components/_static-page.scss';
import { useState } from 'react';
import Button from '../components/Button/Button';
import useScrollToTop from '../hooks/useScrollToTop';

function ContactUsPage() {
	useScrollToTop();
	const [isValid, setIsValid] = useState({
		firstName: { value: '', valid: true, errorMessage: '' },
		lastName: { value: '', valid: true, errorMessage: '' },
		email: { value: '', valid: true, errorMessage: '' },
		message: { value: '', valid: true, errorMessage: '' },
	});

	let navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;

		setIsValid((prevState) => ({
			...prevState,
			[name]: {
				value,
				valid: true,
				errorMessage: '',
			},
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let formIsValid = true;
		const newState = { ...isValid };

		Object.keys(newState).forEach((fieldName) => {
			const field = newState[fieldName];
			if (field.value.trim() === '') {
				field.valid = false;
				field.errorMessage = 'Mandatory field';
				formIsValid = false;
			} else if (fieldName === 'email' && !field.value.includes('@')) {
				field.valid = false;
				field.errorMessage = 'This is not a valid email';
				formIsValid = false;
			} else {
				field.valid = true;
				field.errorMessage = '';
			}
		});

		setIsValid(newState);

		if (formIsValid) {
			navigate('/success', { state: { type: 'contact' } });
		} else {
			Object.keys(newState).forEach((fieldName) => {
				const field = newState[fieldName];
				if (field.value.trim() === '') {
					field.valid = false;
					field.errorMessage = 'Mandatory field';
					formIsValid = false;
				}
			});
		}
	};
	return (
		<section>
			<HeaderStaticPages title="Contact Us" />;
			<div className="static-page">
				<Container>
					{/* <form action="" method="post" onSubmit={handleSubmit} className="static-page__form"> */}
					<form onSubmit={handleSubmit} className="static-page__form" noValidate>
						<div className="static-page__form-group">
							<label htmlFor="first-name" className="static-page__label">
								First Name
							</label>
							<input
								type="text"
								id="first-name"
								name="firstName"
								className="static-page__input"
								placeholder="First name"
								value={isValid.firstName.value}
								onChange={handleChange}
								required
							/>
							<span className={`static-page__error-message ${isValid.firstName.valid ? '' : 'invalid'}`}>{isValid.firstName.errorMessage}</span>
						</div>
						<div className="static-page__form-group">
							<label htmlFor="last-name" className="static-page__label">
								Last Name
							</label>
							<input type="text" id="last-name" name="lastName" className="static-page__input" placeholder="Last name" value={isValid.lastName.value} onChange={handleChange} required />
							<span className={`static-page__error-message ${isValid.lastName.valid ? 'valid' : 'invalid'}`}>{isValid.lastName.errorMessage}</span>
						</div>
						<div className="static-page__form-group">
							<label htmlFor="email" className="static-page__label">
								Email
							</label>
							<input type="email" id="email" name="email" className="static-page__input" placeholder="exemple@email.com" value={isValid.email.value} onChange={handleChange} required />
							<span className={`static-page__error-message ${isValid.email.valid ? 'valid' : 'invalid'}`}>{isValid.email.errorMessage}</span>
						</div>
						<div className="static-page__form-group">
							<label htmlFor="message" className="static-page__label">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="4"
								className="static-page__textarea"
								placeholder="Write your text..."
								value={isValid.message.value}
								onChange={handleChange}
								required
							></textarea>
							<span className={`static-page__error-message ${isValid.message.valid ? 'valid' : 'invalid'}`}>{isValid.message.errorMessage}</span>
						</div>
						<Button text="Submit" className="static-page__btn" />
					</form>
				</Container>
			</div>
		</section>
	);
}

export default ContactUsPage;
