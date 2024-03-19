import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function App() {
  const [isMenu, setIsMenu] = useState(false);

  const hadndleToggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const hadndleCloseMenu = () => {
    setIsMenu(false);
  };

  return (
    <div className="app font-raleway">
      <Header toggleMenu={hadndleToggleMenu} />
      <Menu closeMenu={hadndleCloseMenu} isOpen={isMenu} />
      <Outlet />
      <Footer />
    </div>
  )
}
