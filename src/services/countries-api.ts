const baseURL = 'https://restcountries.com/v3.1'

export const getCountryByName = async (name: string) => {
  const res = await fetch(`${baseURL}/name/${name}`)
  const data = await res.json()
  return data
}

export const getAllCountries = async () => {
  const res = await fetch(`${baseURL}/all`)
  const data = await res.json()
  return data
}
