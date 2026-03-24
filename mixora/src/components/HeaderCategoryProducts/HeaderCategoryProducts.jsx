import BackButton from '../BackButton/BackButton';
import Button from '../Button/Button';
import './_headerCategoryProducts.scss';

function HeaderCategoryProducts({ title, onFilterClick }) {
	return (
		<div className="header">
			<div>
				<BackButton />
				<h1 className="header__title">{title}</h1>
			</div>
			<Button text="Filters" onClick={onFilterClick} aria-label="Filter button" />
		</div>
	);
}

export default HeaderCategoryProducts;
