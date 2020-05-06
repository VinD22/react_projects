import React from 'react'

const Balance = () => {
    return (
        <div className="balance">
            <h2>Balance</h2>
            <h3>$100.00</h3>
            <div className="income-expense">
                <div className="plus">
                    <h3>Income</h3>
                    <p>+$0.0</p>
                </div>
                <div className="minus">
                    <h3>Expenses</h3>
                    <p>-$0.0</p>
                </div>

            </div>
        </div>
    )
}

export default Balance
