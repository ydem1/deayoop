import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from './components/Header';
import { Menu } from './components/Menu'
import { Footer } from './components/Footer';

export function App() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="app font-raleway">
      <Header toggleMenu={() => setIsMenu(!isMenu)} />
      {isMenu && <Menu />}
      <Outlet />
      <Footer />
    </div>
  )
}
