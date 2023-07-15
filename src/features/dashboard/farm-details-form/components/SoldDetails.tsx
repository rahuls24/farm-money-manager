import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { FormikProps } from 'formik';
import { FarmDetails } from '../farmDetailsFormSchema';

const Android12Switch = styled(Switch)(({ theme }) => ({
	padding: 8,
	'& .MuiSwitch-track': {
		borderRadius: 22 / 2,
		'&:before, &:after': {
			content: '""',
			position: 'absolute',
			top: '50%',
			transform: 'translateY(-50%)',
			width: 16,
			height: 16,
		},
		'&:before': {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main),
			)}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
			left: 12,
		},
		'&:after': {
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
				theme.palette.getContrastText(theme.palette.primary.main),
			)}" d="M19,13H5V11H19V13Z" /></svg>')`,
			right: 12,
		},
	},
	'& .MuiSwitch-thumb': {
		boxShadow: 'none',
		width: 16,
		height: 16,
		margin: 2,
	},
}));

type SoldDetailsProps = {
	formik: FormikProps<FarmDetails>;
};
function SoldDetails(props: SoldDetailsProps) {
	const { formik } = props;
	return (
		<Box sx={{ marginTop: '8px' }}>
			<Divider>
				<Typography variant='h6' gutterBottom>
					{'Sold Details'}
				</Typography>
			</Divider>
			<Box
				sx={{
					display: 'flex',
					gap: '8px',

					alignItems: { md: 'center' },
					paddingX: '8px',
					flexDirection: { xs: 'column', md: 'row' },
				}}
			>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<MobileDatePicker
						label='Start Date'
						format='dd-MM-yy'
						onChange={() => {}}
						value={formik.values.soldDetails.date}
					/>
				</LocalizationProvider>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Rate'
						id='SoldRate'
						name='soldDetails.rate'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.rate}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.rate &&
							Boolean(formik.errors?.soldDetails?.rate)
						}
						helperText={
							formik.touched?.soldDetails?.rate &&
							formik.errors?.soldDetails?.rate
						}
						type='number'
					/>
					<TextField
						label='Quantity'
						id='SoldQuantity'
						name='soldDetails.quantity'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									Kg
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.quantity}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.quantity &&
							Boolean(formik.errors?.soldDetails?.quantity)
						}
						helperText={
							formik.touched?.soldDetails?.quantity &&
							formik.errors?.soldDetails?.quantity
						}
						type='number'
					/>
				</Box>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Actual Yield'
						id='SoldActualYield'
						name='soldDetails.actualYield'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									Kg
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.actualYield}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.actualYield &&
							Boolean(formik.errors?.soldDetails?.actualYield)
						}
						helperText={
							formik.touched?.soldDetails?.actualYield &&
							formik.errors?.soldDetails?.actualYield
						}
						type='number'
					/>

					<TextField
						label='Transport Cost'
						id='SoldTransportCost'
						name='soldDetails.transportCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.transportCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.transportCost &&
							Boolean(formik.errors?.soldDetails?.transportCost)
						}
						helperText={
							formik.touched?.soldDetails?.transportCost &&
							formik.errors?.soldDetails?.transportCost
						}
						type='number'
					/>
				</Box>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Labour Cost'
						id='SoldLabourCost'
						name='soldDetails.labourCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.labourCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.labourCost &&
							Boolean(formik.errors?.soldDetails?.labourCost)
						}
						helperText={
							formik.touched?.soldDetails?.labourCost &&
							formik.errors?.soldDetails?.labourCost
						}
						type='number'
					/>
					<TextField
						label='Other Cost'
						id='SoldOtherCost'
						name='soldDetails.otherCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.otherCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.otherCost &&
							Boolean(formik.errors?.soldDetails?.otherCost)
						}
						helperText={
							formik.touched?.soldDetails?.otherCost &&
							formik.errors?.soldDetails?.otherCost
						}
						type='number'
					/>
				</Box>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Sold For'
						id='SoldSoldFor'
						name='soldDetails.soldFor'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.soldDetails.soldFor}
						onChange={formik.handleChange}
						error={
							formik.touched?.soldDetails?.soldFor &&
							Boolean(formik.errors?.soldDetails?.labourCost)
						}
						helperText={
							formik.touched?.soldDetails?.soldFor &&
							formik.errors?.soldDetails?.soldFor
						}
						type='number'
					/>
					<FormControlLabel
						control={
							<Android12Switch
								name='soldDetails.isCompleted'
								onChange={formik.handleChange}
								checked={formik.values.soldDetails.isCompleted}
							/>
						}
						className='text-gray-600 font-normal text-base leading-5 tracking-tighter p-0'
						label='Mark Completed'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default SoldDetails;
