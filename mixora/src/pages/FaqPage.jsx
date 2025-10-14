import { useState } from 'react';
import Container from '../components/Container/Container';
import HeaderStaticPages from '../components/HeaderStaticPages/HeaderStaticPages';
import '../scss/components/_static-page.scss';
import Button from '../components/Button/Button';
import useScrollToTop from '../hooks/useScrollToTop';

function FaqPage() {
	const [activeSection, setActiveSection] = useState(null);
	const [closingSection, setClosingSection] = useState(null);
	useScrollToTop();

	const section = [
		{
			question: 'Can I use a discount code?',
			answer: 'Yes! You can apply your discount code during checkout. Only one discount code can be used per order.',
		},
		{
			question: 'How long does delivery take?',
			answer: 'Standard shipping takes 3–7 business days depending on your location.',
		},
		{
			question: 'Do I have to pay for return shipping?',
			answer: 'If your item is defective or incorrect, we’ll cover the cost. Otherwise, you’ll be responsible for return shipping.',
		},
		{
			question: 'What are your customer service hours?',
			answer: 'Our team is available Monday to Friday, 9 AM – 5 PM (CET).',
		},
		{
			question: 'Where are your products made?',
			answer: 'All items are designed in Europe and produced in ethical, certified factories.',
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
					<p>Got questions? We’ve got answers! Below are some of the most common questions our customers ask about ordering, shipping, and returns.</p>

					{section.map((section, index) => {
						const isActive = activeSection === index;
						const isClosing = closingSection === index;

						return (
							<div key={index} className={`static-page__section ${isActive ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
								<Button className="static-page__subtitle" variant="tabs" onClick={() => toggleSection(index)}>
									{section.question}
								</Button>

								<div className="static-page__content-wrapper">
									<div className={`static-page__info-tabs ${isActive || isClosing ? 'static-page__info-tabs--visible' : ''}`}>
										<p>{section.answer}</p>
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

export default FaqPage;
