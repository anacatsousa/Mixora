import { Link, useNavigate } from 'react-router';
import './_form.scss';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { useState } from 'react';

function Form({ login = false, register = false, title, onSubmit, apiError }) {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		if (errors.api) {
			setErrors({ ...errors, api: null });
		}
	};

	const validate = () => {
		let newErrors = {};

		if (register && !formData.name.trim()) {
			newErrors.name = 'Mandatory field';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Mandatory field';
		} else if (!formData.email.includes('@')) {
			newErrors.email = 'Invalid email';
		}

		if (!formData.password.trim()) {
			newErrors.password = 'Mandatory field';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validate()) return;

		if (onSubmit) {
			onSubmit(formData);
			return;
		}

		navigate('/account');
	};

	useState(() => {
		if (apiError) {
			setErrors({ ...errors, api: apiError });
		}
	}, [apiError]);

	return (
		<div className="form">
			<Container>
				<div className="form__container">
					<h1 className="form__title">{title}</h1>
					<form className="form__section" onSubmit={handleSubmit} noValidate>
						{register && (
							<div className="form__group">
								<label htmlFor="name" className="form__label">
									Name
								</label>
								<input type="text" id="name" name="name" placeholder="Joana" className="form__input" value={formData.name} onChange={handleChange} required />
								<span className={`static-page__error-message ${errors.name ? 'invalid' : ''}`}>{errors.name}</span>
							</div>
						)}

						<div className="form__group">
							<label htmlFor="emaillogin" className="form__label">
								Email
							</label>
							<input type="email" id="emaillogin" name="email" placeholder="exemple@email.com" className="form__input" value={formData.email} onChange={handleChange} required />
							<span className={`static-page__error-message ${errors.email ? 'invalid' : ''}`}>{errors.email}</span>
						</div>

						<div className="form__group">
							<label htmlFor="password" className="form__label">
								Password
							</label>
							<input type="password" id="password" name="password" placeholder="********" className="form__input" value={formData.password} onChange={handleChange} required />
							<span className={`static-page__error-message ${errors.password ? 'invalid' : ''}`}>{errors.password}</span>
						</div>

						{(errors.api || apiError) && (
							<div className="form__error-general">
								<span className="static-page__error-message invalid">{errors.api || apiError}</span>
							</div>
						)}

						<Button text={title} className="form__btn" />

						{login && (
							<p className="form__text">
								Don't have an account?{' '}
								<Link to="/register" className="form__link">
									Register
								</Link>
							</p>
						)}

						{register && (
							<p className="form__text">
								Already have an account?{' '}
								<Link to="/login" className="form__link">
									Login
								</Link>
							</p>
						)}
					</form>
				</div>
			</Container>
		</div>
	);
}

export default Form;
