import './_button.scss';

function Button({ text, price, hasPrice = true, onClick, children, variant = 'default', disabled = false }) {
	return (
		<button className={` btn btn--${variant} ${hasPrice ? 'space' : ''}`} onClick={onClick} disabled={disabled}>
			{children ? (
				children
			) : hasPrice ? (
				<>
					<span>{text}</span>
					<span>{price} €</span>
				</>
			) : (
				<span>{text}</span>
			)}
		</button>
	);
}
export default Button;
