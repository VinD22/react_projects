import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";
import ExpenseTransaction from "./ExpenseTransaction";

const Expenselist = () => {

    const { expenseTransactions } = useContext(GlobalContext)
    console.log(expenseTransactions);

    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">

                {expenseTransactions.map((expenseTransaction, i) => {
                    return (
                        <ExpenseTransaction key={i} expenseTransaction={expenseTransaction} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Expenselist;


