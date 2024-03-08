import { Outlet } from 'react-router-dom'

import { Header } from './components/header'

export function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  )
}
