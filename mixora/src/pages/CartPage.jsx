import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import { useCart } from '../hooks/useCart';

function CartPage() {
	const { cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice } = useCart();

	const total = getCartTotalPrice(cartItems || []);

	if (!cartItems || cartItems.length === 0) {
		return <p>O carrinho está vazio.</p>;
	}

	return (
		<>
			<section style={{ height: '100vh', marginTop: '100px' }}>
				<Container>
					<ul>
						{cartItems.map((item) => (
							<>
								<h2>{item.title}</h2>
								<h3>{item.quantity}</h3>

								<Button text="+" hasPrice={false} onClick={() => addProductToCart(item)} />
								<Button text="-" hasPrice={false} onClick={() => removeProductFromCart(item)} />
							</>
						))}

						<h3>Subtotal: {total} </h3>

						<Button text="Checkout" hasPrice={false} />
						<Button text="See More" hasPrice={false} />
					</ul>
				</Container>
			</section>
		</>
	);
}

export default CartPage;
