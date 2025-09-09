import { useEffect, useState } from 'react';

function useProducts() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`https://api.escuelajs.co/api/v1/products`);

				const newProducts = await response.json();

				console.log('newProducts', newProducts);

				setProducts(newProducts);
			} catch (error) {
				console.log('error', error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchProducts();
	}, []);

	return { products, isLoading };
}

export default useProducts;
