import { Link } from 'react-router';
import './_button.scss';

function Button({ to, text, price, hasPrice = false, onClick, className = '', children, variant = 'default', disabled = false }) {
	if (to) {
		return (
			<Link
				to={to}
				className="btn"
				onClick={(e) => {
					if (onClick) onClick(e); // Isto chama `onClose`
				}}
			>
				{text}
			</Link>
		);
	}

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
