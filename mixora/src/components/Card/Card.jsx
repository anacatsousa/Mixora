import './_card.scss';
import noPhoto from '../../assets/no_photo.png';

function isValidImg(src) {
	if (typeof src !== 'string') return false;

	const trimmed = src.trim().toLowerCase();
	const validExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

	return trimmed !== '' && trimmed !== 'undefined' && validExtensions.some((ext) => trimmed.endsWith(ext));
}

function Card({ img, title, price, category, showCategory = true }) {
	return (
		<div className="card">
			<div className="card__img-container">
				<img src={isValidImg(img) ? img : noPhoto} alt={title} className="card__img" />
				{showCategory && <p className="card__category">{category}</p>}
			</div>

			<h4 className="card__title">{title}</h4>
			<span className="card__price">{price} €</span>
		</div>
	);
}
export default Card;
