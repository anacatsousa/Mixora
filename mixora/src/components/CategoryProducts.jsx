import { Link } from 'react-router';
import useProducts from '@/hooks/useProducts';
import Container from './Container/Container';
import '../scss/components/_productsGrid.scss';
import Loading from './Loading/Loading';
import Card from './Card/Card';

function CategoryProducts({ category }) {
	const { products, isLoading } = useProducts();

	if (isLoading === true) return <Loading />;

	return (
		<section className="wrapper">
			<Container>
				<div className="wrapper__products-grid">
					{products
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
