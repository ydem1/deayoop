import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { Home } from './pages/Home';


export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  </Router>
);
