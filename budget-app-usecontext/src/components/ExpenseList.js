import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const Expenselist = () => {

    const { expenseTransactions } = useContext(GlobalContext)
    console.log(expenseTransactions);

    return (
        <div className="transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className="transaction-list">

                {expenseTransactions.map((expenseTransaction, i) => {
                    return (
                        <li className="transaction" key={i}>
                            <span className="transaction-text">{expenseTransaction.incomeText}</span>
                            <span className="transaction-amount">${expenseTransaction.incomeAmount}</span>
                            <button className="delete-btn">X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Expenselist;


