// cart.js
document.getElementById('quantity').addEventListener('input', function() {
    let quantity = parseInt(this.value) || 1;
    let pricePerItem = 3879; // Price of Blue Omega SA
    let subtotal = pricePerItem * quantity;

    // Update total price for item
    document.getElementById('item-total').textContent = subtotal.toFixed(2);

    // Calculate tax (8%)
    let tax = subtotal * 0.08;

    // Update cart summary
    let total = subtotal + tax;
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${total.toFixed(2)}`;
});

// Placeholder function for checkout
function checkout() {
    alert("Proceeding to checkout...");
    // You can replace this with actual checkout logic
}
