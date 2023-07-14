import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import EditIcon from '@mui/icons-material/Edit';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import MaterialUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CardProps = {
	farmName: string;
	cropName: string;
	cropType: string;
	status: string;
	statusCompletionPercentage: number;
	totalSpent: number;
	soldFor: number;
	earning: number;
};
function Card(props: CardProps) {
	const {
		farmName,
		cropName,
		cropType,
		status,
		statusCompletionPercentage,
		totalSpent,
		soldFor,
		earning,
	} = props;
	const moneyData = [
		{
			title: 'Spent',
			value: totalSpent,
		},
		{
			title: 'Sold',
			value: soldFor,
		},
		{
			title: earning > 0 ? 'Earning' : 'Loss',
			value: earning,
		},
	];
	return (
		<MaterialUICard
			sx={{
				maxWidth: { md: '400px' },
				minWidth: { md: '400px' },
				maxHeight: { md: '230px' },
				minHeight: { md: '230px' },
			}}
		>
			<CardHeader
				action={
					<IconButton aria-label='edit'>
						<EditIcon />
					</IconButton>
				}
				avatar={
					<Avatar aria-label='crop type'>
						{cropType.substring(0, 1)}
					</Avatar>
				}
				title={farmName}
				subheader={cropName}
			/>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<Typography>{`Status - ${status}`}</Typography>
					<Box maxWidth={'32px'} maxHeight={'32px'}>
						<CircularProgressbar
							value={statusCompletionPercentage}
							text={`${statusCompletionPercentage}`}
							styles={buildStyles({
								// Text size
								textSize: '28px',
								pathColor: `rgba(62, 152, 199, ${
									statusCompletionPercentage / 100
								})`,
								textColor: 'rgba(0, 0, 0, 0.87)',
								trailColor: '#d6d6d6',
								backgroundColor: '#3e98c7',
							})}
						/>
					</Box>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: '12px',
					}}
				>
					{moneyData.map(({ title, value }) => (
						<Box>
							<Typography>{title}</Typography>
							<Box
								sx={{
									display: 'flex',
									marginLeft: '-3px',
									alignItems: 'center',
								}}
							>
								<CurrencyRupeeIcon fontSize='small' />
								{/* Do the coloring for this */}
								<Typography>{Math.abs(value)}</Typography>
							</Box>
						</Box>
					))}
				</Box>
			</CardContent>
		</MaterialUICard>
	);
}

export default Card;
