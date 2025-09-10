import { useParams } from 'react-router';
import HeaderProductPage from '../components/HeaderProductPage/HeaderProductPage';

function ProductPage() {
	const { categorySlug, productSlug } = useParams();

	return <HeaderProductPage categorySlug={categorySlug} productSlug={productSlug} />;
}

export default ProductPage;
