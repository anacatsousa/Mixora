import Hero from '../components/Hero/Hero';
import HomeProducts from '../components/HomeProducts/HomeProducts';
import useScrollToTop from '../hooks/useScrollToTop';
import '../scss/components/_dinamicPages.scss';

function HomePage() {
	useScrollToTop();
	return (
		<>
			<Hero />
			<HomeProducts />
		</>
	);
}

export default HomePage;
