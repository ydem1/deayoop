import { Outlet } from 'react-router-dom'

import { Header } from './components/header'

export function App() {
  return (
    <div className="app font-raleway">
      <Header />
      <Outlet />
    </div>
  )
}
