import "./ExpenseDate.css";

function ExpenseDate(props) {
	const date = new Date(props.date);
	return (
		<div className="expense-date">
			<div className="expense-date__month">
				{date.toLocaleString("default", { month: "short" })}
			</div>
			<div className="expense-date__year">{date.getUTCFullYear()}</div>
			<div className="expense-date__day">{date.getUTCDate()}</div>
		</div>
	);
}

export default ExpenseDate;
