import { Link } from 'react-router';
import useProducts from '../../hooks/useProducts';
import './_homeproducts.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';

function HomeProducts() {
	const { products, isLoading } = useProducts();

	if (isLoading === true) return <span>LOADING...</span>;
	return (
		<section className="wrapper">
			<Container>
				<span className="wrapper__title">[ NEW IN ]</span>
				<div className="wrapper__products">
					{Object.values(
						products.reduce((acc, product) => {
							if (!acc[product.category.name]) {
								acc[product.category.name] = product;
							}
							return acc;
						}, {})
					).map((product) => (
						<Link to={`category/${product.category.slug}/${product.slug}`} key={product.id}>
							<Card img={product.images[0]} title={product.title} price={product.price} category={product.category.name} />
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}
export default HomeProducts;
