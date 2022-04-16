import { FunctionComponent, useContext, useEffect } from 'react'

import { CurrencyContext } from '../../context/currency-context'
import { CountriesContext } from '../../context/countries-context'
import { DEFAULT_CURRENCY_BASE, TEXT_FOR_HEADER } from '../../consts'

import './header.styles.css'

const Header: FunctionComponent = () => {
  const { findCurrencyRates } = useContext(CurrencyContext)
  const { findAllCountries } = useContext(CountriesContext)

  useEffect(() => {
    // Base is hard coded due to the limitations of fixer.io free plan
    findCurrencyRates(DEFAULT_CURRENCY_BASE)
    findAllCountries()
  }, [])

  return <h1>{TEXT_FOR_HEADER}</h1>
}

export default Header
