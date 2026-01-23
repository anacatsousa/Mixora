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
		setLoading(true);

		try {
			const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (!response.ok) {
				if (response.status === 401) {
					throw new Error('Email or password incorrect. Please try again.');
				}
				throw new Error('Login failed. Please try again later.');
			}

			if (data.access_token) {
				localStorage.setItem('token', data.access_token);
				await fetchProfile(data.access_token);
			} else {
				setLoading(false);
				throw new Error('Authentication error. Please contact support.');
			}

			return data;
		} catch (error) {
			setLoading(false);
			throw error;
		}
	};

	const fetchProfile = async (token) => {
		try {
			const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
				headers: { Authorization: `Bearer ${token}` },
			});

			const profile = await response.json();

			if (profile?.name === 'EntityNotFoundError' || profile?.statusCode) {
				console.warn('User do not exist or token invalid. Cleaning token...');
				localStorage.removeItem('token');
				setUser(null);
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
