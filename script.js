
const placeOrderButton = document.getElementById('place-order');
const message = document.getElementById('message');
const orderSummary = document.getElementById('order-summary');
const addressSection = document.getElementById('address-section');
const addressInput = document.getElementById('address');
const addressSummary = document.getElementById('address-summary');
const orderTypeRadios = document.querySelectorAll('input[name="orderType"]');
const addonSummary = document.getElementById('addon-summary');
const noodleSummary = document.getElementById('noodle-summary');
const spiceSummary = document.getElementById('spice-summary');

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

const addonStock = {
    'egg': 10,
    'cheese': 10,
    'ham': 10,
    'sausage': 10,
    'corn': 10,
    'dumplings': 10
};

const noodleNames = {
    'buldak-original': 'Buldak Original',
    'buldak-carbonara': 'Buldak Carbonara',
    'chapagetti': 'Chapagetti'
};

const spiceNames = {
    'mild': 'Mild',
    'medium': 'Medium',
    'hot': 'Hot',
    'extra-hot': 'Extra Hot',
    'extreme': 'Extreme'
};

function updateAddonStock() {
    for (const key in addonStock) {
        const checkbox = document.getElementById(key);
        const stockSpan = document.getElementById(key + '-stock');
        const stock = addonStock[key];

        if (stock <= 0) {
            checkbox.checked = false;
            checkbox.disabled = true;
            stockSpan.textContent = '(Out of Stock)';
        } else {
            checkbox.disabled = false;
            stockSpan.textContent = '(' + stock + ' left)';
        }
    }
}

// Call the function when the page loads
updateAddonStock();

const spiceNoodles = ['buldak-original', 'buldak-carbonara'];

function updateSpiceOptions() {
    const selectedNoodle = document.querySelector('input[name="noodle"]:checked');
    const spiceRadios = document.querySelectorAll('input[name="spice"]');

    const allowsSpice = selectedNoodle !== null && spiceNoodles.includes(selectedNoodle.value);

    spiceRadios.forEach(function (radio) {
        if (allowsSpice) {
            radio.disabled = false;
        } else {
            radio.disabled = true;
            radio.checked = false;
        }
    });
}

function updateNoodleStock() {
    for (const key in noodleStock) {
        const radio = document.getElementById(key);
        const stockSpan = document.getElementById(key + '-stock');
        const stock = noodleStock[key];

        if (stock <= 0) {
            radio.checked = false;
            radio.disabled = true;
            stockSpan.textContent = '(Out of Stock)';
        } else {
            radio.disabled = false;
            stockSpan.textContent = '(' + stock + ' left)';
        }
    }
}

// Call the functions when the page loads
updateNoodleStock();
updateSpiceOptions();

// Place Order button
placeOrderButton.addEventListener('click', function () {
    const selected = document.querySelector('input[name="orderType"]:checked');
    const selectedNoodle = document.querySelector('input[name="noodle"]:checked');

    // Order type required
    if (selected === null) {
        message.textContent = 'Please select an order type';
        orderSummary.textContent = '';
        addressSummary.textContent = '';
        noodleSummary.textContent = '';
        spiceSummary.textContent = '';
        addonSummary.textContent = '';
        return;
    }

    // Check delivery address
    if (selected.value === 'delivery' && addressInput.value.trim() === '') {
        message.textContent = 'Please enter your delivery address';
        orderSummary.textContent = '';
        addressSummary.textContent = '';
        noodleSummary.textContent = '';
        spiceSummary.textContent = '';
        addonSummary.textContent = '';
        return;
    }

    // Noodle required
    if (selectedNoodle === null) {
        message.textContent = 'Please select a noodle';
        orderSummary.textContent = '';
        addressSummary.textContent = '';
        noodleSummary.textContent = '';
        spiceSummary.textContent = '';
        addonSummary.textContent = '';
        return;
    }

    // Spice required for noodles that support it
    const selectedSpice = document.querySelector('input[name="spice"]:checked');

    if (spiceNoodles.includes(selectedNoodle.value) && selectedSpice === null) {
        message.textContent = 'Please select a spice level';
        orderSummary.textContent = '';
        addressSummary.textContent = '';
        noodleSummary.textContent = '';
        spiceSummary.textContent = '';
        addonSummary.textContent = '';
        return;
    }

    // Get selected add-ons
    const selectedAddons = document.querySelectorAll('input[name="addon"]:checked');

    // Show selected noodle
    noodleSummary.textContent = 'Noodle: ' + noodleNames[selectedNoodle.value];

    // Show selected spice level
    if (selectedSpice !== null) {
        spiceSummary.textContent = 'Spice level: ' + spiceNames[selectedSpice.value];
    } else {
        spiceSummary.textContent = '';
    }

    // Show selected add-ons
    const addonNames = [];

    selectedAddons.forEach(function (addon) {
        addonNames.push(addon.value);
    });

    if (addonNames.length > 0) {
        addonSummary.textContent = 'Add-ons: ' + addonNames.join(', ');
    } else {
        addonSummary.textContent = 'Add-ons: None';
    }

    // Reduce stock of every ticked add-on
    selectedAddons.forEach(function (addon) {
        addonStock[addon.value] = addonStock[addon.value] - 1;
    });

    updateAddonStock();

    // Display order summary
    message.textContent = '';
    orderSummary.textContent = 'Your order type: ' + orderTypeNames[selected.value];

    if (selected.value === 'delivery') {
        addressSummary.textContent = 'Delivery address: ' + addressInput.value.trim();
    } else {
        addressSummary.textContent = '';
    }

    // Reduce stock and refresh the labels
    noodleStock[selectedNoodle.value] = noodleStock[selectedNoodle.value] - 1;
    updateNoodleStock();
    updateSpiceOptions();
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
        noodleSummary.textContent = '';
        spiceSummary.textContent = '';
        addonSummary.textContent = '';

    });
});

// Enable or disable spice options when the noodle changes
const noodleRadios = document.querySelectorAll('input[name="noodle"]');

noodleRadios.forEach(function (radio) {
    radio.addEventListener('change', updateSpiceOptions);
});

// Category navigation: scroll to the clicked section
const categoryButtons = document.querySelectorAll('#categories button');

categoryButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const target = document.getElementById(button.dataset.target);
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight the category whose section is currently visible
const sections = document.querySelectorAll('#noodles, #drinks, #desserts');

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            categoryButtons.forEach(function (button) {
                button.classList.toggle('active', button.dataset.target === entry.target.id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(function (section) {
    observer.observe(section);
});
