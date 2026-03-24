import { useCart } from '@/hooks/useCart';
import Button from '../Button/Button';
import Container from '../Container/Container';
import './_cartModal.scss';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import ModalBase from '../ModalBase/ModalBase';
import { Link } from 'react-router';

function CartModal({ isOpen, onClose }) {
	const { cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice, deleteProductFromCart } = useCart();

	const total = getCartTotalPrice(cartItems || []);

	return (
		<>
			<ModalBase isOpen={isOpen} variant="half" onClose={onClose}>
				<Container>
					<div className="cart">
						<div className="cart__header">
							<h2 className="cart__title">Bag</h2>
							<Button onClick={onClose}>
								<X aria-label="Close button" />
							</Button>
						</div>
						<div className={`cart__body ${cartItems.length > 0 ? 'has-items' : ''}`}>
							{cartItems.length === 0 ? (
								<p className="cart__empty-message">[ Your bag is empty ]</p>
							) : (
								<ul className="cart__products">
									{cartItems.map((item) => (
										<li key={item.id}>
											<div className="cart__product-section">
												<div className="cart__info-section">
													<Link to={`/category/${item.category.slug}/${item.slug}`} key={item.id} onClick={onClose}>
														<img src={item.images[0]} alt={item.slug} className="cart__img" />
													</Link>
													<div className="cart__info">
														<div>
															<p>{item.category.name}</p>
															<p className="cart__product-name">{item.title}</p>
														</div>
														<div className="cart__quantity-section">
															{item.quantity === 1 ? (
																<Button disabled={true} variant="cart">
																	<Minus aria-label="Decrease quantity button" />
																</Button>
															) : (
																<Button hasPrice={false} onClick={() => removeProductFromCart(item)} variant="cart">
																	<Minus aria-label="Decrease quantity button" />
																</Button>
															)}
															<p>{item.quantity}</p>
															<Button hasPrice={false} onClick={() => addProductToCart(item)} variant="cart">
																<Plus aria-label="Increase quantity button" />
															</Button>
														</div>
													</div>
												</div>
												<div className="cart__small-section">
													<p>{item.price} €</p>
													<Button hasPrice={false} onClick={() => deleteProductFromCart(item)} variant="cart">
														<Trash2 aria-label="Delect button" />
													</Button>
												</div>
											</div>
										</li>
									))}
								</ul>
							)}
						</div>
						<div className="cart__footer">
							{cartItems.length > 0 && (
								<div className="cart__total">
									<p>Subtotal:</p>
									<p>{total.toFixed(2)} €</p>
								</div>
							)}
							<Button
								text={cartItems.length === 0 ? 'Continue Shopping' : 'Checkout'}
								to={cartItems.length === 0 ? '/all' : undefined}
								onClick={onClose}
								ariallabel={cartItems.length === 0 ? 'Continue Shopping button' : 'Checkout button'}
							/>
						</div>
					</div>
				</Container>
			</ModalBase>
		</>
	);
}

export default CartModal;
