import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Card from '../../components/Card/Card';
function Dashboard() {
	return (
		<Paper
			sx={{
				minHeight: { xs: '90vh', md: '87vh' },
				maxHeight: { xs: '90vh', md: '87vh' },
				marginX: '8px',
				marginTop: '8px',
				overflowY: 'scroll',
			}}
			className='scroll'
			elevation={3}
		>
			{[1, 2, 3, 4, 6, 7].map(() => (
				<Card
					farmName='Example Farm'
					cropName='Tomatoes'
					cropType='Kharif'
					status='In Progress'
					statusCompletionPercentage={75}
					totalSpent={1000}
					soldFor={1500}
					earning={500}
				/>
			))}

			<Fab
				color='primary'
				aria-label='add'
				sx={{
					margin: 0,
					right: 20,
					bottom: { xs: 24, md: 20 },
					position: 'fixed',
				}}
			>
				<AddIcon />
			</Fab>
		</Paper>
	);
}

export default Dashboard;
