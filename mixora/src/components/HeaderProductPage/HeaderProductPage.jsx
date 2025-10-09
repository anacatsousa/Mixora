import { ChevronLeft, ChevronRight } from 'lucide-react';
import useProducts from '../../hooks/useProducts';
import BackButton from '../BackButton/BackButton';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';
import './_headerProductPage.scss';
import noPhoto from '@/assets/no_photo.png';
import { useEffect, useRef, useState } from 'react';

function HeaderProductPage({ categorySlug, productSlug }) {
	const { products, isLoading } = useProducts();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const scrollRef = useRef(null);

	// Update window width on resize

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Scroll functionality

	const scroll = (direction) => {
		const container = scrollRef.current;
		if (container) {
			const card = container.querySelector(':scope > *');
			const scrollAmount = card ? card.offsetWidth + 5 : 370;

			container.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	// Find the product based on categorySlug and productSlug

	const product = products.find((product) => product.category.slug === categorySlug && product.slug === productSlug);

	// Validate image URLs

	function isValidImg(src) {
		if (typeof src !== 'string') return false;

		const trimmed = src.trim().toLowerCase();
		const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

		return trimmed !== '' && trimmed !== 'undefined' && validExtensions.some((ext) => trimmed.endsWith(ext));
	}

	if (isLoading === true) return <Loading />;
	if (!products || products.length === 0) return <span> no product</span>;

	return (
		<>
			<section className="header-products" style={{ position: 'relative' }}>
				<BackButton absolute={true} />
				{(product.images.length > 3 || windowWidth <= 768) && (
					<div className="header-products__controls">
						<Button onClick={() => scroll('left')} variant={'slider'}>
							<ChevronLeft />
						</Button>
						<Button onClick={() => scroll('right')} variant={'slider'}>
							<ChevronRight />
						</Button>
					</div>
				)}
				<div
					ref={scrollRef}
					className={`header-products__imgs ${product.images.length === 2 ? 'header-products__imgs--two' : product.images.length === 1 ? 'header-products__imgs--one' : ''}`}
				>
					{product.images.map((img) => (
						<img key={img} src={isValidImg(img) ? img : noPhoto} alt={product.slug} className="header-products__images" />
					))}
				</div>
			</section>
		</>
	);
}

export default HeaderProductPage;
