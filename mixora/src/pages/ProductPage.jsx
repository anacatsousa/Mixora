import { useParams } from 'react-router';

function ProductPage() {
	const { categorySlug, productSlug } = useParams();

	return (
		<h1>
			Product Page {categorySlug} {productSlug}
		</h1>
	);
}

export default ProductPage;
