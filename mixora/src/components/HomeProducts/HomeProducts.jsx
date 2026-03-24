import { Link } from 'react-router';
import useProducts from '../../hooks/useProducts';
import './_homeproducts.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import { useRef } from 'react';
import Button from '../Button/Button';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Loading from '../Loading/Loading';

function HomeProducts() {
	const { products, isLoading } = useProducts();
	const scrollRef = useRef(null);

	const oneProductPerCategory = Object.values(
		products.reduce((acc, product) => {
			if (!acc[product.category.name]) {
				acc[product.category.name] = product;
			}
			return acc;
		}, {}),
	);

	const scroll = (direction) => {
		const container = scrollRef.current;
		if (container) {
			const card = container.querySelector(':scope > *');
			const scrollAmount = card ? card.offsetWidth + 10 : 370;

			container.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	if (isLoading === true) return <Loading />;

	return (
		<section className="wrapper">
			<Container>
				<span className="wrapper__title">[ NEW IN ]</span>
				<div className="wrapper__controls">
					<Button onClick={() => scroll('left')} variant={'slider'}>
						<ChevronLeft aria-label="Arrow left icon" />
					</Button>
					<Button onClick={() => scroll('right')} variant={'slider'}>
						<ChevronRight aria-label="Arrow rigth icon" />
					</Button>
				</div>
				<div className="wrapper__products" ref={scrollRef}>
					{oneProductPerCategory.map((product) => (
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
