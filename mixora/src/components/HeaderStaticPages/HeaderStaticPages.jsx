import './_headerStaticPages.scss';

function HeaderStaticPages({ title }) {
	return (
		<div className="header-static">
			<h1 className="header-static__title">{title}</h1>
		</div>
	);
}

export default HeaderStaticPages;
