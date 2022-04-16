export interface Country {
  ccn3: number
  name: {
    common: string
    official: string
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  currencies: {}
  capital: []
  population: number
  flags: {
    svg: string
  }
  convertCurrencyForCountry: string
}

export interface CountryContext {
  countries: Country[]
  findAllCountries: () => Promise<void>
  findCountries: (name: string, currencyAmount: string) => Promise<void>
  convertCurrencyForCountries: (countries: Country[], amount: string) => void
}
