import { Outlet } from 'react-router';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';

function Layout() {
	return (
		<>
			<header></header>
			<main>
				<Outlet />
			</main>
			<footer>
				<Newsletter />
				<Footer />
			</footer>
		</>
	);
}

export default Layout;
