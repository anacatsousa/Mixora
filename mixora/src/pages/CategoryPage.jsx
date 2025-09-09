import { useParams } from 'react-router';

//pagina que aparece ao clicar nas opções do menu (categorias)

function CategoryPage() {
	const params = useParams();
	const slug = params.slug;
	return <h1>category page: {slug}</h1>;
}

export default CategoryPage;
