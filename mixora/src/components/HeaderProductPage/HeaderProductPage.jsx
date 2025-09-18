import useProducts from '../../hooks/useProducts';
import BackButton from '../BackButton/BackButton';
import Loading from '../Loading/Loading';
import './_headerProductPage.scss';
import noPhoto from '@/assets/no_photo.png';

function HeaderProductPage({ categorySlug, productSlug }) {
	const { products, isLoading } = useProducts();

	const product = products.find((product) => product.category.slug === categorySlug && product.slug === productSlug);

	function isValidImg(src) {
		if (typeof src !== 'string') return false;

		const trimmed = src.trim().toLowerCase();
		const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

		return trimmed !== '' && trimmed !== 'undefined' && validExtensions.some((ext) => trimmed.endsWith(ext));
	}

	if (isLoading === true) return <Loading />;
	if (!products || products.length === 0) return <span> no product</span>;

	return (
		//<section className="header-products">
		<section className={`header-products ${product.images.length === 2 ? 'header-products--two' : product.images.length === 1 ? 'header-products--one' : ''}`}>
			<BackButton absolute={true} />
			{product.images.map((img) => (
				<img
					key={img}
					src={isValidImg(img) ? img : noPhoto}
					alt={product.slug}
					className="header-products__images"
					//className={`header-products__images ${product.images.length === 2 ? 'header-products__images--two' : product.images.length === 1 ? 'header-products__images--one' : ''}`}
				/>
			))}
		</section>
	);
}

export default HeaderProductPage;
