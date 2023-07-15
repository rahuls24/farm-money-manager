import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { useSectionStore } from '../store/globalFormStates';

export default function FormSections() {
	const setCurrentActiveSectionIndex = useSectionStore(
		state => state.setActiveSectionIndex,
	);
	const sections = useSectionStore(state => state.formSection);
	const currentActiveSectionIndex = useSectionStore(
		state => state.currentActiveSectionIndex,
	);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setCurrentActiveSectionIndex(newValue);
	};

	return (
		<Box
			sx={{
				maxWidth: { xs: '100%' },
				bgcolor: 'background.paper',
			}}
		>
			<Tabs
				value={currentActiveSectionIndex}
				onChange={handleChange}
				variant='scrollable'
				scrollButtons='auto'
				aria-label='scrollable from sections tab'
				sx={{
					marginLeft: 0,
				}}
			>
				{sections.map(section => (
					<Tab label={section} />
				))}
			</Tabs>
		</Box>
	);
}
