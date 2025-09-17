import BackButton from '../BackButton/BackButton';
import './_headerCategoryProducts.scss';

function HeaderCategoryProducts({ title }) {
	return (
		<div className="header">
			<BackButton />
			<h2 className="header__title">{title}</h2>
		</div>
	);
}

export default HeaderCategoryProducts;
