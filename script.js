let amount;
amount = document.getElementById('amount');
let fromCurrency = document.getElementById('from');
let toCurrency = document.getElementById('to');
let convert = document.getElementById('button');
let resultElement = document.getElementById('result')
convert.addEventListener("click", exchange)
let result

function exchange() {
    if (from.value === to.value) {
        resultElement.innerHTML = "Result: " + amount.value + " " + fromCurrency.value
    } else {
        if (from.value === "USD") {
            result = parseFloat(amount.value) / 23000
            resultElement.innerHTML = "Result: " + result + " " + toCurrency.value
        } else {
            result = parseFloat(amount.value) * 23000
            resultElement.innerHTML = "Result: " + result + " " + toCurrency.value
        }

    }
}