import { Outlet } from 'react-router';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import { useState } from 'react';
import CartModal from './CartModal/CartModal';

function Layout() {
	const [isCartOpen, setIsCartOpen] = useState(false);

	return (
		<>
			<header>
				<NavBar onCartClick={() => setIsCartOpen(true)} />
			</header>
			<main>
				<Outlet />
				<CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			</main>
			<footer>
				<Newsletter />
				<Footer />
			</footer>
		</>
	);
}

export default Layout;
