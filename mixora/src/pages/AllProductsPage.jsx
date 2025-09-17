import AllProducts from '../components/AllProducts/AllProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryproducts/HeaderCategoryproducts';

function AllProductsPage() {
	return (
		<>
			<HeaderCategoryProducts title="All Products" />
			<AllProducts />
		</>
	);
}

export default AllProductsPage;
