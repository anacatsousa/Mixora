import { Link } from 'react-router';
import useProducts from '../../hooks/useProducts';
import Card from '../Card/Card';
import Container from '../Container/Container';
import './_categoryProducts.scss';
import Loading from '../Loading/Loading';
import HeaderCategoryProducts from '../HeaderCategoryproducts/HeaderCategoryproducts';

function CategoryProducts({ category }) {
	const { products, isLoading } = useProducts();

	if (isLoading === true) return <Loading />;

	return (
		<section className="wrapper-categories">
			<HeaderCategoryProducts title={category} />
			<Container>
				<div className="wrapper-categories__products-grid">
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
