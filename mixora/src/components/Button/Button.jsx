import { Link } from 'react-router';
import './_button.scss';

function Button({ to, text, price, hasPrice = false, onClick, className = '', children, variant = 'default', disabled = false, ...props }) {
	if (to) {
		return (
			<Link
				to={to}
				className={` btn btn--${variant}`}
				onClick={(e) => {
					if (onClick) onClick(e);
				}}
				{...props}
			>
				{text}
			</Link>
		);
	}

	return (
		<button className={` btn btn--${variant} ${hasPrice ? 'space' : ''} ${className}`} onClick={onClick} disabled={disabled} {...props}>
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
