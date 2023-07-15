import CloseIcon from '@mui/icons-material/Close';
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
import FormSections from './components/FormSections';
import RootInfo from './components/RootInfo';
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
		<Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
			<Dialog
				fullScreen
				open={open}
				onClose={onCloseHandler}
				TransitionComponent={Transition}
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
			</Dialog>
		</Box>
	);
}

export default FarmDetailsForm;
