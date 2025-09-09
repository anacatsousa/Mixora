import useCategories from '../../hooks/useCategories';
import { Link } from 'react-router';
import './_navBar.scss';
import logo from '@/assets/MIXORA.svg';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import useDetectMenuCollision from '../../hooks/useDetectMenuCollision';
import Container from '../Container/Container';
import HambuerguerButton from '../HamburguerButton/HamburguerButton';

function NavBar() {
	const { categories, isLoading } = useCategories([]);

	// ***

	// Small NavBar Visibility and Animation State

	// ***

	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const toggleMenu = () => {
		if (isOpen) {
			setIsOpen(false); //  inicialize the closing animation

			setTimeout(() => setIsVisible(false), 200); // remove from DOM after animation
		} else {
			setTimeout(() => setIsVisible(true), 200);

			setIsOpen(true);
		}
	};

	// ***

	// NavBar Responsiveness and Collision Detection

	// ***

	const linksRef = useRef(null);
	const centerMeasureRef = useRef(null);
	const [lastBigScreenWidth, setLastBigScreenWidth] = useState(window.innerWidth);

	// screen width state

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	//  updates window width on resize

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const showSmallMenuFromCollision = useDetectMenuCollision(linksRef, centerMeasureRef, windowWidth);

	//  updates the last big screen width when there's no collision

	useEffect(() => {
		if (!showSmallMenuFromCollision) {
			setLastBigScreenWidth(windowWidth);
		}
	}, [showSmallMenuFromCollision, windowWidth]);

	const showSmallMenu = showSmallMenuFromCollision !== null ? showSmallMenuFromCollision && windowWidth < (lastBigScreenWidth || Infinity) : false;

	// ***

	// Nav Bar Scroll Behavior

	// ***

	const [isScrollY, setIsScrollY] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			//  shows if we're at the top

			if (currentScrollY <= 0) {
				setIsScrollY(false);

				setLastScrollY(0);
			}

			// mostrar se subir Hide if scrolling down, show if scrolling up

			if (currentScrollY > lastScrollY) {
				setIsScrollY(true); // hide
			} else if (currentScrollY < lastScrollY) {
				setIsScrollY(false); // show
			}

			setLastScrollY(currentScrollY);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, [lastScrollY]);

	if (isLoading === true) return <span>LOADING...</span>;

	return (
		<>
			<nav className={`nav ${isScrollY ? 'nav--hidden' : ''}`}>
				<Container>
					<div className="nav__container">
						{showSmallMenu ? (
							<>
								<div className="nav__small-nav">
									<div className="nav__small-nav-left">
										<HambuerguerButton isOpen={isOpen} toggle={toggleMenu} />
									</div>

									<Link to={'/'}>
										<img src={logo} alt="logo" className="nav__logo" />
									</Link>

									<div className="nav__small-nav-right">
										<Search className="nav__icons" />

										<User className="nav__icons" />

										<Link to={'/bag'}>[ 0 ]</Link>
									</div>
								</div>
							</>
						) : (
							<div className="nav__big-nav">
								<div className="nav__options">
									<div className="nav__left" ref={linksRef}>
										{categories.slice(0, 5).map((category) => (
											<Link to={`category/${category.slug}`} key={category.id} className="nav__links">
												{category.name}
											</Link>
										))}
									</div>

									{/* invisible logo  */}

									<div className="nav__center-measure" ref={centerMeasureRef}>
										<img src={logo} alt="logo" style={{ opacity: 0, width: '100px' }} />
									</div>

									{/* visible logo  */}

									<div className="nav__center">
										<Link to={'/'}>
											<img src={logo} alt="logo" className="nav__logo" />
										</Link>
									</div>

									<div className="nav__right">
										<Link className="nav__links">Search</Link>

										<Link to={'/account'} className="nav__links">
											Account
										</Link>

										<Link to={'/bag'} className="nav__links">
											Bag [ 0 ]
										</Link>
									</div>
								</div>
							</div>
						)}
					</div>

					{isVisible && showSmallMenu ? (
						<>
							<div className={`nav__options-small-nav ${isOpen ? 'nav__options-small-nav--open' : 'nav__options-small-nav--closed'}`}>
								{categories.slice(0, 5).map((category) => (
									<Link to={`/category/${category.slug}`} key={category.id} onClick={toggleMenu} className="nav__links nav__links--small-nav">
										{category.name}

										<ChevronRight />
									</Link>
								))}
							</div>
						</>
					) : (
						!isVisible
					)}
				</Container>
			</nav>
		</>
	);
}

export default NavBar;
