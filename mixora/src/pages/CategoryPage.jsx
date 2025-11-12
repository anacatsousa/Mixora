import { useParams } from 'react-router';
import CategoryProducts from '../components/CategoryProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';
import useProducts from '@/hooks/useProducts';
import Loading from '../components/Loading/Loading';
import useScrollToTop from '../hooks/useScrollToTop';
import { useState } from 'react';
import FiltersModal from '../components/FiltersModal/FiltersModal';

function CategoryPage() {
	const params = useParams();
	const slug = params.slug;
	const { products } = useProducts();
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);
	const [appliedFilters, setAppliedFilters] = useState({
		priceMin: 0,
		priceMax: 1000,
		sort: 'asc',
	});

	useScrollToTop();

	const category = products.find((p) => p.category.slug === slug)?.category;

	if (!category) return <Loading />;

	return (
		<>
			<HeaderCategoryProducts title={category.name} onFilterClick={() => setIsFiltersOpen(true)} />
			<CategoryProducts category={slug} appliedFilters={appliedFilters} />
			<FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />
		</>
	);
}

export default CategoryPage;
