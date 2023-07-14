import Paper from '@mui/material/Paper';
import Card from '../../components/Card/Card';
function Dashboard() {
	return (
		<Paper
			sx={{
				minHeight: '85vh',
				marginX: '8px',
				marginY: '8px',
			}}
			elevation={3}
		>
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
		</Paper>
	);
}

export default Dashboard;
