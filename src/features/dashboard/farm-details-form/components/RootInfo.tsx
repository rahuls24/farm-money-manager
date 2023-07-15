import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
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
type RootInfoProps = {
	formik: FormikProps<FarmDetails>;
};
const filter = createFilterOptions<string>();

function RootInfo(props: RootInfoProps) {
	const { formik } = props;
	return (
		<Box sx={{ marginTop: '8px' }}>
			<Divider>
				<Typography variant='h6' gutterBottom>
					{'Farm Details'}
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
				<Autocomplete
					value={formik.values.name}
					onChange={(event, newValue) => {
						if (typeof newValue === 'string') {
							const [isNewValue, value] =
								checkStringFormat(newValue);
							if (isNewValue) formik.setFieldValue('name', value);
							else formik.setFieldValue('name', newValue);
						}
					}}
					filterOptions={(options, params) => {
						const filtered = filter(options, params);

						const { inputValue } = params;
						// Suggest the creation of a new value
						const isExisting = options.some(
							option => inputValue === option,
						);
						if (inputValue !== '' && !isExisting) {
							filtered.push(`Add "${inputValue}"`);
						}

						return filtered;
					}}
					selectOnFocus
					clearOnBlur
					handleHomeEndKeys
					id='free-solo-with-text-demo'
					options={top100Films}
					renderOption={(props, option) => (
						<li {...props}>{option}</li>
					)}
					sx={{ width: { md: 300 } }}
					freeSolo
					renderInput={params => (
						<TextField
							{...params}
							autoFocus
							label='Farm Name'
							margin='normal'
							sx={{ marginTop: { md: '8px' } }}
							fullWidth
						/>
					)}
				/>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<MobileDatePicker
						defaultValue={new Date()}
						label='Start Date'
					/>
				</LocalizationProvider>
				<Box
					sx={{
						display: { xs: 'flex', md: 'block' },
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<TextField
						label='Area'
						id='area'
						name='area'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							endAdornment: (
								<InputAdornment position='end'>
									m^2
								</InputAdornment>
							),
						}}
						type='number'
						value={formik.values.area}
						onChange={formik.handleChange}
						error={
							formik.touched.area && Boolean(formik.errors.area)
						}
						helperText={formik.touched.area && formik.errors.area}
					/>
					<TextField
						label='Setup Expense'
						id='setupExpense'
						name='setupExpense'
						sx={{ m: 1, width: { xs: '15ch', md: '25ch' } }}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									₹
								</InputAdornment>
							),
						}}
						type='number'
						value={formik.values.setupExpense}
						onChange={formik.handleChange}
						error={
							formik.touched.setupExpense &&
							Boolean(formik.errors.setupExpense)
						}
						helperText={
							formik.touched.setupExpense &&
							formik.errors.setupExpense
						}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default RootInfo;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
	'The Shawshank Redemption',
	'The Godfather',
	'The Godfather: Part II',
	'The Dark Knight',
	'12 Angry Men',
	'Schindlers List',
	'Pulp Fiction',
	'The Lord of the Rings: The Return of the King',
	'The Good, the Bad and the Ugly',
	'Fight Club',
	'The Lord of the Rings: The Fellowship of the Ring',
	'Star Wars: Episode V - The Empire Strikes Back',
	'Forrest Gump',
	'Inception',
	'The Lord of the Rings: The Two Towers',
	"One Flew Over the Cuckoo's Nest",
	'Goodfellas',
	'The Matrix',
	'Seven Samurai',
	'Star Wars: Episode IV - A New Hope',
	'City of God',
	'Se7en',
	'The Silence of the Lambs',
	"It's a Wonderful Life",
	'Life Is Beautiful',
	'The Usual Suspects',
	'Léon: The Professional',
	'Spirited Away',
	'Saving Private Ryan',
];

// Util function
function checkStringFormat(
	inputString: string,
): [true, string] | [false, null] {
	const regex = /^Add "([^"]+)"$/; // Regular expression pattern
	const matches = inputString.match(regex); // Check if the inputString matches the pattern

	if (matches && matches.length === 2) {
		const inputValue = matches[1];
		return [true, inputValue]; // Return true and the extracted inputValue
	} else {
		return [false, null]; // Return false and null as inputValue
	}
}
