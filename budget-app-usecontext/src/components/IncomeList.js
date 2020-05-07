import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const IncomeList = () => {

    const { incomeTransactions } = useContext(GlobalContext)
    console.log(incomeTransactions)

    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map((incomeTransaction, i) => {
                    return (
                        <li className="transaction" key={i}>
                            <span className="transaction-text">{incomeTransaction.incomeText}</span>
                            <span className="transaction-amount">${incomeTransaction.incomeAmount}</span>
                            <button className="delete-btn">X</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default IncomeList
