import { Outlet } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Menu } from './components/menu'

export function App() {
  return (
    <div className="app font-raleway">
      <Header />
      <Menu />
      <Outlet />
      <Footer />
    </div>
  )
}
