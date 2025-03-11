import React, { useState, useEffect } from "react";
import './Exchange.css';

const Exchange = () => {
    const [exchangeRates, setExchangeRates] = useState({ rates: {} });
    const [currencies, setCurrencies] = useState({});
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("EUR");
    const [toCurrency, setToCurrency] = useState("USD");
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        fetch('https://api.frankfurter.app/latest')
            .then(response => response.json())
            .then(data => setExchangeRates(data));
    }, []);

    useEffect(() => {
        fetch("https://api.frankfurter.app/currencies")
            .then(response => response.json())
            .then(data => setCurrencies(data));
    }, []);

    const convertCurrency = () => {
        if (fromCurrency === "EUR") {
            setConvertedAmount((amount * exchangeRates.rates[toCurrency]).toFixed(2));
        } else if (toCurrency === "EUR") {
            setConvertedAmount((amount / exchangeRates.rates[fromCurrency]).toFixed(2));
        } else {
            const amountInEur = amount / exchangeRates.rates[fromCurrency];
            setConvertedAmount((amountInEur * exchangeRates.rates[toCurrency]).toFixed(2));
        }
    };

    return (
        <div className="container exchange">
            <h1>Exchange</h1>
            <label>
                Amount:
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
            </label>
            <p>
                <label>
                    From:
                    <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                        {Object.keys(currencies).map(currency => (
                            <option key={currency} value={currency}>{currency} - {currencies[currency]}</option>
                        ))}
                    </select>
                </label>
            
                <label>
                    To:
                    <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                        {Object.keys(currencies).map(currency => (
                            <option key={currency} value={currency}>{currency} - {currencies[currency]}</option>
                        ))}
                    </select>
                </label>
           
                <button onClick={convertCurrency}>Convert</button> 
            
                {convertedAmount !== null && (
                    <h2>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h2>
                )}
            </p>
        </div>
    );
};

export default Exchange;
