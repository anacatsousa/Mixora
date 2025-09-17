import AllProducts from '../components/AllProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';
import ScrollToTop from '../components/ScrollToTop';

function AllProductsPage() {
	return (
		<>
			<ScrollToTop />
			<HeaderCategoryProducts title="All Products" />
			<AllProducts />
		</>
	);
}

export default AllProductsPage;
