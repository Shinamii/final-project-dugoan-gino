const placeOrderButton = document.getElementById('place-order');
const message = document.getElementById('message');
const orderSummary = document.getElementById('order-summary');
const addressSection = document.getElementById('address-section');
const addressInput = document.getElementById('address');
const addressSummary = document.getElementById('address-summary');
const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');

const orderTypeNames = {
    'dine-in': 'Dine-in',
    'take-out': 'Take-out',
    'delivery': 'Delivery'
};

const noodleStock = {
    'buldak-original': 10,
    'buldak-carbonara': 10,
    'chapagetti': 10
};

function updateNoodleStock() {
    for (const key in noodleStock) {
        const radio = document.getElementById(key);
        const stockSpan = document.getElementById(key + '-stock');
        const stock = noodleStock[key];

        if (stock === 0) {
            radio.disabled = true;
            stockSpan.textContent = '(Out of Stock)';
        } else {
            radio.disabled = false;
            stockSpan.textContent = '(' + stock + ' left)';
        }
    }
}

// Call the function when the page loads
updateNoodleStock();

// Place Order button
placeOrderButton.addEventListener('click', function () {
    const selected = document.querySelector('input[name="orderType"]:checked');
    const selectedNoodle = document.querySelector('input[name="noodle"]:checked');

    // Order type required
    if (selected === null) {
        message.textContent = 'Please select an order type';
        orderSummary.textContent = '';
        addressSummary.textContent = '';
        return;

        // Check delivery address
        if (selected.value === 'delivery' && addressInput.value.trim() === '') {
            message.textContent = 'Please enter your delivery address';
            orderSummary.textContent = '';
            addressSummary.textContent = '';
            return;
        }

        // Display order summary
        message.textContent = '';
        orderSummary.textContent = 'Your order type: ' + orderTypeNames[selected.value];

        if (selected.value === 'delivery') {
            addressSummary.textContent = 'Delivery address: ' + addressInput.value.trim();
        } else {
            addressSummary.textContent = '';
        }

    }
});

// Show or hide delivery address
orderTypeRadios.forEach(function (radio) {
    radio.addEventListener('change', function () {

        if (radio.value === 'delivery') {
            addressSection.hidden = false;
        } else {
            addressSection.hidden = true;
            addressInput.value = '';
            addressSummary.textContent = '';
        }

        message.textContent = '';
        orderSummary.textContent = '';

    });
});