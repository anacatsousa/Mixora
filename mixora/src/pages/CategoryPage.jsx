import { useParams } from 'react-router';
import CategoryProducts from '../components/CategoryProducts/CategoryProducts';
import ScrollToTop from '../components/ScrollToTop';

//pagina que aparece ao clicar nas opções do menu (categorias)

function CategoryPage() {
	const params = useParams();
	const slug = params.slug;

	return (
		<>
			<ScrollToTop />
			<CategoryProducts category={slug} />
		</>
	);
}

export default CategoryPage;
