function updateCost(clickedId, cost) {
    const accessories = document.getElementById(clickedId);
    accessories.innerText = cost;
    updateTotalPrice();

}

function updateTotalPrice() {
    const memory = document.getElementById('memory-cost');
    const memoryCost = parseInt(memory.innerText);
    const storage = document.getElementById('storage-cost');
    const storageCost = parseInt(storage.innerText);
    const delivery = document.getElementById('delivery-charge');
    const deliveryCharge = parseInt(delivery.innerText);
    const total = document.getElementById('total-price');
    total.innerText = 1299 + memoryCost + storageCost + deliveryCharge;
    const totalWithDiscount = document.getElementById('total-with-discount');
    const totalWithDiscountAmount = total.innerText;
    totalWithDiscount.innerText = totalWithDiscountAmount;
    const discountInput = document.getElementById('discount-input').value;
    if (discountInput === 'stevekaku') {
        totalWithDiscount.innerText = totalWithDiscountAmount * .8;
    }
}
document.getElementById('buttons').addEventListener('click', function(event) {
    const clickedId = event.target.id;
    if (clickedId == 'initial-memory') {
        updateCost('memory-cost', 0);
    } else if (clickedId == 'upgrade-memory') {
        updateCost('memory-cost', 180);
    } else if (clickedId == 'initial-storage') {
        updateCost('storage-cost', 0);
    } else if (clickedId == 'upgrade-little-storage') {
        updateCost('storage-cost', 100);
    } else if (clickedId == 'upgrade-full-storage') {
        updateCost('storage-cost', 180);
    } else if (clickedId == 'free-shipping') {
        updateCost('delivery-charge', 0);
    } else if (clickedId == 'paid-shipping') {
        updateCost('delivery-charge', 20);
    }
})
document.getElementById('discount-button').addEventListener('click', function() {
    updateTotalPrice();
})