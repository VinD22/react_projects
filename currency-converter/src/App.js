import React, { useState, useEffect } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = "https://api.exchangeratesapi.io/latest";

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([])
  //console.log(currencyOptions)

  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  const [exhangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exhangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exhangeRate;
  }

  const handleFromAmountChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  const handleAmountToChange = (e) => {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  console.log(exhangeRate);

  useEffect(() => {
    if (toCurrency != null && fromCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [toCurrency, fromCurrency])

  useEffect(() => {
    // Make an API call to the base url and fetch data. 
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const firstCurrency = Object.keys(data.rates)[0]; // get first option from the array.
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]) // Format of response is CAD: 1.4372 CAD is the keys part and 1.4372 is the values part
        setFromCurrency(data.base);
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency]) // Getting value of the first item in the rates field. 
      })
  }, []) // Empty array so will only be called the first time our app loads.  

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        amount={fromAmount}
        onChangeAmount={handleFromAmountChange}
      />
      <div className="equals">=</div>
      <CurrencyRow currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleAmountToChange}
      />
    </>
  );
}

export default App;
