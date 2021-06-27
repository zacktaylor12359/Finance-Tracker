import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
	const [year, setYear] = useState(new Date().getFullYear());

	const filterChangeHandler = (enteredFilterYear) => {
		console.log(enteredFilterYear);
		setYear(enteredFilterYear);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onChangeFilterYear={filterChangeHandler}
					defaultYear={year}
				/>
				{props.expenseInfo.map((expense) => (
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
}

export default Expenses;
