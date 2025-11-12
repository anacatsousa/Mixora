import BackButton from '../BackButton/BackButton';
import Button from '../Button/Button';
import './_headerCategoryProducts.scss';

function HeaderCategoryProducts({ title, onFilterClick }) {
	return (
		<div className="header">
			<div>
				<BackButton />
				<h2 className="header__title">{title}</h2>
			</div>
			<Button text="Filters" onClick={onFilterClick} />
		</div>
	);
}

export default HeaderCategoryProducts;
