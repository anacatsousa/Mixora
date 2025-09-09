import { useState, useEffect } from 'react';

function useDetectMenuCollision(linksRef, centerRef, windowWidth) {
	const [showSmallMenu, setShowSmallMenu] = useState(false);

	useEffect(() => {
		const checkCollision = () => {
			if (!linksRef.current || !centerRef.current) return;

			const linksBox = linksRef.current.getBoundingClientRect();
			const logoBox = centerRef.current.getBoundingClientRect();
			const isOverlapping = logoBox.left <= linksBox.right;

			setShowSmallMenu(isOverlapping);
		};

		checkCollision();

		window.addEventListener('resize', checkCollision);

		return () => {
			window.removeEventListener('resize', checkCollision);
		};
	}, [linksRef, centerRef, windowWidth]);

	return showSmallMenu;
}

export default useDetectMenuCollision;
