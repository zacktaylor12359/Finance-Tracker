import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
	const [showExpenseForm, setShowExpenseForm] = useState(false);
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		setShowExpenseForm(false);
	};

	const hideExpenseHandler = () => {
		setShowExpenseForm(false);
	};

	const showExpenseHandler = () => {
		setShowExpenseForm(true);
	};

	return (
		<div className="new-expense">
			{showExpenseForm === false ? (
				<button onClick={showExpenseHandler}>Add Expense</button>
			) : (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancelClick={hideExpenseHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
