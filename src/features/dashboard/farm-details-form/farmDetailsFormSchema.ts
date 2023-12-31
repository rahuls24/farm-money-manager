import * as yup from 'yup';
export const farmDetailsSchema = yup.object().shape({
	name: yup.string().required('Farm name is required'),
	startDate: yup.date().required('Start date is required'),
	expectedDate: yup.date().required('Expected date is required'),
	area: yup
		.number()
		.required('Farm area is required')
		.min(1, 'Farm area should be at least 1'),
	setupExpense: yup.number().required('Setup expense is required'),
	cropDetails: yup
		.object()
		.shape({
			name: yup.string().required('Crop name is required'),
			variety: yup.string().required('Crop variety is required'),
			expectedYield: yup
				.number()
				.required('Expected yield is required')
				.min(1, 'Expected yield should be at least 1'),
			price: yup.number().required('Crop price is required'),
			quantity: yup
				.number()
				.required('Crop quantity is required')
				.min(0.1, 'Crop quantity should be at least 0.1'),
		})
		.required(),
	plantingDetails: yup
		.object()
		.shape({
			date: yup.date().required('Planting date is required'),
			plowingCost: yup.number().required('Plowing cost is required'),
			labourCost: yup.number().required('Labour cost is required'),
			irrigationCost: yup.number(),
			otherCost: yup.number(),
		})
		.required(),
	fertilizerDetails: yup
		.array()
		.of(
			yup.object().shape({
				name: yup.string().required('Fertilizer name is required'),
				type: yup.string().required('Fertilizer type is required'),
				quantity: yup
					.number()
					.required('Fertilizer quantity is required')
					.min(0.1, 'Fertilizer quantity should be at least 0.1'),
				price: yup.number().required('Fertilizer price is required'),
				date: yup.date().required('Fertilizer date is required'),
			}),
		)
		.required(),
	harvestDetails: yup
		.object()
		.shape({
			date: yup.date().required('Harvest date is required'),
			quantity: yup.number().required('Harvest quantity is required'),
			transportCost: yup.number().required('Transport cost is required'),
			labourCost: yup.number().required('Labour cost is required'),
			otherCost: yup.number(),
		})
		.required(),
	soldDetails: yup
		.object()
		.shape({
			date: yup.date().required('Sale date is required'),
			rate: yup.number().min(1, 'Rate should be at least 1'),
			quantity: yup.number().required('Sale quantity is required'),
			transportCost: yup.number(),
			labourCost: yup.number(),
			otherCost: yup.number(),
			soldFor: yup.number().required('Sold for price is required'),
			actualYield: yup.number().required('Actual yield is required'),
			isCompleted: yup.boolean(),
		})
		.required(),
});

export type FarmDetails = yup.InferType<typeof farmDetailsSchema>;
