# Acceptance Criteria

### Feature: Order Type Selection
US1: Select an order type
- AC1.1: Given I am on the Order page, when the page loads, then I see three order types, Delivery, Dine-in, and 
Take-out, and none is selected by default.
- AC1.2: Given I am viewing the order types, when I select one, then only that option is selected.
- AC1.3: Given I have not selected an order type, when I click "Place Order," then I see the message "Please select an 
order type" and the order is not submitted.

### Feature: Meal Customization
US2: Customize my meal
- AC2.1: Given I am on the Order page, when I view the noodle varieties, then I 
see Buldak Original, Buldak Carbonara, 
and Chapagetti, and only one noodle variety can be selected at a time. Unavailable noodle varieties are marked as "Out 
of Stock" and cannot be selected.

- AC2.2: Given I select a noodle that allows spice customization (Buldak Original or Buldak Carbonara), when I view the 
spice level options, then I see Mild, Medium, Hot, Extra Hot, and Extreme, and only one can be selected at a time. If I 
select Chapagetti, the spice level options are disabled.

- AC2.3:Given I am on the Order page, when I view the available add-ons, drinks, and desserts, then I see their 
respective options and can select multiple items. Unavailable items are marked as "Out of Stock" and cannot be selected.

### Feature: Payment Method Selection
US3: Select a payment method
- AC3.1: Given I selected an order type (Delivery, Dine-in, or Take-out), when I view the payment options, then, for 
Delivery, I see Cash on Delivery (COD) and Online Payment. For Dine-in or Take-out, I see Cash and Online Payment. Only 
one payment method can be selected at a time.

- AC3.2: Given I selected a payment method, when I view my order summary, then my selected payment method is displayed.

- AC3.3: Given I have not selected a payment method, when I click "Place Order," then I see the message "Please select a 
payment method" and the order is not submitted.