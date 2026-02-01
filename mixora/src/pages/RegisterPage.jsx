import { useNavigate } from 'react-router';
import Form from '../components/Form/Form';
import { useAuthContext } from '../hooks/useAuthContext';
import useUser from '../hooks/useUser';
import { useState } from 'react';
import useScrollToTop from '../hooks/useScrollToTop';

function RegisterPage() {
	useScrollToTop();
	const { login } = useAuthContext();
	const { users } = useUser();
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleSubmit = async (formData) => {
		try {
			setError(null);

			//verify email existence
			const emailExists = users.some((user) => user.email === formData.email);

			if (emailExists) {
				throw new Error('This email is already registered. Please login or use a different email.');
			}

			// register user
			const registerResponse = await fetch('https://api.escuelajs.co/api/v1/users/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					password: formData.password,
					avatar: 'https://i.pravatar.cc/150',
				}),
			});

			const registerData = await registerResponse.json();

			if (!registerResponse.ok) {
				if (registerResponse.status === 400) {
					const errorMsg = registerData.message?.[0] || registerData.message || '';

					if (errorMsg.includes('email') || errorMsg.includes('already') || errorMsg.includes('exist')) {
						throw new Error('This email is already registered. Please login or use a different email.');
					}

					throw new Error(errorMsg || 'Invalid registration data. Please check your information.');
				}

				if (registerResponse.status === 500) {
					throw new Error('Server error. Please try again later.');
				}

				throw new Error(registerData.message || 'Registration failed. Please try again.');
			}

			// login user after registration and navigate to account page
			const loginResult = await login({
				email: formData.email,
				password: formData.password,
			});

			if (loginResult.access_token) {
				navigate('/account');
			}
		} catch (err) {
			console.error('Erro no registo:', err);
			setError(err.message || 'Registration failed. Please try again.');
		}
	};

	return <Form title="Register" register={true} onSubmit={handleSubmit} apiError={error} />;
}

export default RegisterPage;
