import { roundMoney } from "./roundMoney.js"

// Tax Rates
const lowRate = .05
const highRate = .095

// Calculates taxes based on price
function calculateTax(totalPrice) {
  let taxRate = 0

  if (totalPrice >= 10 && totalPrice < 100) {
    taxRate = lowRate
  } else {
    taxRate = highRate
  }

  const preTax = roundMoney(totalPrice)
  const postTax = roundMoney((preTax * taxRate) + preTax)

  return {
    preTax,
    postTax,
    taxRate
  }
}

// Create ten examples and use the calc function
for (let x = 0; x < 10; ++x) {
  const invoiceTotal = Math.random() * 1000
  const { postTax, taxRate } = calculateTax(invoiceTotal)
  console.log(`Total: $${roundMoney(invoiceTotal)} X ${taxRate} =   $${postTax}`)
}