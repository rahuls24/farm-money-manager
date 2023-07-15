import { addMonths } from 'date-fns';

export const initialState = {
	name: '',
	startDate: new Date(),
	expectedDate: addMonths(new Date(), 6),
	area: 0,
	setupExpense: 0,
	cropDetails: {
		name: '',
		variety: '',
		expectedYield: 0,
		price: 0,
		quantity: 0,
	},
	plantingDetails: {
		date: new Date(),
		plowingCost: 0,
		labourCost: 0,
		irrigationCost: 0,
		otherCost: 0,
	},
	fertilizerDetails: [],
	harvestDetails: {
		date: new Date(),
		quantity: 0,
		transportCost: 0,
		labourCost: 0,
		otherCost: 0,
	},
	soldDetails: {
		date: new Date(),
		rate: 0,
		quantity: 0,
		transportCost: 0,
		labourCost: 0,
		otherCost: 0,
		soldFor: 0,
		actualYield: 0,
		isCompleted: false,
	},
};
