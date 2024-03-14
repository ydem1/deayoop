import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { store } from 'store/store'
import { Provider } from 'react-redux'
import { router } from './router'

import '@fortawesome/fontawesome-free/css/all.css'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>,
  </React.StrictMode>,
)
