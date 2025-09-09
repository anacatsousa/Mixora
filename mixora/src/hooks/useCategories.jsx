import { useEffect, useState } from 'react';

function useCategories() {
	const [isLoading, setIsLoading] = useState(false);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			setIsLoading(true);
			try {
				const response = await fetch('https://api.escuelajs.co/api/v1/categories');

				const newCaterories = await response.json();

				console.log('newCaterories', newCaterories);

				setCategories(newCaterories);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchCategories();
	}, []);

	if (isLoading === true) return <span>LOADING...</span>;

	return { categories, isLoading };
}

export default useCategories;
