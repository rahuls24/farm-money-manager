import { MouseEvent as ReactMouseEvent, useState } from 'react';

function useGetMenusAnchor() {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: ReactMouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: ReactMouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return {
		anchorElNav,
		anchorElUser,
		handleOpenNavMenu,
		handleOpenUserMenu,
		handleCloseNavMenu,
		handleCloseUserMenu,
	};
}

export default useGetMenusAnchor