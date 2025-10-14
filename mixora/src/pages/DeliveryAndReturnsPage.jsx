import { useState } from 'react';
import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import '../scss/components/_static-page.scss';
import Button from '../components/Button/Button';
import useScrollToTop from '../hooks/useScrollToTop';

function DeliveryAndReturnsPage() {
	const [activeSection, setActiveSection] = useState(null);
	const [closingSection, setClosingSection] = useState(null);
	useScrollToTop();

	const section = [
		{
			title: 'Delivery',
			one: 'We ship to Europe.',
			two: 'Shipping times and costs are calculated automatically at checkout based on your location.',
			three: 'Once your order has been dispatched, you’ll receive a tracking number by email.',
			four: 'Delivery times may vary depending on your location and chosen shipping method.',
			five: 'Free shipping is available for orders over 50€.',
			content2: 'If your order is delayed or you experience any issues with delivery, please contact our support team at mixora.support@email.com.',
		},
		{
			title: 'Returns',
			content: 'We understand that sometimes a product might not be quite right. If you’re not satisfied with your purchase, we’ll be happy to help with a return or exchange.',
			one: 'You may request a return or exchange within 7 days of receiving your order.',
			two: 'Items must be unused, unwashed, and in their original packaging with all tags attached.',
			three: 'To start a return, please email us at mixora.support@email.com with your order number and reason for return.',
			four: 'Once your return is approved, we’ll provide you with the return shipping instructions.',
			five: 'Depending on the reason for return, return shipping costs may be covered by the customer or by us.',
		},
		{
			title: 'Refunds',
			one: 'Refunds will be processed once the returned item has been received and inspected.',
			two: 'If approved, the refund will be issued to your original payment method: Credit/debit card payments: within 5–10 business days; PayPal or bank transfers: within 3–5 business days.',
			three: 'You’ll receive an email notification once your refund is processed.',
		},
		{
			title: 'Exceptions',
			content: 'Some products cannot be returned for hygiene or customization reasons, including:',
			one: 'Personalized or custom-made items',
			two: 'Intimate or sanitary goods',
			three: 'Gift cards',
			content2: 'Defective or damaged items, however, can always be returned or exchanged — please contact us immediately if your item arrives faulty or incorrect.',
		},
	];

	const toggleSection = (index) => {
		if (activeSection === index) {
			// inicia animação de fechar
			setClosingSection(index);
			setTimeout(() => {
				setActiveSection(null);
				setClosingSection(null);
			}, 300); // tempo igual à transição CSS
		} else {
			setActiveSection(index);
			setClosingSection(null);
		}
	};

	return (
		<section>
			<HeaderStaticPages title="Delivery & Returns" />
			<div className={`static-page ${activeSection !== null ? '' : 'static-page--height'}`}>
				<Container>
					<p>At Mixora, we want you to be completely happy with your purchase. Below you'll find all the details about our shipping, delivery, returns, and refund policies.</p>

					{section.map((section, index) => {
						const isActive = activeSection === index;
						const isClosing = closingSection === index;

						return (
							<div key={index} className={`static-page__section ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
								<Button className="static-page__subtitle" variant="tabs" onClick={() => toggleSection(index)}>
									{section.title}
								</Button>

								<div className="static-page__content-wrapper">
									<div className={`static-page__info-tabs ${isActive || isClosing ? 'static-page__info-tabs--visible' : ''}`}>
										{section.content && <p className="static-page__content-info">{section.content}</p>}
										<ul>
											<li>{section.one}</li>
											<li>{section.two}</li>
											<li>{section.three}</li>
											<li>{section.four}</li>
											<li>{section.five}</li>
										</ul>
										{section.content2 && <p className="static-page__content-info-two">{section.content2}</p>}
									</div>
								</div>
							</div>
						);
					})}
				</Container>
			</div>
		</section>
	);
}

export default DeliveryAndReturnsPage;
