import CloseIcon from '@mui/icons-material/Close';
import LoadingButton from '@mui/lab/LoadingButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { TransitionProps } from '@mui/material/transitions';
import { useFormik } from 'formik';
import * as React from 'react';
import CropDetails from './components/CropDetails';
import FormSections from './components/FormSections';
import HarvestDetails from './components/HarvestDetails';
import PlantingDetails from './components/PlantingDetails';
import RootInfo from './components/RootInfo';
import SoldDetails from './components/SoldDetails';
import { initialState } from './constants/initialFormState';
import { FarmDetails, farmDetailsSchema } from './farmDetailsFormSchema';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

type FarmDetailsFormProps = {
	open: boolean;
	onCloseHandler: () => void;
};
function FarmDetailsForm(props: FarmDetailsFormProps) {
	const { open, onCloseHandler } = props;
	const formik = useFormik<FarmDetails>({
		validationSchema: farmDetailsSchema,
		initialValues: initialState,
		onSubmit: async (values: any) => {
			console.log('from on submit', values);
		},
	});
	console.log({ value: formik.values });
	return (
		<Dialog
			fullScreen
			open={open}
			onClose={onCloseHandler}
			TransitionComponent={Transition}
		>
			<Box
				component='form'
				onSubmit={formik.handleSubmit}
				sx={{ overflowY: 'scroll' }}
				className='scroll'
			>
				<AppBar sx={{ position: 'relative' }}>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={onCloseHandler}
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
						<Typography
							sx={{ ml: 2, flex: 1 }}
							variant='h6'
							component='div'
						>
							{'Add new'}
						</Typography>
						<Button color='inherit' type='submit'>
							Save
						</Button>
					</Toolbar>
				</AppBar>
				<FormSections />
				<RootInfo formik={formik} />
				<CropDetails formik={formik} />
				<PlantingDetails formik={formik} />
				<HarvestDetails formik={formik} />
				<SoldDetails formik={formik} />
				<Box sx={{ paddingX: '8px' }}>
					<LoadingButton
						loading={false}
						type='submit'
						loadingPosition='end'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Save
					</LoadingButton>
				</Box>
			</Box>
		</Dialog>
	);
}

export default FarmDetailsForm;
