import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="transaction">
            <span className="transaction-text">{expenseTransaction.expenseText}</span>
            <span className="transaction-amount">${expenseTransaction.expenseAmount}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(expenseTransaction.id)}> X</button>
        </li>
    )
}

export default ExpenseTransaction
