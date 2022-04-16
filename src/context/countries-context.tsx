import { createContext, FunctionComponent, useState, useContext } from 'react'
import { Country, CountryContext } from '../types/countries-type'
import { getAllCountries } from '../services/countries-api'

import { toast } from 'react-toastify'
import { CurrencyContext } from './currency-context'
import { convertCurrency } from '../utils/convert-currencies'

export const CountriesContext = createContext<CountryContext>(
  {} as CountryContext
)

export const CountriesProvider: FunctionComponent = ({ children }) => {
  const [countries, setCountries] = useState([] as Country[])
  const { rates, requestedCurrencyBase } = useContext(CurrencyContext)
  const [data, setData] = useState([] as Country[])

  const convertCurrencyForCountries = (
    countries: Country[],
    amount: string
  ) => {
    const countryList = countries.map((country) => ({
      ...country,
      convertCurrencyForCountry: country.currencies
        ? convertCurrency(
            rates as [],
            Number(amount),
            Object.keys(country.currencies)[0],
            requestedCurrencyBase
          )
        : 'undefined',
    }))
    setCountries(countryList as [])
  }

  const findAllCountries = async () => {
    const result = await toast.promise(getAllCountries(), {
      pending: 'Loading',
      error: 'Network Error',
    })
    if (result) {
      convertCurrencyForCountries(result, '')
      setData(result)
    } else toast.error('Something went wrong!')
  }

  const findCountries = async (name: string, currencyAmount: string) => {
    if (!name) convertCurrencyForCountries(data, currencyAmount)
    else {
      const filteredList: Country[] = data.filter((country: Country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      )
      convertCurrencyForCountries(filteredList, currencyAmount)
    }
  }

  return (
    <CountriesContext.Provider
      value={{
        countries,
        findCountries,
        convertCurrencyForCountries,
        findAllCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  )
}
