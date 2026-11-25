# AI Log
<!--
This file is your record of how you worked with AI (Gemini, ChatGPT, or Claude).
Using AI is allowed. Hiding it is not. This log shows your instructor that YOU
reviewed, understood, and made decisions about your code.

WHEN to add an entry:
- Every time you use AI to plan, write, explain, or debug a part of your app.
- Add the entry right after that step works, BEFORE you commit. Don't write it all at the end.

HOW to write an entry:
- Copy the template below and fill it in. Newest entry at the bottom.
- Write in your own words. Short is fine, but be specific.
- "What I changed or rejected" is the most important part. Even small changes count:
  renaming a class, fixing a bug the AI made, simplifying code, or saying no to a suggestion.
- If you used the AI's code exactly as given, write why it was okay and what you checked.

TEMPLATE (copy from here):

## Entry [#]: [Date]
- **User story:** [US# and short title]
- **What I asked:** [Your prompt, or a short summary of it]
- **What the AI suggested:** [1–2 sentences summarizing the AI's answer]
- **What I changed or rejected, and why:** [Your decisions in your own words]
- **How I tested it:** [Which acceptance criteria you checked, and whether each passed]
- **What I learned:** [One new thing you now understand]

EXAMPLE:

## Entry 3: Nov 20, 2026
- **User story:** US1: View today's menu
- **What I asked:** "Show me how to display my menu array as cards on app.html."
- **What the AI suggested:** A forEach loop that builds the cards with innerHTML.
- **What I changed or rejected, and why:** Renamed `.item-card` to `.menu-card` to match
  my CSS. The AI forgot the empty menu case, so I asked for a hint and added a
  "No dishes today yet" message myself.
- **How I tested it:** AC1.1 passed (cards show name, photo, price). AC1.3 passed
  after my fix (empty message shows).
- **What I learned:** forEach runs the same code once for every item in an array.

Minimum of 5 meaningful AI logs.
-->

## Entry 1: [Nov 25, 2026]
- **User story:** US1: Order type selection
- **What I asked:** How to create radio buttons for Dine-in, Take-out, and Delivery, display an error message when no 
option is selected, show an order summary, and display the delivery address field only when Delivery is selected.
- **What the AI suggested:** JavaScript using addEventListener(), querySelectorAll(), and forEach() to handle radio 
button selections. It also suggested using the hidden property to show or hide the delivery address section.
- **What I changed or rejected, and why:**  I kept my existing HTML structure and JavaScript variables. I inserted the 
suggested Step 2 code into my existing script.js instead of replacing my entire code.
- **How I tested it:** Checked that the error message appears when I click Place Order without selecting an option. 
Checked that the order summary displays the selected order type. Tested whether the delivery address appears when 
Delivery is selected and hides when Dine-in or Take-out is selected.
- **What I learned:**  I learned how the change event detects radio button selections, how forEach() applies an event 
listener to multiple radio buttons, and how the hidden property shows or hides an HTML element.