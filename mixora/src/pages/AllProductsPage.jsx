import { useState } from 'react';
import AllProducts from '../components/AllProducts';
import HeaderCategoryProducts from '../components/HeaderCategoryProducts/HeaderCategoryProducts';
import useScrollToTop from '../hooks/useScrollToTop';
import FiltersModal from '../components/FiltersModal/FiltersModal';

function AllProductsPage() {
	const [isFiltersOpen, setIsFiltersOpen] = useState(false);

	const [appliedFilters, setAppliedFilters] = useState({
		priceMin: 0,
		priceMax: 1000,
		sort: 'asc',
	});
	useScrollToTop();
	return (
		<>
			<HeaderCategoryProducts title="All Products" onFilterClick={() => setIsFiltersOpen(true)} />
			<AllProducts appliedFilters={appliedFilters} />
			<FiltersModal isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)} appliedFilters={appliedFilters} setAppliedFilters={setAppliedFilters} />
		</>
	);
}

export default AllProductsPage;
