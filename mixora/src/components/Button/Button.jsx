import './_button.scss';

function Button({ text, price, hasPrice = true, onClick }) {
	return (
		<button className="btn" onClick={onClick}>
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
