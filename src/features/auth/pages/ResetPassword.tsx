import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LockResetIcon from '@mui/icons-material/LockReset';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FirebaseError } from 'firebase/app';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { authErrorMapping } from '../../../constants/auth/authError';
import { resetPasswordBySendingMail } from '../../../services/auth/authentication';
import { convertToString } from '../../../utils/helperFunctions';

const validationSchema = yup.object({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
});

export default function ResetPassword() {
	const [isPasswordResetBtnLoading, setIsPasswordResetBtnLoading] =
		useState(false);
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: validationSchema,
		onSubmit: async (values: any) => {
			setIsPasswordResetBtnLoading(true);
			const isMailSent = await resetPasswordBySendingMail(values.email);
			setIsPasswordResetBtnLoading(false);
			if (isMailSent instanceof FirebaseError) {
				toast.error(
					authErrorMapping[isMailSent.code] ?? 'Something went wrong',
				);

				return;
			}

			toast.success('Please check your email for password reset link.');
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
							<LockResetIcon />
						</Avatar>
						<Typography component='h1' variant='h5'>
							Reset password
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
									formik.touched.email &&
									convertToString(formik.errors.email)
								}
							/>

							<LoadingButton
								loading={isPasswordResetBtnLoading}
								type='submit'
								loadingPosition='end'
								fullWidth
								variant='contained'
								sx={{ mt: 3, mb: 2 }}
								endIcon={<ArrowRightIcon />}
							>
								Reset Password
							</LoadingButton>
							<Grid container>
								<Grid item xs></Grid>
								<Grid item>
									<Link
										to='/auth/signin'
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
