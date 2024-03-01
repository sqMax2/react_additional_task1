import { useWindowEvent } from "./useWindowEvent";
import { useEffect, useState } from 'react';

export function useWindowScroll() {
	const [scroll, setScroll] = useState({ x: 0, y: 0 });

	function handleScroll() {
		setScroll({ x: window.scrollX, y: window.scrollY });
	}

	function scrollTo({ x = 0, y = 0 } = scroll) {
		window.scrollTo(x, y);
	}

	useWindowEvent("scroll", handleScroll);

	useEffect(() => {
		handleScroll();
	}, []);
	return [scroll, scrollTo];
}
