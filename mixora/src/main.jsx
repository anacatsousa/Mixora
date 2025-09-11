import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './scss/style.scss';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Layout from './components/layout.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<CartProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/category/:slug" element={<CategoryPage />} />
						<Route path="/category/:categorySlug/:productSlug" element={<ProductPage />} />
						<Route path="/bag" element={<CartPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Route>
				</Routes>
			</CartProvider>
		</BrowserRouter>
	</StrictMode>
);
