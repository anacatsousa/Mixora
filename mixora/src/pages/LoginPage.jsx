import { useNavigate } from 'react-router';
import Form from '../components/Form/Form';
import { useAuthContext } from '../hooks/useAuthContext';

function LoginPage() {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const form = new FormData(event.currentTarget);

		const result = await login({
			email: form.get('email'),
			password: form.get('password'),
			avatar: 'https://i.pravatar.cc/150',
		});

		if (result.access_token) navigate('/account');
	};

	return <Form title="Login" login={true} onSubmit={handleSubmit} />;
}

export default LoginPage;
