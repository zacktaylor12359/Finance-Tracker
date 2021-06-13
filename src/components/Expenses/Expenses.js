import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"

function Expenses (props) {
    return(
            <Card className = "expenses">
                <ExpenseItem 
                    title = {props.expenseInfo[0].title}
                    amount = {props.expenseInfo[0].amount}
                    date = {props.expenseInfo[0].date}
                />
                <ExpenseItem 
                    title = {props.expenseInfo[1].title}
                    amount = {props.expenseInfo[1].amount}
                    date = {props.expenseInfo[1].date}
                />
                <ExpenseItem 
                    title = {props.expenseInfo[2].title}
                    amount = {props.expenseInfo[2].amount}
                    date = {props.expenseInfo[2].date}
                />
                <ExpenseItem 
                    title = {props.expenseInfo[3].title}
                    amount = {props.expenseInfo[3].amount}
                    date = {props.expenseInfo[3].date}
                />
            </Card>
    )
}

export default Expenses