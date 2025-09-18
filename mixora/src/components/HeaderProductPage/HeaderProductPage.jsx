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
		<section className="header-products">
			<BackButton absolute={true} />
			{product.images.map((img) => (
				<img
					src={isValidImg(img) ? img : noPhoto}
					alt={product.slug}
					className={`header-products__images ${img === 2 ? 'header-products__images--two' : img === 1 ? 'header-products__images--one' : ''}`}
				/> //className="header-products__images"
			))}
		</section>
	);
}

export default HeaderProductPage;
