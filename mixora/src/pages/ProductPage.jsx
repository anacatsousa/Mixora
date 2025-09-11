import { useParams } from 'react-router';
import HeaderProductPage from '../components/HeaderProductPage/HeaderProductPage';
import InfoProduct from '../components/InfoProduct/InfoProduct';

function ProductPage() {
	const { categorySlug, productSlug } = useParams();

	return (
		<>
			<HeaderProductPage categorySlug={categorySlug} productSlug={productSlug} />
			<InfoProduct categorySlug={categorySlug} productSlug={productSlug} />
		</>
	);
}

export default ProductPage;
