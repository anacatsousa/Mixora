import useProducts from '../../hooks/useProducts';
import BackButton from '../BackButton/BackButton';
import './_headerProductPage.scss';

function HeaderProductPage({ categorySlug, productSlug }) {
	const { products, isLoading } = useProducts();

	const product = products.find((product) => product.category.slug === categorySlug && product.slug === productSlug);

	if (isLoading === true) return <span>LOADING...</span>;
	if (!products || products.length === 0) return <span> no product</span>;

	return (
		<section className="header-products">
			<BackButton absolute={true} />
			{product.images.map((img) => (
				<img src={img} alt={product.slug} className="header-products__images" />
			))}
		</section>
	);
}

export default HeaderProductPage;
