import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RouteDetails } from '../../../types/routesRelated';

function useHandleCurrentActiveNav(
	defaultActive: string,
	routes: Array<RouteDetails>,
) {
	let location = useLocation();
	const [currentActiveNavBtn, setCurrentActiveBtn] = useState(
		() => defaultActive,
	);
	useEffect(() => {
		const routeName =
			routes.find(route => route.path === location.pathname)?.name ?? '';
		setCurrentActiveBtn(routeName);
	}, [location, routes]);
	return {
		currentActiveNavBtn,
	};
}
export default useHandleCurrentActiveNav;
