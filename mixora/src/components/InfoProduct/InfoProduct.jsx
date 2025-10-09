import './_infoProduct.scss';
import useProducts from '@/hooks/useProducts';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { Link } from 'react-router';
import { useCart } from '@/hooks/useCart';
import Loading from '../Loading/Loading';
import noPhoto from '@/assets/no_photo.png';
import { useState } from 'react';

function InfoProduct({ categorySlug, productSlug }) {
	const { products, isLoading } = useProducts();
	const { addProductToCart } = useCart();
	const [activeSection, setActiveSection] = useState(null);

	// Section details for product information

	const section = [
		{ title: 'Product Dimensions', content: 'Width: X cm, Height: X cm, Depth: X cm.' },
		{ title: 'Composition, Care Instructions, and Origin', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. ' },
		{ title: 'Check Store Availability', content: 'Available in Lisbon, Porto, and Braga stores.' },
		{ title: 'Shipping, Exchanges, and Returns', content: 'Free shipping on orders over €50. Returns accepted within 30 days.' },
	];

	const toggleSection = (index) => {
		setActiveSection(activeSection === index ? null : index);
	};

	// Validate image URL

	function isValidImg(src) {
		if (typeof src !== 'string') return false;

		const trimmed = src.trim().toLowerCase();
		const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

		return trimmed !== '' && trimmed !== 'undefined' && validExtensions.some((ext) => trimmed.endsWith(ext));
	}

	// Find the product based on categorySlug and productSlug

	const product = products.find((product) => product.category.slug === categorySlug && product.slug === productSlug);
	if (!products || products.length === 0) return <Loading />;

	if (isLoading === true) return <Loading />;

	return (
		<section className="info-product">
			<Container>
				<div>
					<div className="info-product__grid">
						<div className="info-product__flex">
							<span>{product.category.name}</span>
							<h2 className="info-product__title"> {product.title}</h2>
						</div>
						<div className="info-product__flex">
							<Button text="Add to Bag" hasPrice={true} price={product.price} onClick={() => addProductToCart(product)} />
						</div>
					</div>
					<div className="info-product__grid">
						<img src={isValidImg(product.images[0]) ? product.images[0] : noPhoto} alt={product.slug} className="info-product__img" />
						<div className="info-product__flex--space">
							<p className="info-product__description">{product.description}</p>
							<ul className="info-product__container-links">
								{section.map((section, index) => (
									<li key={index}>
										<Button className={`info-product__links ${activeSection === index ? 'info-product__links--active' : ''}`} variant="link" onClick={() => toggleSection(index)}>
											{section.title}
										</Button>

										{activeSection === index && <p className="info-product__section-content">{section.content}</p>}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default InfoProduct;
