import React from 'react'
import 'dayjs/locale/ru'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './styles/global-styles'
import dayjs from 'dayjs'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { checkAuthAction } from './store/auth-slice/auth-api-actions'

store.dispatch(checkAuthAction())
dayjs.locale('ru')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <GlobalStyle/>
      <App/>
    </Provider>
  </React.StrictMode>,
)
