import useCategories from '../hooks/useCategories';
import useProducts from '../hooks/useProducts';

function HomePage() {
	const { products } = useProducts();
	const { categories } = useCategories();

	return (
		<>
			<h1>Home Page</h1>;
		</>
	);
}

export default HomePage;
