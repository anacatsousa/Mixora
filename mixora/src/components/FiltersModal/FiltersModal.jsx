import { X } from 'lucide-react';
import Container from '../Container/Container';
import ModalBase from '../ModalBase/ModalBase';
import Button from '../Button/Button';
import { useState } from 'react';
import './_filtermodal.scss';
import PriceRange from '../PriceRange';

function FiltersModal({ isOpen, onClose, appliedFilters, setAppliedFilters }) {
	const [localFilters, setLocalFilters] = useState(appliedFilters);

	return (
		<ModalBase isOpen={isOpen} variant="half" withOverlay={false}>
			<Container>
				<div className="filter">
					<div>
						<div className="filter__header">
							<h3 className="filter__title">Filters</h3>
							<Button onClick={onClose}>
								<X aria-label="close button" />
							</Button>
						</div>
						<div className="filter__section">
							<fieldset>
								<legend className="filter__subtitle">Sorted by</legend>
								<div className="filter__radio">
									<input type="radio" name="sort" id="lowest" checked={localFilters.sort === 'asc'} onChange={() => setLocalFilters({ ...localFilters, sort: 'asc' })} />
									<label htmlFor="lowest">Lowest price</label>
								</div>
								<div className="filter__radio">
									<input type="radio" name="sort" id="highest" checked={localFilters.sort === 'desc'} onChange={() => setLocalFilters({ ...localFilters, sort: 'desc' })} />
									<label htmlFor="highest">Highest price</label>
								</div>
							</fieldset>
						</div>
						<div className="filter__section">
							<h4 className="filter__subtitle">Price</h4>
							<PriceRange min={0} max={1000} onChange={({ min, max }) => setLocalFilters({ ...localFilters, priceMin: min, priceMax: max })} />
						</div>
					</div>
					<Button
						onClick={() => {
							setAppliedFilters(localFilters);
							onClose();
						}}
					>
						Apply Filters
					</Button>
				</div>
			</Container>
		</ModalBase>
	);
}

export default FiltersModal;
