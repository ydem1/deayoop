import { App } from 'App.tsx';
import { ROUTES } from 'constants/routes.tsx';
import { Home } from 'pages/Home';
import { User } from 'pages/User';
import { Other } from 'pages/User/Other';
import { Profile } from 'pages/User/Profile';
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />
      },
      {
        path: ROUTES.USER,
        element: <User />,
        children: [
          {
            path: ROUTES.USER_ORDER,
            element: <Other />
          },
          {
            path: ROUTES.USER_FAVOURITE,
            element: <Other />
          },
          {
            path: ROUTES.USER_HELP,
            element: <Other />
          },
          {
            path: ROUTES.USER_PROFILE,
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
