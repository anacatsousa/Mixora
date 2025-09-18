import useProducts from '../../hooks/useProducts';
import './_searchModal.scss';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Loading from '../Loading/Loading';
import ModalBase from '../ModalBase/ModalBase';
import { X } from 'lucide-react';
import { Link } from 'react-router';
import Card from '../Card/Card';
import { useState } from 'react';

function SearchModal({ isOpen, onClose }) {
	const { products, isLoading } = useProducts();
	const [query, setQuery] = useState('');

	const searchProducts =
		query.length === 0 ? [] : products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()) || product.category.name.toLowerCase().includes(query.toLowerCase()));

	if (isLoading === true) return <Loading />;

	return (
		<ModalBase isOpen={isOpen} direction="top" variant="full">
			<Container>
				<div className="search">
					<div className="search__header">
						<h3 className="cart__title">Search</h3>
						<Button onClick={onClose}>
							<X />
						</Button>
					</div>

					<input type="text" name="search" placeholder="What are you searching for?" className="search__input" value={query} onChange={(e) => setQuery(e.target.value)} />
					{query && (
						<div className="wrapper">
							<div className="wrapper__products-grid">
								{searchProducts.map((product) => (
									<Link to={`/category/${product.category.slug}/${product.slug}`} key={product.id} onClick={onClose}>
										<Card img={product.images[0]} title={product.title} price={product.price} category={product.category.name} showCategory={false} />
									</Link>
								))}
							</div>
						</div>
					)}
				</div>
			</Container>
		</ModalBase>
	);
}

export default SearchModal;
