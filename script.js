const placeOrderButton = document.getElementById('place-order');
const message = document.getElementById('message');

placeOrderButton.addEventListener('click', function () {
    const selected = document.querySelector('input[name="orderType"]:checked');

    if (selected === null) {
        // show the error message here
    } else {
        // clear the message and continue here
    }
});