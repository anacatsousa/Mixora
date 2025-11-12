import { Link } from 'react-router';
import useProducts from '@/hooks/useProducts';
import Container from './Container/Container';
import '../scss/components/_productsGrid.scss';
import Card from './Card/Card';

function CategoryProducts({ category, appliedFilters }) {
	const { products, isLoading } = useProducts();
	const filteredProducts = products
		.filter((p) => p.category.slug === category)
		.filter((p) => p.price <= appliedFilters.priceMax) // só um limite máximo
		.sort((a, b) => (appliedFilters.sort === 'asc' ? a.price - b.price : b.price - a.price));

	// const filteredProducts = products
	// 	.filter((p) => p.category.slug === category)
	// 	.filter((p) => p.price >= appliedFilters.priceMin && p.price <= appliedFilters.priceMax)
	// 	.sort((a, b) => (appliedFilters.sort === 'asc' ? a.price - b.price : b.price - a.price));

	return (
		<section className="wrapper">
			<Container>
				<div className="wrapper__products-grid">
					{isLoading
						? Array.from({ length: 8 }).map((_, i) => <Card key={i} isLoading={true} />)
						: filteredProducts
								.filter((product) => product.category.slug === category)
								.map((product) => (
									<Link to={`/category/${category}/${product.slug}`} key={product.id}>
										<Card img={product.images[0]} title={product.title} price={product.price} category={product.category.name} showCategory={false} />
									</Link>
								))}
				</div>
			</Container>
		</section>
	);
}
export default CategoryProducts;
