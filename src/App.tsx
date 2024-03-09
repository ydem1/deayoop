import { Outlet } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'
import { Menu } from './components/menu'
import { useState } from 'react'

export function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="app font-raleway">
      <Header toggleMenu={() => setIsMenu(!isMenu)} />
      {isMenu && <Menu /> }
      <Outlet />
      <Footer />
    </div>
  )
}
