function calculateTotal() {
    var subtotal = parseFloat(document.getElementById('subtotal').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    var totalAmount = subtotal * (1 + tipPercentage / 100);

    document.getElementById('total').textContent = 'Total Amount (including tip): $' + totalAmount.toFixed(2);
}