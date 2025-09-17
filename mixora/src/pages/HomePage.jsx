import Hero from '../components/Hero/Hero';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import ScrollToTop from '../components/ScrollToTop';

function HomePage() {
	return (
		<>
			<ScrollToTop />
			<Hero />
			<HomeProducts />
		</>
	);
}

export default HomePage;
