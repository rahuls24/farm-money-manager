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
function PlantingDetails(props: PlantingDetailsProps) {
	const { formik } = props;
	return (
		<Box sx={{ marginTop: '8px' }}>
			<Divider>
				<Typography variant='h6' gutterBottom>
					{'Planting Details'}
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
						onChange={() => {}}
						format='dd-MM-yy'
						value={formik.values.plantingDetails.date}
					/>
				</LocalizationProvider>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Plowing Cost'
						id='plantingPlowingCost'
						name='plantingDetails.plowingCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.plantingDetails.plowingCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.plantingDetails?.plowingCost &&
							Boolean(formik.errors?.plantingDetails?.plowingCost)
						}
						helperText={
							formik.touched?.plantingDetails?.plowingCost &&
							formik.errors?.plantingDetails?.plowingCost
						}
						type='number'
					/>
					<TextField
						label='Labour Cost'
						id='plantingLabourCost'
						name='plantingDetails.labourCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						value={formik.values.plantingDetails.labourCost}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						onChange={formik.handleChange}
						type='number'
						error={
							formik.touched?.plantingDetails?.labourCost &&
							Boolean(formik.errors?.plantingDetails?.labourCost)
						}
						helperText={
							formik.touched?.plantingDetails?.labourCost &&
							formik.errors?.plantingDetails?.labourCost
						}
					/>
				</Box>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Irrigation Cost'
						id='plantingIrrigationCost'
						name='plantingDetails.irrigationCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.plantingDetails.irrigationCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.plantingDetails?.irrigationCost &&
							Boolean(
								formik.errors?.plantingDetails?.irrigationCost,
							)
						}
						helperText={
							formik.touched?.plantingDetails?.irrigationCost &&
							formik.errors?.plantingDetails?.irrigationCost
						}
						type='number'
					/>
					<TextField
						label='Other Cost'
						id='plantingOtherCost'
						name='plantingDetails.otherCost'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						value={formik.values.plantingDetails.otherCost}
						onChange={formik.handleChange}
						error={
							formik.touched?.plantingDetails?.otherCost &&
							Boolean(formik.errors?.plantingDetails?.otherCost)
						}
						helperText={
							formik.touched?.plantingDetails?.otherCost &&
							formik.errors?.plantingDetails?.otherCost
						}
						type='number'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default PlantingDetails;
