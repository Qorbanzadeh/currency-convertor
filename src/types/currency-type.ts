export type Rate = [string, unknown]

export interface RateResponse {
  success: boolean
  base: string
  rates: Rate[]
}

export interface RateContext {
  rates: Rate[]
  findCurrencyRates: (base: string) => Promise<void>
  requestedCurrencyBase: string
}
