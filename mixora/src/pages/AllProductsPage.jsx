import AllProducts from '../components/AllProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';
import useScrollToTop from '../hooks/useScrollToTop';

function AllProductsPage() {
	useScrollToTop();
	return (
		<>
			<HeaderCategoryProducts title="All Products" />
			<AllProducts />
		</>
	);
}

export default AllProductsPage;
