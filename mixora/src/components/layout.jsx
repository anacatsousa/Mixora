import { Outlet } from 'react-router';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import { useState } from 'react';
import CartModal from './CartModal/CartModal';
import SearchModal from './SearchModal/SearchModal';

function Layout() {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<>
			<header>
				<NavBar onCartClick={() => setIsCartOpen(true)} onSearchClick={() => setIsSearchOpen(true)} />
			</header>
			<main>
				<Outlet />
				<CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
				<SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
			</main>
			<footer>
				<Newsletter />
				<Footer />
			</footer>
		</>
	);
}

export default Layout;
