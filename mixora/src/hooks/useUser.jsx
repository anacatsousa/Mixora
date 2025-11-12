import { useEffect, useState } from 'react';

function useUser() {
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchUser = async () => {
			setIsLoading(true);

			try {
				const response = await fetch(`https://api.escuelajs.co/api/v1/users`);

				const newUsers = await response.json();

				console.log('newUsers', newUsers);

				setUsers(newUsers);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchUser();
	}, []);

	return { users, isLoading };
}

export default useUser;
