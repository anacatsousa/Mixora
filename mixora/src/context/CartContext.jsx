import { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState(() => {
		const saved = localStorage.getItem('cartItems');
		return saved ? JSON.parse(saved) : [];
	});

	// Save

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

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

	// Delete products

	const deleteProductFromCart = (product) => {
		setCartItems((prevItems) => {
			return prevItems.filter((item) => item.id !== product.id);
		});
	};

	// Total

	const getCartTotalPrice = (items) => {
		return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};

	// save

	return <CartContext.Provider value={{ cartItems, addProductToCart, removeProductFromCart, getCartTotalPrice, deleteProductFromCart }}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
