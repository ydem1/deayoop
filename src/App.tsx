import { Outlet } from 'react-router-dom'

import { Header } from './components/header'
import { Footer } from './components/footer'

export function App() {
  return (
    <div className="app font-raleway">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
