import { ChangeEvent, useState, FunctionComponent, useContext } from 'react'
import { toast } from 'react-toastify'

import {
  REGEX_FOR_COUNTRY_NAMES,
  REGEX_FOR_CURRENCY_AMOUNT,
  TEXT_FOR_COUNTRY_NAME_INPUT,
  TEXT_FOR_CURRENCY_AMOUNT_INPUT,
  WARNING_FOR_A_NOT_VALID_COUNTRY_NAME,
  WARNING_FOR_A_NOT_VALID_CURRENCY_AMOUNT,
} from '../../consts'
import { CountriesContext } from '../../context/countries-context'
import Input from '../input/input'

import './form.styles.css'

const Form: FunctionComponent = () => {
  const [countryInputValue, setCountryInputValue] = useState('')
  const [currencyInputValue, setCurrencyInputValue] = useState('')
  const { findCountries, convertCurrencyForCountries, countries } =
    useContext(CountriesContext)

  const checkForCountryName = (name: string) => {
    if (name && !REGEX_FOR_COUNTRY_NAMES.test(name))
      toast.warning(WARNING_FOR_A_NOT_VALID_COUNTRY_NAME)
    else {
      setCountryInputValue(name)
      findCountries(name, currencyInputValue)
    }
  }

  const checkForCurrencyAmount = (amount: string) => {
    if (amount && !REGEX_FOR_CURRENCY_AMOUNT.test(amount))
      toast.warning(WARNING_FOR_A_NOT_VALID_CURRENCY_AMOUNT)
    else {
      setCurrencyInputValue(amount)
      convertCurrencyForCountries(countries, amount)
    }
  }

  const onChangeHandler = (event: ChangeEvent<HTMLElement>) => {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      value: string
      id: string
    }
    if (target.id === 'currency-amount') {
      checkForCurrencyAmount(target.value)
    } else {
      checkForCountryName(target.value)
    }
  }

  return (
    <form>
      <Input
        labelText={TEXT_FOR_COUNTRY_NAME_INPUT}
        inputId="country-name"
        value={countryInputValue}
        onChangeHandler={onChangeHandler}
      ></Input>
      <Input
        labelText={TEXT_FOR_CURRENCY_AMOUNT_INPUT}
        inputId="currency-amount"
        value={currencyInputValue}
        onChangeHandler={onChangeHandler}
      ></Input>
    </form>
  )
}

export default Form
