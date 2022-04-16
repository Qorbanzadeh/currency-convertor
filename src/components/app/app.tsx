import { FunctionComponent } from 'react'
import { ToastContainer } from 'react-toastify'

import Form from '../form/form'
import Countries from '../countries/countries'
import Header from '../header/header'
import { CurrencyProvider } from '../../context/currency-context'
import { CountriesProvider } from '../../context/countries-context'

import './app.styles.css'
import 'react-toastify/dist/ReactToastify.css'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      {/* Providers */}
      <CurrencyProvider>
        <CountriesProvider>
          <ToastContainer />
          {/* Layout */}
          <Header />
          <Form />
          <Countries />
          {/* Layout */}
        </CountriesProvider>
      </CurrencyProvider>
      {/* Providers */}
    </div>
  )
}

export default App
