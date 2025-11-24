import { useState, useEffect } from 'react';

function useAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setLoading(false);
			return;
		}

		fetchProfile(token); //
	}, []);

	// ---- LOGIN ----
	const login = async ({ email, password }) => {
		const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

		const data = await response.json();
		console.log('LOGIN RESPONSE:', data);

		if (data.access_token) {
			localStorage.setItem('token', data.access_token);
			await fetchProfile(data.access_token);
		}

		return data;
	};

	// ---- BUSCAR PERFIL ----
	const fetchProfile = async (token) => {
		try {
			console.log('USANDO TOKEN:', token);

			const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
				headers: { Authorization: `Bearer ${token}` },
			});

			const profile = await response.json();
			console.log('PERFIL RECEBIDO:', profile);

			// Se o usuário não existe mais na API → limpar token
			if (profile?.name === 'EntityNotFoundError' || profile?.statusCode) {
				console.warn('Usuário não existe ou token inválido. Limpando token...');
				localStorage.removeItem('token');
				setUser(null);
				setLoading(false);
				return;
			}

			setUser(profile);
		} catch (err) {
			console.error('Erro ao buscar perfil:', err);
			localStorage.removeItem('token'); // limpeza preventiva
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	// ---- LOGOUT ----
	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	return { user, loading, login, logout };
}

export default useAuth;
