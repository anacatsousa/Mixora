import { useState } from 'react';

function useRegister() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const registerUser = async ({ name, email, password }) => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name,
					email,
					password,
					avatar: 'https://i.pravatar.cc/150',
				}),
			});

			const data = await response.json();
			return data;
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { registerUser, loading, error };
}

export default useRegister;
