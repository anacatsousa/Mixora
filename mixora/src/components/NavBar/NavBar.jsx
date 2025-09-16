import useCategories from '../../hooks/useCategories';
import { Link } from 'react-router';
import './_navBar.scss';
import logo from '@/assets/MIXORA.svg';
import { Search } from 'lucide-react';
import { User } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { useRef, useState, useLayoutEffect } from 'react';
import { useEffect } from 'react';
import Container from '../Container/Container';
import HambuerguerButton from '../HamburguerButton/HamburguerButton';
import { useCart } from '../../hooks/useCart';
import Button from '@/components/Button/Button';
import Loading from '../Loading/Loading';

function NavBar({ onCartClick }) {
	const { categories, isLoading } = useCategories([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// ***

	// Small NavBar Visibility and Animation State

	// ***

	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const toggleMenu = () => {
		if (isOpen) {
			setIsOpen(false); //  inicialize the closing animation

			setTimeout(() => setIsVisible(false), 300); // remove from DOM after animation
		} else {
			setTimeout(() => setIsVisible(true), 300);

			setIsOpen(true);
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [isOpen]);

	// ***

	// Nav Bar Scroll Behavior

	// ***

	const [isScrollY, setIsScrollY] = useState(false);
	const lastScrollY = useRef(window.scrollY);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			if (currentScrollY <= 0) {
				setIsScrollY(false);
				lastScrollY.current = 0;
				return;
			}

			if (currentScrollY > lastScrollY.current) {
				setIsScrollY(true); // hide
			} else if (currentScrollY < lastScrollY.current) {
				setIsScrollY(false); // shows
			}

			lastScrollY.current = currentScrollY;
		};

		// Força navbar visível ao montar (sem esperar scroll)
		setIsScrollY(false);

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	//***

	// Number of items in the bag

	//***

	const { cartItems } = useCart();
	const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);


	// ***

	// Size of all links is bigger than the size of nav_left, force small nav

	// ***

	const navLeftRef = useRef(null);
	const [forceSmallNav, setForceSmallNav] = useState(false);

	useLayoutEffect(() => {
		const checkOverflow = () => {
			const el = navLeftRef.current;
			if (!el) return;

			const scrollWidth = el.scrollWidth;
			const clientWidth = el.clientWidth;

			setForceSmallNav(scrollWidth > clientWidth);
		};

		checkOverflow();

		window.addEventListener('resize', checkOverflow);
		return () => window.removeEventListener('resize', checkOverflow);
	}, [categories]);

	if (isLoading === true) return <Loading />;


	return (
		<>
			<nav className={`nav ${isScrollY ? 'nav--hidden' : ''}`}>
				<Container>
					<div className="nav__container">
						{windowWidth < 1025 || forceSmallNav ? (
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
										<Button text={`[ ${total} ]`} hasPrice={false} onClick={onCartClick} variant="icon" />
									</div>
								</div>
							</>
						) : (
							<div className="nav__big-nav">
								<div className="nav__options">
									<div className="nav__left" ref={navLeftRef}>
										{categories.slice(0, 5).map((category) => (
											<Link to={`category/${category.slug}`} key={category.id} className="nav__links">
												{category.name}
											</Link>
										))}
									</div>
									<div className="nav__center">
										<Link to={'/'}>
											<img src={logo} alt="logo" className="nav__logo" />
										</Link>
									</div>
									<div className="nav__right">
										<Link to={'#'} className="nav__links">
											Search
										</Link>
										<Link to={'#'} className="nav__links">
											Account
										</Link>
										<Button text={`Bag [ ${total} ]`} hasPrice={false} onClick={onCartClick} variant="link" />
									</div>
								</div>
							</div>
						)}
					</div>
					{isVisible ? (
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
