import ReactDom from 'react-dom'
import { StrictMode } from 'react'

import App from './components/app/app'

import './index.styles.css'

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
