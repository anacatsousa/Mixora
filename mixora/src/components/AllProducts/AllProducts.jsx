import Loading from '@/components/Loading/Loading';
import useProducts from '@/hooks/useProducts';
import { Link } from 'react-router';
import Card from '../Card/Card';
import Container from '../Container/Container';

function AllProducts() {
	const { products, isLoading } = useProducts();

	if (isLoading === true) return <Loading />;
	return (
		<>
			<Container>
				<div className="wrapper-categories__products-grid">
					{products.map((product) => (
						<Link to={`/category/${product.category.slug}/${product.slug}`} key={product.id}>
							<Card img={product.images[0]} title={product.title} price={product.price} category={product.category.name} showCategory={false} />
						</Link>
					))}
				</div>
			</Container>
		</>
	);
}

export default AllProducts;
