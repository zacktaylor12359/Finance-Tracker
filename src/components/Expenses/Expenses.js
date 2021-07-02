import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
	const [year, setYear] = useState("Show All");

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
				{year === "Show All"
					? props.expenseInfo.map((expense) => (
							<ExpenseItem
								key={expense.id}
								title={expense.title}
								amount={expense.amount}
								date={expense.date}
							/>
					  ))
					: props.expenseInfo
							.filter(
								(expense) =>
									expense.date.getFullYear().toString() ===
									year
							)
							.map((expense) => (
								<ExpenseItem
									key={expense.id}
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
