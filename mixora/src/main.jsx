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
import PrivacyCookiesPage from './pages/PrivacyCookiesPage.jsx';
import TermsConditionsPage from './pages/TermsConditionsPage.jsx';
import StoresPage from './pages/StoresPage.jsx';
import CareesPage from './pages/CareesPage.jsx';
import FaqPage from './pages/FaqPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import DeliveryAndReturnsPage from './pages/DeliveryAndReturnsPage.jsx';
import SuccessPage from './pages/SuccessPage/SuccessPage.jsx';
import AccountPage from './pages/AccountPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { SearchProvider } from './context/SearchContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<CartProvider>
					<SearchProvider>
						<Routes>
							<Route element={<Layout />}>
								<Route path="/" element={<HomePage />} />
								<Route path="/all" element={<AllProductsPage />} />
								<Route path="/category/:slug" element={<CategoryPage />} />
								<Route path="/category/:categorySlug/:productSlug" element={<ProductPage />} />
								<Route path="/about" element={<AboutUsPage />} />
								<Route path="/terms&conditions" element={<TermsConditionsPage />} />
								<Route path="/privacy&cookies" element={<PrivacyCookiesPage />} />
								<Route path="/success" element={<SuccessPage />} />
								<Route path="/careers" element={<CareesPage />} />
								<Route path="/stores" element={<StoresPage />} />
								<Route path="/faq" element={<FaqPage />} />
								<Route path="/contact" element={<ContactUsPage />} />
								<Route path="/delivery&returns" element={<DeliveryAndReturnsPage />} />
								<Route path="/account" element={<AccountPage />} />
								<Route path="/login" element={<LoginPage />} />
								<Route path="/register" element={<RegisterPage />} />
								<Route path="*" element={<NotFoundPage />} />
							</Route>
						</Routes>
					</SearchProvider>
				</CartProvider>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
);
