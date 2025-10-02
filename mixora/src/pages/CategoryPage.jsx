import { useParams } from 'react-router';
import ScrollToTop from '../components/ScrollToTop';
import CategoryProducts from '../components/CategoryProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';
import useProducts from '@/hooks/useProducts';
import Loading from '../components/Loading/Loading';

function CategoryPage() {
	const params = useParams();
	const slug = params.slug;
	const { products } = useProducts();

	const category = products.find((p) => p.category.slug === slug)?.category;

	if (!category) return <Loading />;

	return (
		<>
			<ScrollToTop />
			<HeaderCategoryProducts title={category.name} />
			<CategoryProducts category={slug} />
		</>
	);
}

export default CategoryPage;
