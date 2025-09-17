import './_hero.scss';
import backgroundVideo from '@/assets/background_video.mp4';
import Button from '@/components/Button/Button';
import Container from '@/components/Container/Container';
import { useEffect } from 'react';

function Hero() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		console.log(document.activeElement);
	}, []);

	return (
		<section className="hero">
			<div className="hero__background-video">
				<video autoPlay loop muted className="hero__video">
					<source src={backgroundVideo} type="video/mp4" />
				</video>
			</div>

			<div className="hero__content">
				<Container>
					<span>[ NEW IN ]</span>
					<h1 className="hero__title"> Autumn Collection </h1>
					<Button to="/all" text="Shop Now" />
				</Container>
			</div>
		</section>
	);
}

export default Hero;
