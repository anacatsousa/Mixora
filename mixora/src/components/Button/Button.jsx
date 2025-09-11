import './_button.scss';

function Button({ text, price, hasPrice = true }) {
	return (
		<button className="btn">
			{hasPrice ? (
				<>
					<p>{text}</p>
					<p>{price} €</p>
				</>
			) : (
				<p>{text}</p>
			)}
		</button>
	);
}
export default Button;
