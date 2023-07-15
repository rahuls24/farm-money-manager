import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { FormikProps } from 'formik';
import { FarmDetails } from '../farmDetailsFormSchema';
type PlantingDetailsProps = {
	formik: FormikProps<FarmDetails>;
};
function HarvestDetails(props: PlantingDetailsProps) {
	const { formik } = props;
	return (
		<Box sx={{ marginTop: '8px' }}>
			<Divider>
				<Typography variant='h6' gutterBottom>
					{'Harvest Details'}
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
						format="dd-MM-yy"
						onChange={() => {}}
						value={formik.values.harvestDetails.date}
					/>
				</LocalizationProvider>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Quantity'
						id='harvestQuantity'
						name='harvestDetails.quantity'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									Kg
								</InputAdornment>
							),
						}}
						value={formik.values.harvestDetails.quantity}
						onChange={formik.handleChange}
						error={
							formik.touched?.harvestDetails?.quantity &&
							Boolean(formik.errors?.harvestDetails?.quantity)
						}
						helperText={
							formik.touched?.harvestDetails?.quantity &&
							formik.errors?.harvestDetails?.quantity
						}
						type='number'
					/>
					<TextField
						label='Transport Cost'
						id='harvestTransportCost'
						name='harvestDetails.transportCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.harvestDetails.transportCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.harvestDetails?.transportCost &&
							Boolean(
								formik.errors?.harvestDetails?.transportCost,
							)
						}
						helperText={
							formik.touched?.harvestDetails?.transportCost &&
							formik.errors?.harvestDetails?.transportCost
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
						id='harvestLabourCost'
						name='harvestDetails.labourCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.harvestDetails.labourCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.harvestDetails?.labourCost &&
							Boolean(formik.errors?.harvestDetails?.labourCost)
						}
						helperText={
							formik.touched?.harvestDetails?.labourCost &&
							formik.errors?.harvestDetails?.labourCost
						}
						type='number'
					/>
					<TextField
						label='Other Cost'
						id='harvestOtherCost'
						name='harvestDetails.otherCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.harvestDetails.otherCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.harvestDetails?.otherCost &&
							Boolean(formik.errors?.harvestDetails?.otherCost)
						}
						helperText={
							formik.touched?.harvestDetails?.otherCost &&
							formik.errors?.harvestDetails?.otherCost
						}
						type='number'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default HarvestDetails;
