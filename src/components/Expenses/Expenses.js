import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
	const [year, setYear] = useState('Show All');

	const filterChangeHandler = (enteredFilterYear) => {
		console.log(enteredFilterYear);
		setYear(enteredFilterYear);
	};

	const filteredExpenses = props.expenseInfo.filter((expense) => {
		if (year === 'Show All') {
			return expense;
		} else {
			return expense.date.getFullYear().toString() === year;
		}
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					onChangeFilterYear={filterChangeHandler}
					defaultYear={year}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList
					filterYear={year}
					expenseInfo={filteredExpenses}
				/>
			</Card>
		</div>
	);
}

export default Expenses;
