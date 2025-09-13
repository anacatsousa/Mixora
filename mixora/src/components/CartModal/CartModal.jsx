import { useCart } from '@/hooks/useCart';
import Button from '../Button/Button';
import Container from '../Container/Container';
import './cartModal.scss';

function CartModal({ isOpen, onClose }) {
	const { cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice } = useCart();

	if (!isOpen) return null;

	const total = getCartTotalPrice(cartItems || []);

	if (!cartItems || cartItems.length === 0) {
		return <p>O carrinho está vazio.</p>;
	}

	return (
		<>
			<section style={{ height: '100vh', marginTop: '100px' }}>
				<div className="cart-modal-overlay">
					<div className="cart-modal">
						<Container>
							<Button text="Fechar" onClick={onClose} hasPrice={false} />
							{cartItems.length === 0 ? (
								<p>O carrinho está vazio.</p>
							) : (
								<ul>
									{cartItems.map((item) => (
										<li key={item.id}>
											<h2>{item.title}</h2>
											<h3>{item.quantity}</h3>
											<Button text="+" hasPrice={false} onClick={() => addProductToCart(item)} />
											<Button text="-" hasPrice={false} onClick={() => removeProductFromCart(item)} />
										</li>
									))}
									<h3>Subtotal: {total.toFixed(2)}</h3>
									<Button text="Checkout" hasPrice={false} />
								</ul>
							)}
						</Container>
					</div>
				</div>
			</section>
		</>
	);
}

export default CartModal;
