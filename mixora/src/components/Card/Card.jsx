import './_card.scss';

function Card({ img, title, price, category }) {
	return (
		<div className="card">
			<div className="card__img-container">
				<img src={img} alt={title} className="card__img" />
				<p className="card__category">{category}</p>
			</div>

			<h4 className="card__title">{title}</h4>
			<span className="card__price">{price} €</span>
		</div>
	);
}
export default Card;
