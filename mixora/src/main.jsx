import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './scss/style.scss';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import Layout from './components/layout.jsx';
import { CartProvider } from './context/CartContext.jsx';
import AllProductsPage from './pages/AllProductsPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/all" element={<AllProductsPage />} />
						<Route path="/category/:slug" element={<CategoryPage />} />
						<Route path="/category/:categorySlug/:productSlug" element={<ProductPage />} />
						<Route path="/about" element={<AboutUsPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	</StrictMode>
);
