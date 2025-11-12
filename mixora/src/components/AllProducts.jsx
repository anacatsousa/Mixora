import Loading from '@/components/Loading/Loading';
import useProducts from '@/hooks/useProducts';
import { Link } from 'react-router';
import Card from './Card/Card';
import Container from './Container/Container';
import '../scss/components/_productsGrid.scss';

function AllProducts({ appliedFilters }) {
	const { products, isLoading } = useProducts();
	const filteredProducts = products
		.filter((p) => p.price >= appliedFilters.priceMin && p.price <= appliedFilters.priceMax)
		.sort((a, b) => (appliedFilters.sort === 'asc' ? a.price - b.price : b.price - a.price));

	if (isLoading === true) return <Loading />;
	return (
		<>
			<section className="wrapper">
				<Container>
					<div className="wrapper__products-grid">
						{filteredProducts.map((product) => (
							<Link to={`/category/${product.category.slug}/${product.slug}`} key={product.id}>
								<Card img={product.images[0]} title={product.title} price={product.price} category={product.category.name} showCategory={false} />
							</Link>
						))}
					</div>
				</Container>
			</section>
		</>
	);
}

export default AllProducts;
