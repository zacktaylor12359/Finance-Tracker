import './ExpenseDate.css'

function ExpenseDate (props) {
    return (
        <div className="expense-date">
            <div className="expense-date__month">
                {props.date.toLocaleString('default', {month: 'short'})}
            </div>
            <div className="expense-date__year">
                {props.date.getUTCFullYear()}
            </div>
            <div className="expense-date__day">
                {props.date.getUTCDate()}
            </div>
        </div>
    )
}

export default ExpenseDate