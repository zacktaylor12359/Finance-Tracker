import Chart from '../Chart/Chart';

const YearlyExpensesChart = (props) => {
	const chartDataPoints = [];
	for (const expense of props.expenses) {
		const expenseYear = expense.date.getFullYear().toString();

		let result = chartDataPoints.find((dataPoint) => {
			return dataPoint.label === expenseYear;
		});

		if (!result) {
			chartDataPoints.push({ label: expenseYear, value: 0 });
			result = chartDataPoints.find((dataPoint) => {
				return dataPoint.label === expenseYear;
			});
		}

		result.value += expense.amount;
	}

	return <Chart dataPoints={chartDataPoints} />;
};

export default YearlyExpensesChart;
