import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import { Checkbox, FormControlLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FirebaseError } from 'firebase/app';
import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { AuthContext } from '../../../App';
import { authErrorMapping } from '../../../constants/auth/authError';
import { signInUsingEmailAndPassword } from '../../../services/auth/authentication';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
	isRememberMeSelected: yup.boolean(),
});
export default function Signin() {
	const navigate = useNavigate();
	const { setLoggedIn } = useContext(AuthContext);
	const [shouldShowPassword, setShowPassword] = useState(false);
	const [isSaveBtnLoading, setIsSaveBtnLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			isRememberMeSelected: true,
		},
		validationSchema: validationSchema,
		onSubmit: async values => {
			setIsSaveBtnLoading(true);
			console.log(
				'values.isRememberMeSelected',
				values.isRememberMeSelected,
			);
			const loggedInUser = await signInUsingEmailAndPassword(
				values.email,
				values.password,
				values.isRememberMeSelected,
			);
			setIsSaveBtnLoading(false);
			if (loggedInUser instanceof FirebaseError) {
				toast.error(
					authErrorMapping[loggedInUser.code] ??
						'Something went wrong',
				);

				return;
			}

			setLoggedIn(true);
			navigate('/');
		},
	});

	return (
		<>
			<Grid container component='main' sx={{ height: '100vh' }}>
				<CssBaseline />
				<Grid item xs={false} sm={4} md={7} />
				<Grid
					item
					xs={12}
					sm={8}
					md={5}
					component={Paper}
					elevation={6}
					square
				>
					<Box
						sx={{
							my: 8,
							mx: 4,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
							<LockOutlinedIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Sign in
						</Typography>
						<Box
							component='form'
							onSubmit={formik.handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								margin='normal'
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={formik.values.email}
								onChange={formik.handleChange}
								error={
									formik.touched.email &&
									Boolean(formik.errors.email)
								}
								helperText={
									formik.touched.email && formik.errors.email
								}
							/>
							<TextField
								margin='normal'
								fullWidth
								name='password'
								label='Password'
								type={shouldShowPassword ? 'text' : 'password'}
								id='password'
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton
												aria-label='toggle password visibility'
												onClick={() =>
													setShowPassword(
														!shouldShowPassword,
													)
												}
												onMouseDown={() =>
													setShowPassword(
														!shouldShowPassword,
													)
												}
												edge='end'
											>
												{shouldShowPassword ? (
													<Visibility />
												) : (
													<VisibilityOff />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
								autoComplete='current-password'
								value={formik.values.password}
								onChange={formik.handleChange}
								error={
									formik.touched.password &&
									Boolean(formik.errors.password)
								}
								helperText={
									formik.touched.password &&
									formik.errors.password
								}
							/>
							<FormControlLabel
								control={
									<Checkbox
										name='isRememberMeSelected'
										onChange={formik.handleChange}
										value={
											formik.values.isRememberMeSelected
										}
										checked={
											formik.values.isRememberMeSelected
										}
										color='primary'
									/>
								}
								label='Remember me'
							/>
							<LoadingButton
								loading={isSaveBtnLoading}
								type='submit'
								loadingPosition='end'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								endIcon={<ArrowRightIcon />}
							>
								Sign In
							</LoadingButton>
							<Grid container>
								<Grid item xs>
									<Link
										to='/auth/reset-password'
										className='underline text-sm tracking-wide link-color'
									>
										Forgot password?
									</Link>
								</Grid>
								<Grid item>
									<Link
										to='/auth/signup'
										className='underline text-sm tracking-wide link-color'
									>
										{' '}
										{'Already have an account? Sign In'}
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}
