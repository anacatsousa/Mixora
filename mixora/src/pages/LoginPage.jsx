import { useNavigate } from 'react-router';
import Form from '../components/Form/Form';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';

function LoginPage() {
	const { login } = useAuthContext();
	const navigate = useNavigate();
	const [error, setError] = useState(null);

	const handleSubmit = async (formData) => {
		try {
			setError(null);

			const result = await login({
				email: formData.email,
				password: formData.password,
			});

			if (result.access_token) {
				navigate('/account');
			}
		} catch (err) {
			setError(err.message || 'Invalid credentials');
		}
	};

	return <Form title="Login" login={true} onSubmit={handleSubmit} apiError={error} />;
}

export default LoginPage;
