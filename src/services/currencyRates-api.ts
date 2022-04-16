const baseURL = 'http://data.fixer.io/api'

export const getCurrencyRates = async (base: string) => {
  const res = await fetch(
    `${baseURL}/latest?access_key=${process.env.FIXERIO_ACCESS_KEY}&base=${base}`
  )
  const data = res.json()

  return data
}
