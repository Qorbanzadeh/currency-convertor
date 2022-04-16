import { createContext, FunctionComponent, useState } from 'react'

import { toast } from 'react-toastify'
import { getCurrencyRates } from '../services/currencyRates-api'
import { Rate, RateContext } from '../types/currency-type'

export const CurrencyContext = createContext<RateContext>({} as RateContext)

export const CurrencyProvider: FunctionComponent = ({ children }) => {
  const [rates, setRates] = useState([] as Rate[])
  const requestedCurrencyBase = 'SEK'

  const findCurrencyRates = async (base: string) => {
    const data = await toast.promise(getCurrencyRates(base), {
      pending: 'Loading',
      error: 'Network Error',
    })
    if (data.success) {
      const rates = Object.entries(data.rates)
      setRates(rates)
    } else toast.error(data.error)
    return data
  }

  return (
    <CurrencyContext.Provider
      value={{
        rates,
        findCurrencyRates,
        requestedCurrencyBase,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}
