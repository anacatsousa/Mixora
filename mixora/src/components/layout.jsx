import { Outlet } from 'react-router';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';

function Layout() {
	return (
		<>
			<header>
				<NavBar />
			</header>
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
