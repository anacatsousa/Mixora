import './_infoProduct.scss';
import useProducts from '../../hooks/useProducts';
import Container from '../Container/Container';
import Button from '../Button/Button';
import { Link } from 'react-router';
import { useCart } from '../../hooks/useCart';

function InfoProduct({ categorySlug, productSlug }) {
	const { products, isLoading } = useProducts();
	const { addProductToCart } = useCart();

	const product = products.find((product) => product.category.slug === categorySlug && product.slug === productSlug);
	if (!products || products.length === 0) return <span> no product</span>;

	if (isLoading === true) return <span>LOADING...</span>;

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
							<Button text="Add to Bag" price={product.price} onClick={() => addProductToCart(product)} />
						</div>
					</div>
					<div className="info-product__grid">
						<img src={product.images[0]} alt={product.slug} className="info-product__img" />
						<div className="info-product__flex--space">
							<p className="info-product__description">{product.description}</p>
							<ul className="info-product__container-links">
								<li>
									<Link to={'/'} className="info-product__links">
										Product Dimensions
									</Link>
								</li>
								<li>
									<Link to={'/'} className="info-product__links">
										Composition, Care Instructions, and Origin
									</Link>
								</li>
								<li>
									<Link to={'/'} className="info-product__links">
										Check Store Availability
									</Link>
								</li>
								<li>
									<Link to={'/'} className="info-product__links">
										Shipping, Exchanges, and Returns
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default InfoProduct;
