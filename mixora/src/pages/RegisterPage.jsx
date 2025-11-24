import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';
import Form from '../components/Form/Form';

function RegisterPage() {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = new FormData(event.target);

		const newUser = {
			name: form.get('name'),
			email: form.get('email'),
			password: form.get('password'),
			avatar: 'https://i.pravatar.cc/150',
		};

		// ---- REGISTRO ----
		const createdUser = await fetch('https://api.escuelajs.co/api/v1/users', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		}).then((res) => res.json());

		console.log('Usuário criado:', createdUser);

		// ---- LOGIN AUTOMÁTICO ----
		const loginResult = await login({
			email: newUser.email,
			password: newUser.password,
		});

		if (loginResult?.access_token) {
			navigate('/account'); // redireciona direto
		} else {
			alert('Não foi possível logar automaticamente. Faça login.');
			navigate('/login');
		}
	};

	return <Form title="Register" register={true} onSubmit={handleSubmit} />;
}

export default RegisterPage;
