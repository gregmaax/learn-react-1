import { Chart } from '../Chart/Chart';

export const ExpensesChart = (props: any) => {
	const chartDataPoints = [
		{
			label: 'Jan',
			value: 0,
		},
		{
			label: 'Fev',
			value: 0,
		},
		{
			label: 'Mar',
			value: 0,
		},
		{
			label: 'Avr',
			value: 0,
		},
		{
			label: 'Mai',
			value: 0,
		},
		{
			label: 'Jun',
			value: 0,
		},
		{
			label: 'Jul',
			value: 0,
		},
		{
			label: 'Aou',
			value: 0,
		},
		{
			label: 'Sep',
			value: 0,
		},
		{
			label: 'Oct',
			value: 0,
		},
		{
			label: 'Nov',
			value: 0,
		},
		{
			label: 'Dec',
			value: 0,
		},
	];

	for (const expense of props.expenses) {
		const expenseMonth: any = expense.date.getMonth(); //start at 0 : Jan = 0
		chartDataPoints[expenseMonth].value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};
