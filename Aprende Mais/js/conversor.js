function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Taxas de câmbio fictícias para exemplo
    const exchangeRates = {
        "BRL": { "USD": 0.20, "EUR": 0.18, "GBP": 0.16 },
        "USD": { "BRL": 5.0, "EUR": 0.90, "GBP": 0.80 },
        "EUR": { "BRL": 5.5, "USD": 1.1, "GBP": 0.88 },
        "GBP": { "BRL": 6.2, "USD": 1.25, "EUR": 1.14 }
    };

    if (amount === "" || amount <= 0) {
        document.getElementById('result').innerText = "Por favor, insira um valor válido.";
        return;
    }

    const convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').innerText = `${amount} ${fromCurrency} equivale a ${convertedAmount.toFixed(2)} ${toCurrency}`;
}