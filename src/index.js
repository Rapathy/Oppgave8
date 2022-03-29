import ReactDOM from 'react-dom'
import './styles/css/main.css'
// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
// import './styles/css/main.css'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
