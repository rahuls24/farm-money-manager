import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
	getUserDetails,
	signOutTheUser,
} from '../../services/auth/authentication';
import { RouteDetails } from '../../types/routesRelated';
import useGetMenusAnchor from './hooks/useGetMenusAnchor';
import useHandleCurrentActiveNav from './hooks/useHandleCurrentActiveNav';
const settings = ['Profile', 'Logout'];
const pages: Array<RouteDetails> = [
	{ name: 'Live', path: '/' },
	{ name: 'History', path: '/history' },
];

const Header = () => {
	let navigate = useNavigate();
	const {
		handleCloseNavMenu,
		handleCloseUserMenu,
		handleOpenNavMenu,
		handleOpenUserMenu,
		anchorElNav,
		anchorElUser,
	} = useGetMenusAnchor();

	const { currentActiveNavBtn } = useHandleCurrentActiveNav(
		pages[0].name,
		pages,
	);

	const settingsHandler = async (settingKey: string) => {
		switch (settingKey) {
			case 'Logout':
				const isSignOut = await signOutTheUser();
				if (!isSignOut) {
					toast.error('Logout failed. Please try again.');
				}
				navigate('/auth/signin');
				break;
			default:
				break;
		}
		handleCloseUserMenu();
	};
	let userFullName = useMemo(() => {
		const anonymousUser = 'Anonymous User';
		const user = getUserDetails();
		if (!user) return anonymousUser;
		return user.displayName ?? anonymousUser;
	}, []);
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon
						sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
					/>
					<Typography
						variant='h6'
						noWrap
						component='a'
						href='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							// fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{'Farm Manager'}
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page: any) => (
								<MenuItem
									key={page.path}
									onClick={() => {
										handleCloseNavMenu();
										navigate(page.path);
									}}
								>
									<Typography textAlign='center'>
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 500,
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						{'Farm Manager'}
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'none', md: 'flex' },
						}}
					>
						{pages.map((page: any) => (
							<Button
								key={page.path}
								onClick={() => navigate(page.path)}
								sx={{
									m: 2,
									color: 'white',
									display: 'block',
									borderBottom:
										currentActiveNavBtn === page.name
											? '1px solid #bdbdbd'
											: 'none',
								}}
							>
								{page.name}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar {...stringAvatar(userFullName)} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map(setting => (
								<MenuItem
									key={setting}
									onClick={() => settingsHandler(setting)}
									disabled={setting === 'Profile'}
								>
									<Typography textAlign='center'>
										{setting}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Header;

// Util Function

function stringToColor(string: string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

function stringAvatar(name: string) {
	const [firstName = ' ', lastName = ' '] = name
		.split(' ')
		.map(e => e.toUpperCase());

	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${firstName[0]}${lastName[0]}`,
	};
}
