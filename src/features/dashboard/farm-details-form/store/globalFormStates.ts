import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface SectionState {
	formSection: Array<string>;
	currentActiveSectionIndex: number;
	setActiveSectionIndex: (sectionIndex: number) => void;
}

export const useSectionStore = create<SectionState>()(
	devtools(
		persist(
			set => ({
				formSection: [
					'Farm',
					'Crop',
					'Planting',
					'Fertilizer',
					'Irrigation',
					'Harvesting',
					'Sold',
				],
				currentActiveSectionIndex: 0,
				setActiveSectionIndex: sectionIndex =>
					set(state => ({
						...state,
						currentActiveSectionIndex: sectionIndex,
					})),
			}),
			{
				name: 'sections-storage',
			},
		),
	),
);
