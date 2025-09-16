import './_button.scss';

function Button({ text, price, hasPrice = false, onClick, className = '', children, variant = 'default', disabled = false }) {
	return (
		<button className={` btn btn--${variant} ${hasPrice ? 'space' : ''} ${className}`} onClick={onClick} disabled={disabled}>
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
