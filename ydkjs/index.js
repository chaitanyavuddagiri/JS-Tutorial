let bank_account_balance = 1000; //prompt("Enter your bank account balance");
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 500;

function calculateTax(amount) {
	return amount * TAX_RATE;
}

function formatAmount(amount) {
	return "$" + amount.toFixed(2);
}

counter = 0;
amount = 0;
while (amount <= bank_account_balance) {
	var phone_price = PHONE_PRICE;
	var phone_price_with_tax = calculateTax(phone_price);
	if (phone_price_with_tax + ACCESSORY_PRICE < SPENDING_THRESHOLD) {
		phone_price_with_tax += ACCESSORY_PRICE;
	}
	amount = amount + phone_price_with_tax;
	counter++;

	var phone_price_with_tax_formatted = formatAmount(phone_price_with_tax);
	console.log("Phone " + counter + ": " + phone_price_with_tax_formatted);
}
