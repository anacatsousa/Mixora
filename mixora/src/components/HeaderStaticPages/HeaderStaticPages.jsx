import './_headerStaticPages.scss';

function HeaderStaticPages({ title }) {
	return (
		<div className="header-static">
			<h2 className="header-static__title">{title}</h2>
		</div>
	);
}

export default HeaderStaticPages;
