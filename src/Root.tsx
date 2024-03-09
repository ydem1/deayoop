import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
import { User } from './pages/User';


export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="order" element={<h1>order</h1>} />
          <Route path="favourite" element={<h1>favourite</h1>} />
          <Route path="help" element={<h1>help</h1>} />
          <Route path="profile" element={<h1>profile</h1>} />
        </Route>
  
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
