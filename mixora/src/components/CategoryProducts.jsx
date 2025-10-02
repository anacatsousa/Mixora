import { Link } from 'react-router';
import useProducts from '@/hooks/useProducts';
import Container from './Container/Container';
import '../scss/components/_productsGrid.scss';
import Card from './Card/Card';

function CategoryProducts({ category }) {
	const { products, isLoading } = useProducts();

	return (
		<section className="wrapper">
			<Container>
				<div className="wrapper__products-grid">
					{isLoading
						? Array.from({ length: 8 }).map((_, i) => <Card key={i} isLoading={true} />)
						: products
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
