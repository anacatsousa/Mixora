import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			setLoading(false);
			return;
		}
		fetchProfile(token);
	}, []);

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

	const fetchProfile = async (token) => {
		try {
			console.log('TOKEN:', token);

			const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
				headers: { Authorization: `Bearer ${token}` },
			});

			const profile = await response.json();
			console.log('Profile:', profile);

			if (profile?.name === 'EntityNotFoundError' || profile?.statusCode) {
				console.warn('User do not exist or token invalid. Cleaning token...');
				localStorage.removeItem('token');
				setUser(null);
				setLoading(false);
				return;
			}

			setUser(profile);
		} catch (err) {
			console.error('Error fetching profile:', err);
			localStorage.removeItem('token');
			setUser(null);
		} finally {
			setLoading(false);
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
	};

	return <AuthContext.Provider value={{ user, loading, login, logout }}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
