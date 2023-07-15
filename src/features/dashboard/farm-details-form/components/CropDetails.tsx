import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormikProps } from 'formik';
import { FarmDetails } from '../farmDetailsFormSchema';
type CropDetailsProps = {
	formik: FormikProps<FarmDetails>;
};
function CropDetails(props: CropDetailsProps) {
	const { formik } = props;
	return (
		<Box sx={{ marginTop: '8px' }}>
			<Divider>
				<Typography variant='h6' gutterBottom>
					{'Crop Details'}
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
				<TextField
					label='Name'
					id='cropName'
					name='cropDetails.name'
					value={formik.values.cropDetails.name}
					onChange={formik.handleChange}
					error={
						formik.touched?.cropDetails?.name &&
						Boolean(formik.errors.cropDetails?.name)
					}
					helperText={
						formik.touched.cropDetails?.name &&
						formik.errors.cropDetails?.name
					}
				/>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
					}}
				>
					<TextField
						label='Variety'
						id='cropVariety'
						name='cropDetails.variety'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						value={formik.values.cropDetails.variety}
						onChange={formik.handleChange}
						error={
							formik.touched?.cropDetails?.variety &&
							Boolean(formik.errors?.cropDetails?.variety)
						}
						helperText={
							formik.touched?.cropDetails?.variety &&
							formik.errors?.cropDetails?.variety
						}
					/>
					<TextField
						label='Expected Yield'
						id='cropExpectedYield'
						name='cropDetails.expectedYield'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						value={formik.values.cropDetails.expectedYield}
						onChange={formik.handleChange}
						type='number'
						error={
							formik.touched?.cropDetails?.expectedYield &&
							Boolean(formik.errors?.cropDetails?.expectedYield)
						}
						helperText={
							formik.touched?.cropDetails?.expectedYield &&
							formik.errors?.cropDetails?.expectedYield
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
						label='Price'
						id='cropPrice'
						name='cropDetails.price'
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						type='number'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						value={formik.values.cropDetails.price}
						onChange={formik.handleChange}
						error={
							formik.touched?.cropDetails?.price &&
							Boolean(formik.errors?.cropDetails?.price)
						}
						helperText={
							formik.touched?.cropDetails?.price &&
							formik.errors?.cropDetails?.price
						}
					/>
					<TextField
						label='Quantity'
						id='cropQuantity'
						name='cropDetails.quantity'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						value={formik.values.cropDetails.quantity}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									Kg
								</InputAdornment>
							),
						}}
						type='number'
						onChange={formik.handleChange}
						error={
							formik.touched?.cropDetails?.quantity &&
							Boolean(formik.errors?.cropDetails?.quantity)
						}
						helperText={
							formik.touched?.cropDetails?.quantity &&
							formik.errors?.cropDetails?.quantity
						}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default CropDetails;
