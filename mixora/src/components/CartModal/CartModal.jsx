import { useCart } from '@/hooks/useCart';
import Button from '../Button/Button';
import Container from '../Container/Container';
import './cartModal.scss';
import { X } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';

function CartModal({ isOpen, onClose }) {
	const { cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice, deleteProductFromCart } = useCart();
	const [closing, setClosing] = useState(false);
	const [visibility, setVisibility] = useState(false);

	useEffect(() => {
		if (isOpen) {
			// Open modal
			setVisibility(true);
			setClosing(false);
			document.body.style.overflow = 'hidden';
		} else if (visibility) {
			// Init close animation
			setClosing(true);
			// wait 300ms (animation time) to close modal
			const timeout = setTimeout(() => {
				setVisibility(false);
				setClosing(false);
				document.body.style.overflow = 'auto';
			}, 500);

			return () => clearTimeout(timeout);
		}
	}, [isOpen, visibility]);

	if (!visibility) return null;

	const total = getCartTotalPrice(cartItems || []);

	return (
		<>
			<section className="cart">
				<div className="cart__overlay">
					<div className={`cart__modal ${closing ? 'cart__modal--closed' : 'cart__modal--open'}`}>
						<Container>
							<div className="cart__modal-section">
								<div className="cart__header">
									<h3 className="cart__title">Bag</h3>
									<Button onClick={onClose}>
										<X />
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
															<img src={item.images[0]} alt={item.slug} className="cart__img" />
															<div className="cart__info">
																<div>
																	<p>{item.category.name}</p>
																	<p className="cart__product-name">{item.title}</p>
																</div>
																<div className="cart__quantity-section">
																	{item.quantity === 1 ? (
																		<Button disabled={true} variant="cart">
																			<Minus />
																		</Button>
																	) : (
																		<Button hasPrice={false} onClick={() => removeProductFromCart(item)} variant="cart">
																			<Minus />
																		</Button>
																	)}
																	<p>{item.quantity}</p>
																	<Button hasPrice={false} onClick={() => addProductToCart(item)} variant="cart">
																		<Plus />
																	</Button>
																</div>
															</div>
														</div>
														<div className="cart__small-section">
															<p>{item.price} €</p>
															<Button hasPrice={false} onClick={() => deleteProductFromCart(item)} variant="cart">
																<Trash2 />
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
									<Button text={cartItems.length === 0 ? 'Continue Shopping' : 'Checkout'} hasPrice={false} />
								</div>
							</div>
						</Container>
					</div>
				</div>
			</section>
		</>
	);
}

export default CartModal;
