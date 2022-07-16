import * as ReactDOMClient from 'react-dom/client'
import App from './App'
import { RatingProvider } from './context/RatingContext'
import './styles/styles.css'

ReactDOMClient.createRoot( document.getElementById('root') ).render(
  <RatingProvider>
    <App />
  </RatingProvider>
)