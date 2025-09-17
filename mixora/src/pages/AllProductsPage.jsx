import AllProducts from '../components/AllProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';

function AllProductsPage() {
	return (
		<>
			<HeaderCategoryProducts title="All Products" />
			<AllProducts />
		</>
	);
}

export default AllProductsPage;
