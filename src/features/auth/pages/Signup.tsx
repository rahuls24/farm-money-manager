import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FirebaseError } from 'firebase/app';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { authErrorMapping } from '../../../constants/auth/authError';
import { signupUsingEmailAndPassword } from '../../../services/auth/authentication';
import { convertToString } from '../../../utils/helperFunctions';

const validationSchema = yup.object({
	name: yup.string().required('Name is required'),
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	password: yup
		.string()
		.min(6, 'Password should be of minimum 6 characters length')
		.required('Password is required'),
});

export default function Signup() {
	// let navigate = useNavigate();
	const [shouldShowPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const [isSubmitBtnLoading, setIsSubmitBtnLoading] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: validationSchema,
		onSubmit: async values => {
			setIsSubmitBtnLoading(true);
			const isUserRegistered = await signupUsingEmailAndPassword(
				values.email,
				values.password,
				values.name,
			);
			setIsSubmitBtnLoading(false);
			if (isUserRegistered instanceof FirebaseError) {
				toast.error(
					authErrorMapping[isUserRegistered.code] ??
						'Something went wrong',
				);

				return;
			}

			toast.success('Please check your email for password reset link.');
			navigate('/auth/signin');
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
							my: 2,
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
							Sign Up
						</Typography>
						<Box
							component='form'
							onSubmit={formik.handleSubmit}
							sx={{ mt: 1 }}
						>
							<TextField
								margin='normal'
								fullWidth
								id='name'
								label='Name'
								name='name'
								autoComplete='name'
								value={formik.values.name}
								onChange={formik.handleChange}
								error={
									formik.touched.name &&
									Boolean(formik.errors.name)
								}
								helperText={
									formik.touched.name &&
									convertToString(formik.errors.name)
								}
								autoFocus
							/>
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
									formik.touched.email &&
									convertToString(formik.errors.email)
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
									convertToString(formik.errors.password)
								}
							/>
							<LoadingButton
								loading={isSubmitBtnLoading}
								type='submit'
								loadingPosition='end'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								endIcon={<ArrowRightIcon />}
							>
								Sign Up
							</LoadingButton>
							<Grid container>
								<Grid item xs></Grid>
								<Grid item>
									<Link href='/auth/signin' variant='body2'>
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
