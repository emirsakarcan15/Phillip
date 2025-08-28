import { createRoot } from 'react-dom/client'
import './index.css'
import "./CSS/styles.scss"
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from "react-redux"
import { store } from "./REDUX/store.jsx"
import ScrollToTop from "./COMPONENTS/ScrollToTop.jsx"


createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <BrowserRouter>
      <ScrollToTop />
        <App />
    </BrowserRouter>
  </Provider>,
)
