import { ERROR_FOR_NO_CURRENCY_AMOUNT } from '../consts'

export const convertCurrency = (
  rates: [],
  amount: number,
  localCurrency: string,
  requestedCurrency: string
) => {
  if (!amount) return ERROR_FOR_NO_CURRENCY_AMOUNT
  const localCurrencyRate = rates.find(
    (currency) => currency[0] === localCurrency
  )
  const requestedCurrencyRate = rates.find(
    (currency) => currency[0] === requestedCurrency
  )

  if (requestedCurrencyRate && localCurrencyRate) {
    const result = (amount / requestedCurrencyRate[1]) * localCurrencyRate[1]
    return (Math.round((result + Number.EPSILON) * 100) / 100).toString()
  }
  return 'undefined'
}
