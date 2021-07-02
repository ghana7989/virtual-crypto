require('number-to-locale-string-polyfill')

function formatMoney(amount: number, isINR: boolean = true) {
	return amount.toLocaleString('en-IN', {
		maximumFractionDigits: 2,
		currency: 'INR',
		style: isINR ? 'currency' : undefined,
	})
}

export default formatMoney
