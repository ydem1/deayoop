import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App.tsx';
import { Home } from '../pages/Home/Home.tsx';
import { User } from '../pages/User/User.tsx';
import { Other } from '../pages/User/components/Other/Other.tsx';
import { Profile } from '../pages/User/components/Profile/Profile.tsx';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/deayoop',
        element: <Home />
      },
      {
        path: '/deayoop/user',
        element: <User />,
        children: [
          {
            path: '/deayoop/user/order',
            element: <Other />
          },
          {
            path: '/deayoop/user/favourite',
            element: <Other />
          },
          {
            path: '/deayoop/user/help',
            element: <Other />
          },
          {
            path: '/deayoop/user/profile',
            element: <Profile />
          }
        ]
      },
      {
        path: '*',
        element: <p>Not Found Page</p>
      }
    ]
  }
]);
