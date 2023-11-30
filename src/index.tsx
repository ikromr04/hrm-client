import React from 'react'
import 'dayjs/locale/ru'
import ReactDOM from 'react-dom/client'
import App from './components/app/app'
import { Provider } from 'react-redux'
import { store } from './store'
import GlobalStyle from './style/global-styles'
import { checkAuthorizationAction } from './store/employees-slice/employees-api-actions'
import dayjs from 'dayjs';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(checkAuthorizationAction());
dayjs.locale('ru');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <GlobalStyle/>
      <App/>
    </Provider>
  </React.StrictMode>,
);
