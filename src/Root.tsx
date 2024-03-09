import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Other } from './pages/User/components/Other/Other';
import { Profile } from './pages/User/components/Profile';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="order" element={<Other />} />
          <Route path="favourite" element={<Other />} />
          <Route path="help" element={<Other />} />
          <Route path="profile" element={<Profile />} />
        </Route>
  
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
