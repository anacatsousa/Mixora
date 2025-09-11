import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	// Add products

	const addProductToCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);

			if (existingItem) {
				return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	// Remove products

	const removeProductFromCart = (product) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((item) => item.id === product.id);

			if (existingItem) {
				return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)).filter((item) => item.quantity > 0);
			} else {
				return [...prevItems, { ...product, quantity: 1 }];
			}
		});
	};

	// Total

	const getCartTotalPrice = (items) => {
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};

	return <CartContext.Provider value={{ cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice }}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
