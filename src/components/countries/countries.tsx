import { FunctionComponent, useContext } from 'react'

import { ERROR_FOR_NO_CURRENCY_AMOUNT, TEXT_FOR_EMPTY_LIST } from '../../consts'
import { CountriesContext } from '../../context/countries-context'

import './countries.styles.css'

const Countries: FunctionComponent = () => {
  const { countries } = useContext(CountriesContext)

  return countries.length ? (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Flag</th>
            <th>Full Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>Currency</th>
            <th>Converted Amount</th>
          </tr>
        </thead>
        <tbody>
          {countries.map(
            ({
              flags,
              name,
              capital,
              population,
              currencies,
              convertCurrencyForCountry,
            }) => {
              return (
                <tr key={name.official}>
                  <td>
                    <img src={flags.svg} alt="" />
                  </td>
                  <td>{name.official}</td>
                  <td>{capital}</td>
                  <td>{population.toLocaleString()}</td>
                  <td className="currency-name">
                    {currencies ? Object.keys(currencies)[0] : 'undefined'}
                  </td>
                  <td className="converted-currency-amount">
                    {convertCurrencyForCountry
                      ? convertCurrencyForCountry
                      : ERROR_FOR_NO_CURRENCY_AMOUNT}
                  </td>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="empty-list">{TEXT_FOR_EMPTY_LIST}</div>
  )
}

export default Countries
